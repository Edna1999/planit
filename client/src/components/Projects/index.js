import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import NewProject from '../NewProject'
import Auth from '../../utils/auth';
import { QUERY_PROJECTS } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { SHOW_PROJECTS } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

const Projects = () => {
  const [state, dispatch] = useStoreContext();
  const [seeProjects, { data }] = useLazyQuery(QUERY_PROJECTS);

  useEffect(() => {
    function showProjects() {
      dispatch({ type: SHOW_PROJECTS });
    }
  })
}