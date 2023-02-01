import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNewStats, startingStats } from "../scripts/gameLogic";
import { generateGameGrid, buildGameGrid } from "../scripts/generateGameGrid";
import "./gameGrid.css";
import NavButtons from "../components/navButtons";

export default function GameGrid({ x = 100, y = 100 }) {
  // calculate start/end positions
  // start: left half, end: right half
  const [start] = useState({
    x: Math.floor((Math.random() * x) / 2),
    y: Math.floor(Math.random() * y),
  });
  const [end] = useState({
    x: Math.floor((Math.random() * x) / 2) + x / 2,
    y: Math.floor(Math.random() * y),
  });

  // store game data
  const [position, setPosition] = useState({ x: start.x, y: start.y });
  const [grid] = useState(generateGameGrid(x, y));
  const [gameGrid] = useState(buildGameGrid(grid, start, end));
  const [stats, setStats] = useState(startingStats);

  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    let curr = position;
    let currStats = stats;
    let element = document.querySelector(
      `[data-row="${curr.y}"][data-col="${curr.x}"]`
    );
    element.setAttribute("class", "tile"); // resets previous tile
    switch (e.key) {
      case "ArrowUp":
        if (position.y > 0) {
          curr = { x: position.x, y: position.y - 1 };
          currStats = getNewStats(currStats, grid[curr.y][curr.x]);
        }
        break;
      case "ArrowRight":
        if (position.x < x - 1) {
          curr = { x: position.x + 1, y: position.y };
          currStats = getNewStats(currStats, grid[curr.y][curr.x]);
        }
        break;
      case "ArrowLeft":
        if (position.x > 0) {
          curr = { x: position.x - 1, y: position.y };
          currStats = getNewStats(currStats, grid[curr.y][curr.x]);
        }
        break;
      case "ArrowDown":
        if (position.y < y - 1) {
          curr = { x: position.x, y: position.y + 1 };
          currStats = getNewStats(currStats, grid[curr.y][curr.x]);
        }
        break;
      default:
        break;
    }
    element = document.querySelector(
      `[data-row="${curr.y}"][data-col="${curr.x}"]`
    );
    element.setAttribute("class", "tile-current"); // sets current tile to new location
    setPosition(curr);
    setStats(currStats);

    // checks if win/loss
    if (curr.y === end.y && curr.x === end.x) navigate("win");
    if (currStats.health <= 0 || currStats.moves <= 0) navigate("loss");
  };

  return (
    <>
      <div className="stats">
        <br />
        <div>Start: {`(${start.x}, ${start.y})`}</div>
        <div>End: {`(${end.x}, ${end.y})`}</div>
        <br />
        <div>Stats</div>
        <div>Health: {stats.health}</div>
        <div>Moves: {stats.moves}</div>
        <br />
        <NavButtons
          buttons={[
            { label: "Home", page: "/" },
            { label: "Instructions", page: "/instructions" },
          ]}
        />
      </div>
      <div
        autoFocus
        onKeyUp={(e) => handleKeyPress(e)}
        tabIndex="0"
        className="grid"
      >
        {gameGrid}
      </div>
    </>
  );
}
