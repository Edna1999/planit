import React, { useState } from 'react';

import { useQuery } from "@apollo/client";
import { QUERY_PROJECT } from "../../utils/queries";

import './css/project.css'

const Project = ({ projectId }) => {
  const [currentSlide, changeSlide] = useState(1);

  const { data } = useQuery(QUERY_PROJECT);
  // console.log(data);


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


  return (
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
  )
}

export default Project;