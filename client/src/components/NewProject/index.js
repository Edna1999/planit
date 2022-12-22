import React, { useEffect } from 'react';
import { ADD_PROJECT } from '../../utils/actions';
import { useProjectContext } from '../../utils/GlobalState';
import { idbPromise } from '../../utils/helpers';

const NewProjects = () => {
  const [state, dispatch] = useProjectContext();

  const addProject = () => {
    dispatch({
      type: ADD_PROJECT,
      projects: [...state.projects]
    });
    idbPromise('projects', 'put', {
      // Needs to get the information from the form
    })
  }

  return (
    <form onSubmit={addProject}>
      <input id='projectName' placeholder='projectName'/>
      <input id='projectDescription' placeholder='projectDescription'/>
      <input id='startDate' placeholder='startDate'/>
      <input id='endDate' placeholder='endDate'/>
      <input id='' placeholder='Any Other'/>
      <button type='submit'>Submit Form</button>
    </form>
  )
}

export default NewProjects;