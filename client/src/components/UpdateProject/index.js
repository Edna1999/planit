import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { UPDATE_PROJECT } from '../../utils/mutations';
import { Link } from 'react-router-dom';

const UpdateForm = () => {
  const [updateProject, { error, data }] = useMutation(UPDATE_PROJECT)

  const [formState, setFormState] = useState({ 
    projectName: '',
    projectDescription: '',
    startDate: '',
    endDate: '',
    isComplete: false,
  });
  const handleChange = (event, val, index) => {
    const { name, value } = event.target;
    console.log(name, value)

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)

    try {
      const { data } = await updateProject({
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
        <p>
          Successfully Updated Project!
          <Link to='/'>Back to Dashboard</Link>
        </p>
      ) : (
        <div>
          <form onSubmit={handleFormSubmit}>
          <h1>Update Project</h1>

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

          <h3>Start Date<span className="color-red">*</span>: <input 
          id="start-date-form"
          name="startDate"
          required={true}
          onChange={handleChange}
          />
          </h3>

          <h3>End Date<span className="color-red">*</span>: <input 
          id="end-date-form"
          name="endDate"
          required={true}
          onChange={handleChange}
          />
          </h3>

          <h3>Is Complete<span className="color-red">*</span>: <input 
          id="is-complete-form"
          name="isComplete"
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

export default UpdateForm;