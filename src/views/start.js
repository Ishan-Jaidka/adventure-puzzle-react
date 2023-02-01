import React from "react";
import NavButtons from "../components/navButtons";
import "./start.css";

export default function Start() {
  return (
    <div className="outerDiv">
      <h1>Welcome to the Adventure Game!</h1>
      <h2>Play a game?</h2>
      <NavButtons
        buttons={[
          { label: "Start", page: "/difficulty" },
          { label: "Instructions", page: "/instructions" },
        ]}
      />
    </div>
  );
}
