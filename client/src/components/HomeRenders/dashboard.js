import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useProjectContext } from '../../utils/GlobalState';
import { QUERY_ME } from '../../utils/queries';
import './css/dashboard.css'

const Dashboard = () => {
  // const [state, dispatch] = useProjectContext();


  return (
    <div className="main-div">
      <h1 id="dashboard-title">Dashboard</h1>

      <div class="sections-div">
        <section class="main-section">
          <h1>Your Tasks</h1>
          <p class="no-tasks">No Tasks Found! Yay For You!</p>
        </section>
      </div>
    </div>
  )
}

export default Dashboard;