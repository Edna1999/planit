import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      firstName
      lastName
      email
      projects {
        projectId
        projectName
        startDate
        endDate
      }
      tasks {
        taskId
        taskName
        TaskDescription
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
      tasks {
        _id
        taskName
        taskDescription
        startDate
        endDate
        taskAssignee
      }
      projectTeam {
        _id
        firstName
        lastName
        email
      }
    }
  }
`

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      projects {
        projectId
        projectName
        startDate
        endDate
      }
      tasks {
        taskId
        taskName
        TaskDescription
      }
    }
  }
`;
