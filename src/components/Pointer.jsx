import { useState } from "react";

const Pointer = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (e) => {
    setPosition({ x: e.pageX, y: e.pageY });
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
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default Pointer;
