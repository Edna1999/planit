import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import './header.css';
const Header = () => {
  const [activeHeader, changeHeader] = useState(false)

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const navDropdown = () => {
    changeHeader(!activeHeader)
  }

  return (
    <header>
      <div>
        <Link to='/'>
          <h1 id="navigation-logo">PlanIt</h1>
        </Link>
      </div>
      <div id='header-nav' className={activeHeader ? 'active-header-nav' : 'not-active-header-nav'}>
        {Auth.loggedIn() ? (
              <>
                <ul className='list-ul'>
                  <li className='list-li'>
                <Link id='new' className='header-links' to='/new-project'>
                  Create Project
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
          </div>
          <div onClick={navDropdown} className='navigation-dropdown'>
            <div className='nav1'></div>
            <div className='nav1'></div>
            <div></div>
          </div>
    </header>
  );
};

export default Header;
