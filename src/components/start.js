import React from "react";
import { useNavigate } from "react-router-dom";
import "./start.css";

export default function Start() {
  const navigate = useNavigate();
  return (
    <div className="outerDiv">
      <h1>Welcome to the Adventure Game!</h1>
      <h2>Play a game?</h2>
      <div className="buttonDiv">
        <button
          className="button"
          onClick={() => {
            navigate("game");
          }}
        >
          Start
        </button>
        <button
          className="button"
          onClick={() => {
            navigate("instructions");
          }}
        >
          Instructions
        </button>
      </div>
    </div>
  );
}
