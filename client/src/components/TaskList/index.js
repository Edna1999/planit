import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { QUERY_TASKS } from '../../utils/queries';
import { useTaskContext } from '../../utils/taskContext';
import { UPDATE_CURRENT_TASK, UPDATE_TASK } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';



const Tasks = () => {
  const [state, dispatch] = useTaskContext();
  const { tasks } = state;
  const { loading, data: taskData } = useQuery(QUERY_TASKS);

  useEffect(() => {
    if (taskData) {
      dispatch({
        type: UPDATE_TASK,
        tasks: taskData
      });
      taskData.tasks.forEach((task) => {
        idbPromise('tasks', 'put', task);
      });
    } else if (!loading) {
      idbPromise('tasks', 'get').then((task) => {
        dispatch({
          type: UPDATE_TASK,
          tasks: task
        })
      })
    }
  }, [taskData, loading, dispatch]);

  const handleProjectClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_TASK,
      currentTask: id
    });
  };

  return (
    <div>
      <h2>Pick Task</h2>
      {tasks.map((item) => (
        <button
        key={item._id}
        onClick={() => {
          handleProjectClick(item._id)
        }}
        >
          {item.taskName}
        </button>
      ))}
    </div>
  )
}

export default Tasks; 