import React, { useState } from "react";
import { useQuery } from '@apollo/client';

import './styles/home.css'

import { QUERY_ME } from '../utils/queries'

// const projectElement = document.getElementById('projects-nav')
// const projectSpan = document.getElementById('projects-span')
// const projectDrop = document.getElementById('projects-drop')


const dropDownActivate = () => {
  if (this.classList.contains('hidden')) {
    this.span.classList.remove('hidden')
    this.span.textContent = '▼'
    return;
  } 
  this.span.classList.add('hidden')
  this.span.textContent = '►'
}

const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];
  const [isHidden, setHidden] = useState("false");

  const handleToggle = () => {
    setHidden(!isHidden)
  }

  const { projects } = useQuery(QUERY_ME)
  console.log('hello', projects)

  return (
    <body>
      <nav>
        <ul>
          <li>
            <h1 id="dashboard-nav">🏠 Dashboard</h1>
          </li>
          <li>
            <h1 onClick={handleToggle} id="projects-nav">🏗️ Projects<span id="projects-span">►</span></h1>
          </li>
          <li id="projects-drop" className={`app ${isHidden ? "hidden" : ""}`}>
            <h3>No Projects Found...</h3>
            <h3>No Projects Found...</h3>
          </li>
          <li>
            <h1 id="notes-nav">📝 Notes</h1>
          </li>
        </ul>
      </nav>

      <section>
        <div className="main-div">

        </div>
      </section>
    </body>
  );
};

export default Home;
