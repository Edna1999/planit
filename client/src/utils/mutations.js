import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_TASK = gql`
mutation addTask($taskName: String!, $taskDescription: String!) {
  addTask(taskName: $taskName, taskDescription: $taskDescription) {
    _id
    taskName
    taskDescription
    users
    createdAt
  
  }
}
`;

export const REMOVE_TASK = gql`
mutation removeTask($taskId: ID!) {
  removeTask(taskId: $taskId) {
    _id
    taskName
    taskDescription
    users
    createdAt
  }
}
`;

export const ADD_PROJECT = gql`
mutation addProject($projectDescription: String!) {
  addTask(projectDescription: $projectDescription) {
    _id
    projectName
    projectDescription
    projectTeam
    createdAt
  }
}
`;


export const REMOVE_PROJECT = gql`
mutation removeProject($projectId: ID!) {
  removeProjectk(projectId: $projectId) {
    _id
    projectName
    projectDescription
    projectTeam
    createdAt
  }
}
`;

export const UPDATE_PROJECT = gql`
mutation updateProject($projectName: String!, $projectDescription: String!, $projectTeam: Array!){
  updateProject( projectName: $projectName, projectDescription: $projectDescription, projectTeam: $projectTeam) {
    project {
      _id
      projectName
      projectDescription
      projectTeam
      createdAt
    }

  }
}
`;


export const UPDATE_TASK = gql`
mutation updateTask($taskName: String!, $taskDescription: String!, $users: Array!){
  updateTask( taskName: $taskName, taskDescription: $taskDescription, users: $users) {
    project {
      _id
      taskName
      taskDescription
      users
      createdAt
    }

  }
}
`;




