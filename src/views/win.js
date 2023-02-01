import React from "react";
import NavButtons from "../components/navButtons";
import "./win.css";

export default function Win() {
  return (
    <div className="win-outerDiv">
      <h1>Congratulations!</h1>
      <h3>You Won!</h3>
      <h2>Play again?</h2>
      <NavButtons
        buttons={[
          { label: "Replay", page: "/difficulty" },
          { label: "Instructions", page: "/instructions" },
          { label: "Home", page: "/" },
        ]}
      />
    </div>
  );
}
