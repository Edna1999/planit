import { useReducer } from 'react';
import {
  UPDATE_PROJECT_NAME,
  UPDATE_PROJECT_DESCRIPTION,
  REMOVE_PROJECT_MEMBERS,
  ADD_PROJECT_MEMBERS,
  UPDATE_PROJECT_START_DATE,
  UPDATE_PROJECT_END_DATE
} from "./actions"

export const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_PROJECT_NAME:
      return {
        ...state,
        products: [...action.products.projectName]
      };
    case UPDATE_PROJECT_DESCRIPTION:
      return {
        ...state,
        products: [...action.products.projectDescription]
      };
    case REMOVE_PROJECT_MEMBERS:

      // write logic to filter out which project is selected
      // we can do so using conditional logic associating the project._id to the action._id

      let selectedProject = state.projects.filter((project) => {
        return project._id === action._id
      })  

      selectedProject[0].projectTeam.filter((user) => {user._id !== action.userId})
    
        return {
          ...state,
          projects: [...state.projects, selectedProject[0]]
        };
    case ADD_PROJECT_MEMBERS:
      newState = state.projects.filter((project) => {
        return project._id !== action._id
      });
        
      return {
        ...state,
        projects: state.projects.map((project, user) => {
          if (action._id === project._id) {
            if (action)
          }
        })
      };
    case UPDATE_PROJECT_START_DATE:
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (action._id === project._id) {
            project.startDate = action.startDate
          }
          return project
        })
      };
    case UPDATE_PROJECT_END_DATE:
      return {

      };
    default:
      return state;
  }
}