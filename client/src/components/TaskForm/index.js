import React, { useEffect } from 'react';
import { ADD_TASK } from '../../utils/actions';
import { useTaskContext } from '../../utils/taskContext';
import { idbPromise } from '../../utils/helpers';

const NewTasks = () => {
  const [state, dispatch] = useTaskContext();

  const addTask = () => {
    dispatch({
      type: ADD_TASK,
      tasks: [...state.tasks]
    });
    idbPromise('tasks', 'put', {
     
    })
  }

  return (
    <form onSubmit={addTask}>
      <input id='taskName' placeholder='taskName'/>
      <input id='taskDescription' placeholder='taskDescription'/>
      <input id='startDate' placeholder='startDate'/>
      <input id='endDate' placeholder='endDate'/>
      <input id='' placeholder='Any Other'/>
      <button type='submit'>Submit Form</button>
    </form>
  )
}

export default NewTasks;