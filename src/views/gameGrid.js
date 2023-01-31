import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNewStats, startingStats } from "../scripts/gameLogic";
import { generateGameGrid, buildGameGrid } from "../scripts/generateGameGrid";
import "./gameGrid.css";
import NavButtons from "../components/navButtons";

export default function GameGrid({ x, y, start, end }) {
  console.log("start", start);
  console.log("end", end);
  const [position, setPosition] = useState({ x: 0, y: start });
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
    element.setAttribute("class", "tile");
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
    element.setAttribute("class", "tile-current");
    setPosition(curr);
    setStats(currStats);
    if (curr.y === end && curr.x === x - 1) navigate("win");
    if (currStats.health <= 0 || currStats.moves <= 0) navigate("loss");
  };

  return (
    <>
      <div className="stats">
        <div>Stats</div>
        <div>Health: {stats.health}</div>
        <div>Moves: {stats.moves}</div>
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
