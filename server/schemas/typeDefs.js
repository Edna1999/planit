const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
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
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTask(taskName: String!, taskDescription: String!): Task
    removeTask(taskId: ID!): Task
  }
`;

module.exports = typeDefs;
