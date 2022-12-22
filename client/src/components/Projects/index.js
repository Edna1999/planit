import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { QUERY_PROJECTS } from '../../utils/queries';
import { useProjectContext } from '../../utils/GlobalState';
import { UPDATE_CURRENT_PROJECT, UPDATE_PROJECT } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

// Allows us to use reducers to update or change project that we are the creator of

const Projects = () => {
  const [state, dispatch] = useProjectContext();
  const { projects } = state;
  const { loading, data: projectData } = useQuery(QUERY_PROJECTS);

  useEffect(() => {
    if (projectData) {
      dispatch({
        type: UPDATE_PROJECT,
        projects: projectData
      });
      projectData.projects.forEach((project) => {
        idbPromise('projects', 'put', project);
      });
    } else if (!loading) {
      idbPromise('projects', 'get').then((projects) => {
        dispatch({
          type: UPDATE_PROJECT,
          projects: projects
        })
      })
    }
  }, [projectData, loading, dispatch]);

  const handleProjectClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_PROJECT,
      currentProject: id
    });
  };

  return (
    <div>
      <h2>Pick Project</h2>
      {projects.map((item) => (
        <button
        key={item._id}
        onClick={() => {
          handleProjectClick(item._id)
        }}
        >
          {item.projectName}
        </button>
      ))}
    </div>
  )
}

export default Projects