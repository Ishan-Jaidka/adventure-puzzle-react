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
      <h5 className="instructions">
        You are on the lime green tile starting on the left half of the board.
      </h5>
      <h5 className="instructions">
        You must get to the green tile on the right half of the board.
      </h5>
      <br />
      <h5 className="instructions">
        Start the game by clicking anywhere on the game board.
      </h5>
      <h5 className="instructions">
        Then use the arrow keys on the keyboard to move to the winning tile.
      </h5>
      <br />
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
          { label: "Play", page: "/difficulty" },
          { label: "Home", page: "/" },
        ]}
      />
    </div>
  );
}
