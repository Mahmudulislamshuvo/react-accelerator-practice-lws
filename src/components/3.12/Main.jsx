import { useReducer, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList.jsx";
import { initialTasks } from "../../data/data3.12.js";
import AppReducer from "../../reducer/taskReducer.js";
import { useImmerReducer } from "use-immer";

export default function TaskApp() {
  const [tasks, dispatch] = useImmerReducer(AppReducer, initialTasks);

  const getNextid = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  };

  //  Handlers
  const handleAddtask = (text) => {
    dispatch({
      type: "added",
      text,
      id: getNextid(tasks),
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (taskid) => {
    dispatch({
      type: "deleted",
      id: taskid,
    });
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAdd={handleAddtask} />
      <TaskList
        onDeleteTask={handleDeleteTask}
        tasks={tasks}
        onChangeTask={handleChangeTask}
      />
    </>
  );
}
