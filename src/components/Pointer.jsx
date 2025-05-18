import { useState } from "react";

const Pointer = () => {
  const [x, setX] = useState(0);
  const [y, sety] = useState(0);

  const handlePointerMove = (e) => {
    setX(e.pageX);
    sety(e.pageY);
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
        onPointerMove={handlePointerMove}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            left: -30,
            top: -30,
            width: 20,
            height: 20,
            transform: `translate(${x}px, ${y}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default Pointer;
