import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { QUERY_ME } from '../../utils/queries';
import './css/dashboard.css'

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_ME)
  
  const profile = data?.me || undefined; 
  const tasks = data?.me.tasks || [];
  console.log(tasks)
  let displayTasks = false;

  if (tasks.length > 0) {
    displayTasks = true;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (profile === undefined) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div className="main-div">
      <h1 id="dashboard-title">Dashboard</h1>

      <div className="sections-div">
        <section class="main-left-section">
          <h1>Your Tasks</h1>
          { displayTasks ? tasks.map( (task, index) => (
            <h3 key={index} id={index}>{task.taskName}</h3>
          )) : <p className="no-tasks">No Tasks Found! Yay For You!</p>}
        </section>
    
        <section className="main-right-section">
          <h1>Idk Display Sum Here</h1>
        </section>
      </div>
    </div>
  )
}

export default Dashboard;