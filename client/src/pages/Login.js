import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import './styles/login.css'

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
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
        <form className='login-form'>
          <h1 id="form-header">Login</h1>
          <div className="input-form">

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

            <button className='form-inputs' id="submit-btn" onClick={handleFormSubmit}>Login</button>
          
            </div>
            <p className='or'>OR</p>
          <h4 className="signup-h4">
            <Link to='/signup'>
              Create Account
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

export default Login;
