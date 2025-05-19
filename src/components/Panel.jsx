import { useState } from "react";

const Panel = ({ title, children, isactive, onActive }) => {
  return (
    <div className="panel">
      <h2>{title}</h2>
      {isactive ? <p>{children}</p> : <button onClick={onActive}>Show</button>}
    </div>
  );
};

export default Panel;
