import React from "react";
import NavButtons from "../components/navButtons";

export default function DifficultySelection() {
  return (
    <div className="outerDiv">
      <h1>Select a difficulty:</h1>
      <NavButtons
        buttons={[
          { label: "Easy", page: "/game?x=10&y=10" },
          { label: "Medium", page: "/game?x=50&y=50" },
          { label: "Hard", page: "/game?x=100&y=100" },
        ]}
      />
    </div>
  );
}
