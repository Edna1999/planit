import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import './styles/signup.css'

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <body>
      {data ? (
      <p>
        Success! You may now head{' '}
        <Link to="/">back to the homepage.</Link>
      </p>
      ) : (
      <div className="login-div">
        <form className="signup-form" onSubmit={handleFormSubmit}>
          <h1 id="form-header">Signup</h1>
          <div className="input-form">
            <div className="input-sections">

              <h2>First Name:</h2>
              <input className="form-inputs"
              placeholder="Your first name"
              name="firstName"
              type="text"
              value={formState.firstName}
              onChange={handleChange}
              id="firstname-input"/>

              <h2>Last Name:</h2>
              <input className="form-inputs" 
              placeholder="Your last name"
              name="lastName"
              type="text"
              value={formState.lastName}
              onChange={handleChange}
              id="lastname-input"/>

              <h2>Username:</h2>
              <input className="form-inputs" 
              placeholder="username"
              name="username"
              type="text"
              value={formState.username}
              onChange={handleChange}
              id="password-input"/>

            </div>
            <div className="input-sections">

              <h2>Email:</h2>
              <input className="form-inputs" 
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              id="email-input"/>

              <h2>Password:</h2>
              <input className="form-inputs" 
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
              id="password-input"/>

              <button className="form-inputs" id="submit-btn" type="submit">Signup</button>
            </div>
          </div>
          <div className="bottom-section">
          </div>
            <p className='or'>OR</p>
          <h4 className="signup-h4">
            <Link to='/login'>
              Login Instead
            </Link>
          </h4>
        </form>
      </div>
      )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
    </body>
  );
};

export default Signup;
