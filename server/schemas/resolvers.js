const { AuthenticationError } = require('apollo-server-express');
const { User, Task, Project } = require('../models');
const { signToken } = require('../utils/auth');
const { ObjectId } = require('mongoose');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate('projects').populate({
        path: 'projects',
        populate: 'tasks'
      });
    },
    tasks: async () => {
      return await Task.find({}).populate('users');
    },
    projects: async () => {
      return await Project.find({}).populate('users').populate('tasks');
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username }).populate('projects').populate({
        path: 'projects',
        populate: 'tasks'
      });
    },
    task: async (parent, { taskId }) => {
      return await Task.findOne({ _id: taskId }).populate('users');
    },
    project: async (parent, { projectId }) => {
      return await Project.findOne({ _id: projectId }).populate('users').populate('tasks');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id }).populate('projects').populate({
          path: 'projects',
          populate: 'tasks'
        });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, firstName, lastName, email, password }) => {
      const user = await User.create({ username, firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addTask: async (parent, { projectId, taskName }, context) => {
      if (context.user) {
        const task = await Task.create({
          taskName,
        });

        return await Project.findOneAndUpdate(
          {_id: projectId},
          {
            $addToSet: {tasks: task},
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
    removeTask: async (parent, { taskId }, context) => {
      if (context.user) {
        const task = await Task.findOneAndDelete({
          _id: taskId,
        });

        return await Project.findOneAndUpdate(
          { _id: taskId},
          { $pull: { tasks: task._id } }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateTask: async (parent, { taskId, taskName, taskDescription, startDate, endDate }, context) => {
      if(context.user){
        return await Task.findOneAndUpdate(
          { _id: taskId },
          { 
            $set: {
              taskName,
              taskDescription,
              startDate,
              endDate
            }
          },
          { new: true }  
        );
      }
    },  

    addProject: async (parent, { projectName, projectDescription }, context) => {
      if (context.user) {
        const project = await Project.create({
          projectDescription,
          projectName,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { projects: project._id } },
          {
            new: true,
            runValidators: true,
          }
        );

        return project;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
    removeProject: async (parent, { projectId }, context) => {
      if (context.user) {
        const project = await Project.findOneAndDelete({
          _id: projectId,
          users: { $in: [context.user._id] },
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { projects: project._id } }
        );

        return project;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateProject: async (parent, { projectId, projectName, projectDescription, startDate, endDate, isComplete }, context) => {
      if (context.user) {
        const project = await Project.findOneAndUpdate(
          {
            _id: projectId,
            users: { $in: [context.user._id] }
          },
          { $set: {
            projectName,
            projectDescription,
            startDate,
            endDate,
            isComplete
            }
          }, 
          { new: true }
        );

        return project;
      }
    },   
  }
};

module.exports = resolvers;
