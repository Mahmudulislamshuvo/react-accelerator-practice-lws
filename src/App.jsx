import { useState } from "react";
import Form from "./components/Form";
import Pointer from "./components/Pointer";
import "./styles.css";

function App() {
  const [color, setColor] = useState("green");
  const handleChangeColor = () => {
    setColor("black");
  };
  return (
    <div>
      <Form changeColor={color} />
      <button onClick={handleChangeColor}>Click from parent</button>
    </div>
  );
}

export default App;
