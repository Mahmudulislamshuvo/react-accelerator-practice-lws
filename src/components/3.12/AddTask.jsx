import { useState } from "react";
import { useTask, useTaskDispatch } from "../../context/Taskcontext";
import { getNextid } from "../../utils/getNextid";

export default function AddTask() {
  const [text, settext] = useState("");
  const dispatch = useTaskDispatch();
  const tasks = useTask();

  return (
    <>
      <input placeholder="Add task" onChange={(e) => settext(e.target.value)} />
      <button
        onClick={() => {
          settext("");
          dispatch({
            type: "added",
            text,
            id: getNextid(tasks),
          });
        }}
      >
        Add
      </button>
    </>
  );
}
