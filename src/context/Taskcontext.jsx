import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import AppReducer from "../reducer/taskReducer";
import { initialTasks } from "../data/data3.12";

export const TaskContext = createContext(null);
export const TaskdispatchContext = createContext(null);

export default function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useImmerReducer(AppReducer, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskdispatchContext.Provider value={dispatch}>
        {children}
      </TaskdispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTask() {
  return useContext(TaskContext);
}
export function useTaskDispatch() {
  return useContext(TaskdispatchContext);
}
