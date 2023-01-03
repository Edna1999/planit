import React, { useState } from "react";

import './styles/home.css'

import Dashboard from "../components/HomeRenders/dashboard.js";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Notes from "../components/HomeRenders/notes";

// const projectElement = document.getElementById('projects-nav')
// const projectSpan = document.getElementById('projects-span')
// const projectDrop = document.getElementById('projects-drop')


const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];
  const [isHidden, setHidden] = useState("false");
  const [currentSlide, setSlide] = useState("dashboard")

  const handleToggle = () => {
    setHidden(!isHidden)
  }

  const handlePageChanging = (id) => {
    const selectedId = Number(id.target.id)
    if (selectedId === 1) {
      setSlide('dashboard')
      return;
    } 
    // else if (selectedId === 2) {
    //   setSlide('notes')
    //   return;
    // }
    console.log('Project ' + (selectedId - 2))
  }

  const { projects } = useQuery(QUERY_ME)
  console.log('hello', projects)

  return (
    <div className="body">
      <nav>
        <ul>
          <li>
            <h1 onClick={handlePageChanging} id="1">🏠 Dashboard</h1>
          </li>
          <li>
            <h1 onClick={handleToggle} id="projects-nav">🏗️ Projects<span id="projects-span">{isHidden ? "►" : "▼"}</span></h1>
          </li>
          <li id="projects-drop" className={`app ${isHidden ? "hidden" : ""}`}>
            <h3 onClick={handlePageChanging} id="3">No Projects Found...</h3>
          </li>
          {/* <li>
            <h1 onClick={handlePageChanging} id="2">📝 Notes</h1>
          </li> */}
        </ul>
      </nav>

      <section>
        <div>
          {currentSlide === 'dashboard' ? (
            <Dashboard/>
          ) : (
            <div>
              Projects
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
