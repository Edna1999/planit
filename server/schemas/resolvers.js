const { AuthenticationError } = require('apollo-server-express');
const { User, Task, Project } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('projects').populate('tasks');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('projects').populate('tasks');
    },
    tasks: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Task.find(params).sort({ createdAt: -1 });
    },
    task: async (parent, { taskId }) => {
      return Task.findOne({ _id: taskId });
    },
    projects: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Project.find(params).sort({ createdAt: -1 });
    },
    project: async (parent, { projectId }) => {
      return Project.findOne({ _id: projectId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('projects').populate('tasks');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
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

    addTask: async (parent, { taskName, taskDescription }, context) => {
      if (context.user) {
        const task = await Task.create({
          taskDescription,
          taskName,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { tasks: task._id } }
        );

        return task;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
    removeTask: async (parent, { taskId }, context) => {
      if (context.user) {
        const task = await Task.findOneAndDelete({
          _id: taskId,
          users: context.user.firstName,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { tasks: task._id } }
        );

        return task;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addProject: async (parent, { projectName, projectDescription }, context) => {
      if (context.user) {
        const project = await Project.create({
          projectDescription,
          projectName,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { projects: project._id } }
        );

        return project;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
    removeProject: async (parent, { projectId }, context) => {
      if (context.user) {
        const project = await Project.findOneAndDelete({
          _id: projectId,
          users: context.user.firstName,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { projects: project._id } }
        );

        return project;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateProject: async (parent, {projectName, projectDescription, projectTeam }, context) => {
    if(context.user){
        const project = await Project.findOneAndUpdate(
         {_id: context.user._id},
         { $addToSet: {
          projects: projectName, projectDescription, projectTeam
        } }, 
        {$pull: {projects: projectTeam}}
         
          
        )

        return project
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    
    
        
      updateTask: async (parent, { taskName, taskDescription, users}, context) => {
        if(context.user){
           const task = await Task.findOneAndUpdate(
           {_id: context.user._id},
            { $addToSet: {tasks: taskName, taskDescription, users} },
            {$pull: { users }}
                  
          )
        
           return task
            }
            throw new AuthenticationError('You need to be logged in!');
       }, 
       
       
      
       
    }
};

module.exports = resolvers;
