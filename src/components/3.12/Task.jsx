import { useState } from "react";
import { useTaskDispatch } from "../../context/Taskcontext";

const Task = ({ task }) => {
  const [isEditing, setisEditing] = useState(false);
  const dispatch = useTaskDispatch();

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          className="border"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
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
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
        />
        {taskContent}
        <button
          onClick={() => {
            dispatch({
              type: "deleted",
              id: task.id,
            });
          }}
        >
          delete
        </button>
      </label>
    </div>
  );
};

export default Task;
