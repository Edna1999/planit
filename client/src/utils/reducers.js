import { useReducer } from 'react';
import {
  UPDATE_PROJECT_NAME,
  UPDATE_PROJECT_DESCRIPTION,
  REMOVE_PROJECT_MEMBERS,
  ADD_PROJECT_MEMBERS,
  UPDATE_PROJECT_START_DATE,
  UPDATE_PROJECT_END_DATE,
  DELETE_PROJECT,
  PROJECT_IS_COMPLETE,
  PROJECT_IS_NOT_COMPLETE,
  UPDATE_PROJECT,
  UPDATE_CURRENT_PROJECT,
  ADD_PROJECT
} from "./actions"

export const reducer = (state, action) => {
  let selectedProject
  switch (action.type) {
    case UPDATE_PROJECT_NAME:
      // Finds the project we want to update
      selectedProject = state.projects.filter((project) => {
        return project._id === action._id
      })  
      // Changes the projectName
      selectedProject.projectName = action.projectName
      return {
        ...state,
        projects: [...state.projects, selectedProject[0]]
      };
    case UPDATE_PROJECT_DESCRIPTION:
      // Finds the project we want to update
      selectedProject = state.projects.filter((project) => {
        return project._id === action._id
      })  
      // Changes the projectDescription
      selectedProject.projectDescription = action.projectDescription
      return {
        ...state,
        projects: [...state.projects, selectedProject[0]]
      };
    case REMOVE_PROJECT_MEMBERS:
      // Finds the project we want to update
      selectedProject = state.projects.filter((project) => {
        return project._id === action._id
      })  
      // Filters out the user we no longer want in our given project
      selectedProject[0].projectTeam.filter((user) => user._id !== action.user.userId)
        return {
          ...state,
          projects: [...state.projects, selectedProject[0]]
        };
    case ADD_PROJECT_MEMBERS:
      // Finds the project we want to update
      selectedProject = state.projects.filter((project) => {
        return project._id === action._id
      })
      // Returns true or the team member if the memeber is already in the project
      let doesTeamInclude = selectedProject[0].projectTeam.filter((user) => {
        return user._id === action.user.userId
      })
      // Returns if team member is filtered out and already in the project
      if (doesTeamInclude) {
        console.log('Team member is already in the project')
        return;
      }
      // Pushes new user to projectTeam
      selectedProject[0].projectTeam.push(action.user)
      return {
        ...state,
        projects: [...state.projects, selectedProject[0]]
      };
    case UPDATE_PROJECT_START_DATE:
      // Finds the project we want to update
      selectedProject = state.projects.filter((project) => {
        return project._id === action._id
      })
      // Changes the given project's start date
      selectedProject[0].startDate = action.startDate
      return {
        ...state,
        projects: [...state.projects, selectedProject[0]]
      };
    case UPDATE_PROJECT_END_DATE:
      // Finds the project we want to update
      selectedProject = state.projects.filter((project) => {
        return project._id === action._id
      })
      // Changes the given project's end date
      selectedProject[0].endDate = action.endDate
      return {
        ...state,
        projects: [...state.projects, selectedProject[0]]
      };
    case DELETE_PROJECT:
      // Finds the project we want to update
      selectedProject = state.projects.filter((project) => {
        return project._id === action._id
      })
      if (!selectedProject) {
        console.log('No valid project chosen')
        return;
      }
      return {
        ...state,
        projects: [...state.projects]
      }
    case PROJECT_IS_COMPLETE:
      // Finds the project we want to update
      selectedProject = state.projects.filter((project) => {
        return project._id === action._id
      })
      // Changes project isComplete status to true
      selectedProject[0].isComplete = true
      return {
        ...state,
        projects: [...state.projects, selectedProject[0]]
      }
    case PROJECT_IS_NOT_COMPLETE:
      // Finds the project we want to update
      selectedProject = state.projects.filter((project) => {
        return project._id === action._id
      })
      // Changes project isComplete status to false
      selectedProject[0].isComplete = false
      return {
        ...state,
        projects: [...state.projects, selectedProject[0]]
      }
    case UPDATE_PROJECT:
      return {
        ...state,
        currentProject: action.currentProject
      }
    case UPDATE_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: action.currentProject
      }
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.projects]
      }
    default:
      return state;
  }
}

export function useProjectReducer(initialState) {
  return useReducer(reducer, initialState)
}

// action._id returns the project Id that we are updating
// action.user returns the object of the given user that we are updating
// action.user.userId return the user._id of the user we are messing with
// action.projectName returns the projectName that we are changing
// action.projectDescription returns the projectDescription that we are changing
// action.startDate and endDate are the same as projectName and projectDescription