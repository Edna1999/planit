import React, { useState } from "react";

import './styles/home.css'

import Dashboard from "../components/HomeRenders/dashboard.js";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Profile from "../components/HomeRenders/profile";

// const projectElement = document.getElementById('projects-nav')
// const projectSpan = document.getElementById('projects-span')
// const projectDrop = document.getElementById('projects-drop')


const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];
  const [isHidden, setHidden] = useState("false");
  const [currentPage, setPage] = useState("dashboard")
  const [currentSlide, changeSlide] = useState(1)

  const clickSlide = (id) => {
    if (id.target.id === String(1)) {
      changeSlide(1)
      return;
    } else if (id.target.id === String(2)) {
      changeSlide(2)
      return;
    } changeSlide(3)
    return;
  }

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
            <h1 onClick={handlePageChanging} id="2">👤 Profile</h1>
          </li>
          <li>
            <h1 onClick={handleToggle} id="projects-nav">🏗️ Projects<span id="projects-span">{isHidden ? "►" : "▼"}</span></h1>
          </li>
          <li id="projects-drop" className={`app ${isHidden ? "hidden" : ""}`}>
            <h3 onClick={handlePageChanging} id="3">Project 1</h3>
            <h3 onClick={handlePageChanging} id="4">Project 2</h3>
            <h3 onClick={handlePageChanging} id="5">Project 3</h3>
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
                
                <div>
                  {currentSlide === 1 ? (
                    <div className="main-info">
                    
                      <div className="information-nav">
                      <h1 onClick={clickSlide} id='1' className="active">ℹ️</h1>
                      <h1 onClick={clickSlide} id='2' className="not-active">✔️</h1>
                      <h1 onClick={clickSlide} id='3' className="not-active">🙋🏻</h1>
                      </div>
                  
                      <div className="information-set">
                        <h2>Description: </h2>
                          <p>Description Here</p>
                  
                        <h2>Start Date: </h2>
                          <p>1/1/2023</p>
                  
                        <h2>End Date: </h2>
                          <p>1/5/2023</p>
                  
                        <h2>Complete? </h2>
                          <p>No</p>
                      </div>
                    </div>
                  ) : currentSlide === 2 ? (
                    <div className="main-info">
                    
                    <div className="information-nav">
                      <h1 onClick={clickSlide} id='1' className="not-active">ℹ️</h1>
                      <h1 onClick={clickSlide} id='2' className="active">✔️</h1>
                      <h1 onClick={clickSlide} id='3' className="not-active">🙋🏻</h1>
                    </div>
                  
                    <div className="information-set">
                      <h1 className='top-title'>Tasks</h1>
                  
                      <ul className='tasks-ul'>
                        <li>
                          Task 1
                        </li>
                        <li>
                          Task 2
                        </li>
                        <li>
                          Task 3
                        </li>
                      </ul>
                    </div>
                    </div>
                  ) : (
                    <div className="main-info">
                    
                    <div className="information-nav">
                      <h1 onClick={clickSlide} id='1' className="not-active">ℹ️</h1>
                      <h1 onClick={clickSlide} id='2' className="not-active">✔️</h1>
                      <h1 onClick={clickSlide} id='3' className="active">🙋🏻</h1>
                    </div>
                  
                    <div className="information-set">
                        <h1 className='top-title'>Your Team</h1>
                  
                        <ul className='team-ul'>
                          <li>
                            Member 1
                          </li>
                          <li>
                            Member 2
                          </li>
                          <li>
                            Member 3
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
