import React, { useState } from "react";
import MainProjects from "../components/Projects/mainProject";
import SideProjects from "../components/Projects/sideProjects";


import './styles/projects.css'

const Projects = () => {

  return (
    <div className="main-div-projects">
      <SideProjects/>
      <MainProjects/>
    </div>
  )
}

export default Projects;