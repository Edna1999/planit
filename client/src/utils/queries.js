import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      firstName
      lastName
      email
      projects {
        _id
        projectName
      }
      tasks {
        _id
        taskName
      }
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query projects {
    projects {
      _id
      projectName
      projectDescription
      startDate
      endDate
      isComplete
      tasks {
        _id
        taskName
      }
      user{
        _id
        username
      }
    }
  }
`

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      firstName
      lastName
      email
      projects {
        _id
        projectName
      }
      tasks {
        _id
        taskName
      }
    }
  }
`;

export const QUERY_TASKS = gql`
  query getTasks {
    tasks {
      _id
      taskName
      taskDescription
      taskAssignee {
        userId
        firstName
        lastName
      }
      createdAt
    }
  }
`;

// export const QUERY_PROJECTS = gql`
//   query getprojects {
//     projects {
//       _id
//       projectName
//       projectDescription
//       projectTeam {
//        userId
//        firstName 
//        lastName
//       }
//       tasks{
//        taskId
//        taskName
//        taskDescription

//       }
//       createdAt
//     }
//   }
// `;
