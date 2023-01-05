import { useQuery } from '@apollo/client';
import React from 'react';

import { QUERY_ME } from '../../utils/queries';

import './css/profile.css'

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME)

  if (!data) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }
  const profile = data.me;
  let numProjects = profile.projects.length;
  let numTasks = 0;

  if (profile.projects === null) {
    numProjects = 0;
  } else {
    numProjects = profile.projects.length;
  }
  if (profile.tasks === null) {
    numTasks = 0;
  } else {
    numTasks = profile.tasks.length;
  }

  console.log(numProjects);
  console.log(numTasks);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="main-profile">
      <h1 id="profile-title">Profile</h1>

      <div class="profile-div">
        <h1>username: <span>{profile.username}</span></h1>
        <h1>Name: <span>{profile.firstName} {profile.lastName}</span></h1>
        <h1>Email: <span>{profile.email}</span></h1>
        <h1>Number of Projects: <span>{profile.projects.length}</span></h1>
        <h1>Number of Tasks: <span>0</span></h1>
      </div>
    </div>
  )
}

export default Profile;