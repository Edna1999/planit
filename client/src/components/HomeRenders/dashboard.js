import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useProjectContext } from '../../utils/GlobalState';
import { QUERY_ME } from '../../utils/queries';
import './dashboard.css'

const Dashboard = () => {
  // const [state, dispatch] = useProjectContext();

  const { me } = useQuery(QUERY_ME)

  return (
    <div className="main-div">
      <h1 id="dashboard-title">Dashboard</h1>

      <div class="sections-div">
        <section class="main-left-section">
          <h1>Your Tasks</h1>
            {console.log(me)}
          <p class="no-tasks">No Tasks Found! Yay For You!</p>
        </section>
    
        <section class="main-right-section">
          <h1>Idk Display Sum Here</h1>
        </section>
      </div>
    </div>
  )
}

export default Dashboard;