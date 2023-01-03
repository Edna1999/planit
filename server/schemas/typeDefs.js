const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    password: String
    tasks: [Task]
    projects: [Project]
  }

  type Project {
    _id: ID
    projectName: String
    projectDescription: String
    startDate: String
    endDate: String
    isComplete: Boolean
    tasks: [Task]
    users: [User]
  }

  type Task {
    _id: ID
    taskName: String
    taskDescription: String
    startDate: String
    endDate: String
    users: [User]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    projects: [Project]
    tasks: [Task]
    user(username: String!): User
    project(projectId: String!): Project
    task(taskId: ID!): Task
    me: User
  }

  type Mutation {
    addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTask(projectId: ID!, taskName: String!): Task
    removeTask(taskId: ID!): Task
    updateTask(taskId: ID!, taskName: String, taskDescription: String, startDate: String, endDate: String): Task
    addProject(projectName: String!, projectDescription: String!): Project
    removeProject(projectId: ID!): Project
    updateProject(projectId: ID!, projectName: String, projectDescription: String, startDate: String, endDate: String, isComplete: Boolean): Project
  }
`;

module.exports = typeDefs;
