import AddTask from "./AddTask";
import TaskList from "./TaskList.jsx";
import TaskContextProvider from "../../context/Taskcontext.jsx";

export default function TaskApp() {
  return (
    <TaskContextProvider>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskList />
    </TaskContextProvider>
  );
}
