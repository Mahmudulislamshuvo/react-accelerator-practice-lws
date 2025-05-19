import { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, settext] = useState("");
  return (
    <>
      <input placeholder="Add task" onChange={(e) => settext(e.target.value)} />
      <button
        onClick={() => {
          settext("");
          onAdd(text);
        }}
      >
        Add
      </button>
    </>
  );
}
