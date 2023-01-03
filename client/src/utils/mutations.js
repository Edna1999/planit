import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
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
mutation addTask($projectId: String!, $taskName: String!) {
  addTask(projectId: $projectId, taskName: $taskName) {
    _id
    projectName
    task {
      _id
      taskName
      taskDescription
      createdAt
      users {
        _id
        username
      }
      
    }
  }
}
`;

export const REMOVE_TASK = gql`
mutation removeTask($taskId: ID!) {
  removeTask(taskId: $taskId) {
    taskId
  
  }
}
`;

//  export const ADD_PROJECT = gql`
//     mutation addProject($projectName: String!, $projectDescription: String!, $startDate: String!, $endDate: String!) {
//     addProject(projectName: $projectName, projectDescription: $projectDescription, startDate: $startDate, endDate: $endDate) {
//      _id
//      projectName
//      projectDescription
//      startDate
//      endDate
//      users {
//       _id
//       username
//      }
//     tasks {
//       _id
//       taskName
//     }
//     createdAt
//    }
//  }
//  `;


//  export const UPDATE_TASK = gql`
// mutation updateTask($taskName: String!, $taskDescription: String!){
//   updateTask( taskName: $taskName, taskDescription: $taskDescription) {
//     project {
//       _id
//       taskName
//       taskDescription
//     }

//   }
// }
// `;


// export const REMOVE_PROJECT = gql`
// mutation removeProject($projectId: ID!) {
//   removeProject(projectId: $projectId) {
//     _id
//     projectName
//     projectDescription
//     startDate
//     endDate
//     users
//     tasks
//   }
// }
// `;

// export const UPDATE_PROJECT = gql`
// mutation updateProject($projectName: String!, $projectDescription: String!){
//   updateProject( projectName: $projectName, projectDescription: $projectDescription) {
//     project {
//       _id
//       projectName
//       projectDescription
//     startDate
//     endDate
//     users
//     tasks

//     }

//   }
// }
// `;






// export const ADD_PROJECT_MEMBER = gql`
// mutation addProjectMember($projectId : ID!){
//   addProjectMember(projectId: $projectId){
//     project {
//       _id
//       projectTeam 
      
//     }
//   }
// }
// `;
