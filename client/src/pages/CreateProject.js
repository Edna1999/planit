import React, { useState } from "react";

import './styles/create-project.css'

const CreateProject = () => {


  let i = 0
  // const appendDiv = document.getElementById('append-div')
  const addTeamMember = (id) => {
    i++;
    const thisParent = id.target.parentNode

    const newInput = document.createElement('input')
    newInput.classList.add('team-inputs')
    newInput.id = i
    const deleteBtn = document.createElement('h4')
    deleteBtn.textContent = '-'
    deleteBtn.classList.add('delete-btns')
    deleteBtn.id = i
    const newDiv = document.createElement('div')
    newDiv.classList.add('new-input')
    newDiv.append(newInput, deleteBtn)
    console.log(newDiv)
    thisParent.append(newDiv)
    console.log(id.target)
    // appendDiv.append(newDiv)


    deleteBtn.onclick = function() {
      newDiv.parentNode.removeChild(newDiv)
    }
  }


  return (
    <section className="middle-section">
      <form>
        <h1>Create New Project</h1>

        <h3>Project Name<span className="color-red">*</span>: <input 
        id="name-form"
        />
        </h3>

        <h3>Project Description<span className="color-red">*</span>: <input 
        id="description-form"
        />
        </h3>

        <h3>Start Date: <input
        
        />
        </h3>

        <h3>End Date: <input
        
        />
        </h3>
        
        <h3 className="team-members">Team Members:</h3>

        <div className="all-team-inputs">
          <div id="append-div">
            <input className="team-inputs"/>
          </div>
          <h4 onClick={addTeamMember} id="more-members">➕</h4>
        </div>
        
        <div className="btn-div">
          <button id="submit-btn" type="button">Submit</button>
        </div>
      </form>
    </section>
  )
}

export default CreateProject;