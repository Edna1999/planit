import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import MainProjects from "../components/Projects/mainProject";
import SideProjects from "../components/Projects/sideProjects";
import { QUERY_ME, QUERY_USER } from "../utils/queries";
import Auth from "../utils/auth";

import './styles/projects.css'

const Projects = () => {
  const { username } = useParams();

  const { loading, data } = useQuery(
    username ? QUERY_USER : QUERY_ME,
    {
      variables: { username: username}
    }
  );

  const profile = data?.me || data?.profile || {};

  // if (Auth.loggedIn() && Auth.getProfile().data.username === username) {
  //   return <Navigate to="/me" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.firstName) {
    console.log(profile)
    return (
      <h4>No user exists</h4>
    );
  }

  return (
    <div className="main-div-projects">
      <SideProjects
        projects={profile.projects}
      />
      <MainProjects/>
    </div>
  )
}

export default Projects;