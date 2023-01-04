import React, { createContext, useContext } from "react";
import { useProjectReducer } from './reducers'

const ProjectContext = createContext();
const { Provider } = ProjectContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProjectReducer({
    projects: [],
    currentProject: 1
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useProjectContext = () => {
  return useContext(ProjectContext);
};

export { StoreProvider, useProjectContext };
