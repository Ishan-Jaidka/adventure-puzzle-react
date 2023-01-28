import React from "react";
import { useNavigate } from "react-router-dom";

export default function Win() {
  const navigate = useNavigate();
  return (
    <div>
      Congratulations! You Won! Play again?
      <button
        onClick={() => {
          navigate("/game");
        }}
      >
        Replay
      </button>
    </div>
  );
}
