const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    projects: [Project]
    tasks: [Task]
  }

  type Project {
    _id: ID
    projectName: String
    projectDescription: String
    tasks: [Task]
    users: [User]
  }

  type Task {
    _id: ID
    taskName: String
    taskDescription: String
    users: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    project(projectId: String!): Project
    projects(email: String!): [Project]
    tasks(email: String!): [Task]
    task(taskId: ID!): Task
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTask(taskName: String!, taskDescription: String!): Task
    removeTask(taskId: ID!): Task
  }
`;

module.exports = typeDefs;
