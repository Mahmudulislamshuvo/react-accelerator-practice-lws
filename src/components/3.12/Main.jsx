import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList.jsx";
import { initialTasks } from "../../data/data3.12.js";

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextid = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  };

  //  Handlers
  const handleAddtask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextid(tasks),
        text: text,
        done: false,
      },
    ]);
  };

  const handleChangeTask = (task) => {
    const nextTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(nextTask);
  };

  const handleDeleteTask = (taskid) => {
    setTasks(tasks.filter((item) => item.id !== taskid));
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

let nextId = 3;
