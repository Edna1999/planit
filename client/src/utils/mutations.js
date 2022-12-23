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
mutation removeTask($taskName: String!, $taskDescription: String!) {
  removeTask(taskName: $taskName, taskDescription: $taskDescription) {
    _id
    taskName
    taskDescription
    users
    createdAt
  }
}
`;

// export const ADD_PROJECT = gql`
// mutation addProject($projectDescription: String!) {
//   addTask(projectDescription: $projectDescription) {
//     _id
//     projectName
//     projectDescription
//     projectTeam
//     createdAt
  
//   }
// }
// `;

// export const UPDATE_PROJECT_NAME= gql`
// mutation updateProjectName($projectName: String!){
//   updateProjectName( projectName: $projectName) {
//     project {
//       _id
//       projectName
//     }

//   }
// }
// `;

// export const UPDATE_PROJECT_DESCRIPTION= gql`
// mutation updateProjectDescription($projectDescription: String!){
//   updateProjectDescription( projectDescription: $projectDescription) {
//     project {
//       _id
//       projectDescription
//     }

//   }
// }
// `;

// export const UPDATE_TASK_NAME= gql`
// mutation updateTaskName($taskName: String!){
//   updateTaskName( taskName: $taskName) {
//     project {
//       _id
//       taskName
//     }

//   }
// }
// `;

// export const UPDATE_TASK_DEESCRIPTION= gql`
// mutation updateTaskDescription($taskDescription: String!){
//   updateTaskDescription( taskDescription: $taskDescription) {
//     project {
//       _id
//       taskDescription
//     }

//   }
// }
// `;
