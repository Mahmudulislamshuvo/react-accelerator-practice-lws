import { useState } from "react";

const Task = ({ task, onChangeTask, onDeleteTask }) => {
  const [isEditing, setisEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          className="border"
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setisEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setisEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) =>
            onChangeTask({
              ...task,
              done: e.target.checked,
            })
          }
        />
        {taskContent}
        <button onClick={() => onDeleteTask(task.id)}>delete</button>
      </label>
    </div>
  );
};

export default Task;
