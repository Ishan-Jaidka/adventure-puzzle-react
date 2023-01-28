import React from "react";
import { useNavigate } from "react-router-dom";

export default function Loss() {
  const navigate = useNavigate();
  return (
    <div>
      You Lost! Try again?
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
