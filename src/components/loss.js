import React from "react";
import { useNavigate } from "react-router-dom";
import "./loss.css";

export default function Loss() {
  const navigate = useNavigate();
  return (
    <div className="outerDiv">
      You Lost! Try again?
      <button
        className="button"
        onClick={() => {
          navigate("/game");
        }}
      >
        Replay
      </button>
    </div>
  );
}
