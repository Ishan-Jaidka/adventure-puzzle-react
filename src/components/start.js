import React from "react";
import { useNavigate } from "react-router-dom";

export default function Start() {
  const navigate = useNavigate();
  return (
    <div>
      Welcome! Play a game?
      <button
        onClick={() => {
          navigate("game");
        }}
      >
        Start
      </button>
    </div>
  );
}
