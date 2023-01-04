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
    
      
    }
  }
}
`;

export const REMOVE_TASK = gql`
mutation removeTask($taskId: ID!) {
  removeTask(taskId: $taskId) {
    _id
  
  }
}
`;

 export const ADD_PROJECT = gql`
    mutation addProject($projectName: String!, $projectDescription: String!, $startDate: String!, $endDate: String!) {
    addProject(projectName: $projectName, projectDescription: $projectDescription, startDate: $startDate, endDate: $endDate) {
     _id
     projectName
     projectDescription
     startDate
     endDate
    createdAt
   }
 }
 `;


 export const UPDATE_TASK = gql`
mutation updateTask($taskName: String!, $taskDescription: String!, $startDate: String!, $endDate: String!){
  updateTask( taskName: $taskName, taskDescription: $taskDescription, startDate: $startDate, endDate: $endDate ) {
    task {
      _id
      taskName
      taskDescription
      startDate
      endDate
    }

  }
}
`;


export const REMOVE_PROJECT = gql`
mutation removeProject($projectId: ID!) {
  removeProject(projectId: $projectId) {
    _id
    
  }
}
`;

export const UPDATE_PROJECT = gql`
mutation updateProject($projectName: String!, $projectDescription: String!, $startDate: String!, $endDate: String!, $isComplete: Boolean!){
  updateProject( projectName: $projectName, projectDescription: $projectDescription, startDate: $startDate, endDate: $endDate, isComplete: $isComplete ) {
    project {
      _id
      projectName
      projectDescription
      startDate
      endDate
      isComplete

    }

  }
}
`;






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
