import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useStoreContext } from '../../utils/GlobalState'
import { QUERY_PROJECTS } from '../../utils/queries'

import './sideProjects.css'

// Allows us to use reducers to update or change project that we are the creator of

const SideProjects = ({ projects }) => {
  // const [sideProject, changeSideProject] = useState(1)

  // const changeProject = (id) => {

  // }
  // const [state, dispatch] = useStoreContext

  // const { currentProject } = state;

  // const { loading, data } = useQuery(QUERY_PROJECTS)

  // const pickAProject = () => {
  //   if (!currentProject) {
  //     return state.currentProject
  //   }
  // }
  // console.log(state)

  return (
    <aside className='all-projects'>
      <h1 className='nav-title'>Your Projects</h1>
      
      <ul className='projects-ul'>
        {projects && projects.map((project) => (
          <li id={project._id}><span>{project.projectName}</span></li>
        ))}
        {/* <li id='1'>
          Project 1
        </li>
        <li id='1'>
          Project 2
        </li>
        <li id='1'>
          Project 3
        </li> */}
      </ul>

    </aside>
  )
}

export default SideProjects;