import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { ADD_PROJECT } from '../../utils/mutations';
import { useProjectContext } from '../../utils/mutations';
import { idbPromise } from '../../utils/helpers';
import { Link } from 'react-router-dom';

const NewProjects = () => {
  const [addProject, { error, data }] = useMutation(ADD_PROJECT)

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
    const { name, value } = event.target
    const index = event.target.id
    console.log(index, name, value)

    setFormState({
      ...formState,
      [name]: [{
        index: index,
        value: value
      },]
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)

    try {
      const { data } = await addProject({
        variables: { ...formState }
      });
      console.log(data)
    } catch (error) {
      console.log(error)
    }
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

    
    newDiv.onchange = function(event) {
      const { name, value } = event.target
      const index = event.target.id
      console.log(index, name, value)
  
      setFormState({
        ...formState,
        [name]: [{
          index: index,
          value: value
        },]
      })
    }

    deleteBtn.onclick = function() {
      newDiv.parentNode.removeChild(newDiv)
    }
  }

  return (
    <main>
      {data ? (
        <p>
          Successfully Added a New Project!
          <Link to='/'>Click Here</Link>
        </p>
      ) : (
        <div>
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
              <input onChange={handleTeamChange} id='0' name="teamInputs" className="team-inputs"/>
              <h4 onClick={addTeamMember} id="more-members">➕</h4>
            </div>
          </div>

          <div className="btn-div">
            <button id="submit-btn" type="submit">Submit</button>
          </div>
          </form>
        </div>
      )}
        {error && (
          <div>
            {error.message}
          </div>
        )}
      
    </main>
  ) 
}

export default NewProjects;