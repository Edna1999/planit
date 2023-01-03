import React, { useState } from "react";

import './styles/create-project.css'

const CreateProject = () => {
  const [formState, setFormState] = useState({ 
    projectName: '',
    projectDescription: '',
    startDate: '',
    endDate: '',
    teamInputs: []
  });
  const handleChange = (event, val, index) => {
    const { name, value } = event.target;
    console.log(name, value)

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleTeamChange = (event) => {
    const { index, name, value } = event.target
    console.log(index, name, value)

    setFormState({
      ...formState,
      [name]: {
        index: index,
        value: value
      }
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)
  }

  let i = 0
  // const appendDiv = document.getElementById('append-div')
  const addTeamMember = (id) => {
    i++;
    const thisParent = id.target.parentNode.parentNode

    const newInput = document.createElement('input')
    newInput.classList.add('team-inputs')
    newInput.id = i
    newInput.name = 'teamInputs'
    const deleteBtn = document.createElement('h4')
    deleteBtn.textContent = '-'
    deleteBtn.classList.add('delete-btns')
    deleteBtn.id = i
    const newDiv = document.createElement('div')
    newDiv.classList.add('new-input')
    newDiv.append(newInput, deleteBtn)
    thisParent.append(newDiv)
    // appendDiv.append(newDiv)

    
    newInput.onChange = {handleTeamChange}

    deleteBtn.onclick = function() {
      newDiv.parentNode.removeChild(newDiv)
    }

  // const filledForm = () => {
  //   if 
  // }


  }


  return (
    <section className="middle-section">
      <form onSubmit={handleFormSubmit}>
        <h1>Create New Project</h1>

        <h3>Project Name<span className="color-red">*</span>: <input 
        id="name-form"
        name="projectName"
        required={true}
        onChange={handleChange}
        />
        </h3>

        <h3>Project Description<span className="color-red">*</span>: <input 
        id="description-form"
        name="projectDescription"
        required={true}
        onChange={handleChange}
        />
        </h3>

        <h3>Start Date: <input
        id="start-date-form"
        name="startDate"
        onChange={handleChange}
        />
        </h3>

        <h3>End Date: <input
        id="end-date-form"
        name="endDate"
        onChange={handleChange}
        />
        </h3>
        
        <h3 className="team-members">Team Members:</h3>

        <div className="all-team-inputs">
          <div id="append-div">
            <input name="teamInputs" onChange={handleTeamChange} className="team-inputs"/>
            <h4 onClick={addTeamMember} id="more-members">➕</h4>
          </div>
        </div>
        
        <div className="btn-div">
          <button id="submit-btn" type="submit">Submit</button>
        </div>
      </form>
    </section>
  )
}

export default CreateProject;