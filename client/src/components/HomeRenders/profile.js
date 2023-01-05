import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';

import './css/profile.css'

const Profile = () => {


  return (
    <div className="main-profile">
      <h1 id="profile-title">Profile</h1>

      <div class="profile-div">
        <h1>Name: <span>First Last</span></h1>
        <h1>Email: <span>test@gmail.com</span></h1>
        <h1>Number of Projects: <span>5</span></h1>
        <h1>Number of Tasks: <span>4</span></h1>
      </div>
    </div>
  )
}

export default Profile;