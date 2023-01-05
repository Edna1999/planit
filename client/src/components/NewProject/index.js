import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_PROJECT } from '../../utils/mutations';
import { Link } from 'react-router-dom';

<Link to="/updateform">Go to Update Form</Link>


const NewProjects = () => {
  const [addProject, { error, data }] = useMutation(ADD_PROJECT)

  const [formState, setFormState] = useState({ 
    projectName: '',
    projectDescription: '',

  });
  const handleChange = (event, val, index) => {
    const { name, value } = event.target;
    console.log(name, value)

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const goHome = () => {
    document.location.replace('/').then(
      document.location.reload()
    )
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

  return (
    <main>
      {data ? (

        <div>
          <p>
            Successfully Added a New Project!
          </p>
          <div className="btn-div">
            <button><Link onClick={goHome} to='/'>Back to Dashboard</Link></button>
          </div>
          <div className="btn-div">
            <button className='hidden'><Link to="/update-project-details">Add Project Details</Link></button>
          </div>
        </div>

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