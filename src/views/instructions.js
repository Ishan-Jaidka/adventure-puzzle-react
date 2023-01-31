import React from "react";
import { blank, lava, mud, speeder } from "../components/images";
import "./instructions.css";
import NavButtons from "../components/navButtons";

export default function Instructions() {
  return (
    <div className="instructions-outerDiv">
      <h1>Instructions</h1>
      <h5 className="instructions">
        The game board is a grid made up of 4 type of tiles.
      </h5>
      <h5 className="instructions">You are on the tile outlined in green.</h5>
      <h5 className="instructions">
        You must get to the tile outlined in red.
      </h5>
      <h3>These are the types of tiles:</h3>
      <div className="grid-container">
        <h2>Blank</h2>
        <img className="instructions-icon" src={blank} alt="Blank" />
        <h4>-1 Moves</h4>
        <h2>Speeder</h2>
        <img className="instructions-icon" src={speeder} alt="Speeder" />
        <h4>-5 Health</h4>
        <h2>Mud</h2>
        <img className="instructions-icon" src={mud} alt="Mud" />
        <div>
          <h4>-10 Health</h4>
          <h4>-5 Moves</h4>
        </div>
        <h2>Lava</h2>
        <img className="instructions-icon" src={lava} alt="Lava" />
        <div>
          <h4>-50 Health</h4>
          <h4>-10 Moves</h4>
        </div>
      </div>
      <h2>Play a game?</h2>
      <NavButtons
        buttons={[
          { label: "Play", page: "/game" },
          { label: "Home", page: "/" },
        ]}
      />
    </div>
  );
}
