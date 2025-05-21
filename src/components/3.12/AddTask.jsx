import { useContext, useState } from "react";
import { TaskContext, TaskdispatchContext } from "../../context/Taskcontext";
import { getNextid } from "../../utils/getNextid";

export default function AddTask() {
  const [text, settext] = useState("");
  const dispatch = useContext(TaskdispatchContext);
  const tasks = useContext(TaskContext);

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
