import React, { useState } from "react";

import './styles/home.css'

import Dashboard from "../components/HomeRenders/dashboard.js";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Profile from "../components/HomeRenders/profile";
import Project from "../components/HomeRenders/projects";

// const projectElement = document.getElementById('projects-nav')
// const projectSpan = document.getElementById('projects-span')
// const projectDrop = document.getElementById('projects-drop')


const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];
  const [isHidden, setHidden] = useState("false");
  const [currentPage, setPage] = useState("dashboard")

  const handleToggle = () => {
    setHidden(!isHidden)
  }

  const handlePageChanging = (id) => {
    const selectedId = Number(id.target.id)
    const ifProject = id.target.textContent
    if (selectedId === 1) {
      setPage('dashboard')
      return;
    } 
    else if (selectedId === 2) {
      setPage('profile')
      return;
    }
    setPage(ifProject)
  }

  const { data } = useQuery(QUERY_ME)
  const projects = data?.me.projects || [];

  return (
    <div className="body">
      <nav>
        <ul>
          <li>
            <h1 onClick={handlePageChanging} id="1">🏠 Dashboard</h1>
          </li>
          <li>
            <h1 onClick={handlePageChanging} id="2">👤 Profile</h1>
          </li>
          <li>
            <h1 onClick={handleToggle} id="projects-nav">🏗️ Projects<span id="projects-span">{isHidden ? "►" : "▼"}</span></h1>
          </li>
          <li id="projects-drop" className={`app ${isHidden ? "hidden" : ""}`}>
            { projects.map( (project, index) => (
              <h3 onClick={handlePageChanging} key={index} id={index + 3}>{project.projectName}</h3>
            ))
            }
          </li>
        </ul>
      </nav>

      <section>
        <div>
          {currentPage === 'dashboard' ? (
            <Dashboard/>
          ) : currentPage === 'profile' ? (
            <Profile/>
          ) : (
            <div className="main-div-projects">
              <section className='current-project'>
                <h1>{currentPage}</h1>
                <Project/>
              </section>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
