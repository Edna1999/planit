import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import './header.css';
const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div>
        <Link to='/'>
          <h1 id="navigation-logo">PlanIt</h1>
        </Link>
      </div>
        {Auth.loggedIn() ? (
              <>
                <ul className='list-ul'>
                  <li className='list-li'>
                <Link id='new' className='header-links' to='/new-project'>
                  Create Project
                </Link>
                  </li>
                  <li className='list-li'>
                <Link id='profile' className='header-links' to='me'>
                  Profile
                </Link>
                  </li>
                  <li className='list-li'>
                <Link className='header-links' id='logout-btn' onClick={logout}>
                  Logout
                </Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className='list-ul'>
                  <li className='list-li'>
                    <Link className='header-links' id='login-btn' to='/login'>
                      Login
                    </Link>
                  </li>
                </ul>
              </>
            )}
    </header>
  );
};

export default Header;
