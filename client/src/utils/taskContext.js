import React, { createContext, useContext } from "react";
import { useProjectReducer } from './reducers'

const TaskContext = createContext();
const { Provider } = TaskContext;

const TaskStoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProjectReducer({
    tasks: [],
    currentTask: ''
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useTaskContext = () => {
  return useContext(TaskContext);
};

export { TaskStoreProvider, useTaskContext };