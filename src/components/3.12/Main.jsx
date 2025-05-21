import AddTask from "./AddTask";
import TaskList from "./TaskList.jsx";
import { initialTasks } from "../../data/data3.12.js";
import AppReducer from "../../reducer/taskReducer.js";
import { useImmerReducer } from "use-immer";
import { TaskContext, TaskdispatchContext } from "../../context/Taskcontext.js";

export default function TaskApp() {
  const [tasks, dispatch] = useImmerReducer(AppReducer, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskdispatchContext.Provider value={dispatch}>
        <h1>Prague itinerary</h1>
        <AddTask />
        <TaskList />
      </TaskdispatchContext.Provider>
    </TaskContext.Provider>
  );
}
