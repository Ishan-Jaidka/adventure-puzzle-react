import React, { useState } from "react";
import { getNewStats, startingStats } from "../scripts/gameLogic";
import { generateGameGrid, buildGameGrid } from "../scripts/generateGameGrid";
import "./gameGrid.css";

export default function GameGrid({ x, y, start, end }) {
  const [position, setPosition] = useState({ x: 0, y: start });
  const [grid] = useState(generateGameGrid(x, y));
  const [gameGrid] = useState(buildGameGrid(grid, start, end));
  const [stats, setStats] = useState(startingStats);

  const handleKeyPress = (e) => {
    let curr = position;
    let currStats = stats;
    let elementId = `${curr.y}${curr.x}`;
    let element = document.getElementById(elementId);
    element.setAttribute("class", "tile");
    switch (e.key) {
      case "ArrowUp":
        if (position.y > 0) {
          curr = { x: position.x, y: position.y - 1 };
          currStats = getNewStats(currStats, grid[curr.x][curr.y]);
        }
        break;
      case "ArrowRight":
        if (position.x < x - 1) {
          curr = { x: position.x + 1, y: position.y };
          currStats = getNewStats(currStats, grid[curr.x][curr.y]);
        }
        break;
      case "ArrowLeft":
        if (position.x > 0) {
          curr = { x: position.x - 1, y: position.y };
          currStats = getNewStats(currStats, grid[curr.x][curr.y]);
        }
        break;
      case "ArrowDown":
        if (position.y < y - 1) {
          curr = { x: position.x, y: position.y + 1 };
          currStats = getNewStats(currStats, grid[curr.x][curr.y]);
        }
        break;
      default:
        break;
    }
    elementId = `${curr.y}${curr.x}`;
    element = document.getElementById(elementId);
    element.setAttribute("class", "tile-current");
    setPosition(curr);
    setStats(currStats);
    console.log("stats", currStats);
    console.log("position:", curr);
  };

  return (
    <div
      autoFocus
      onKeyUp={(e) => handleKeyPress(e)}
      tabIndex="0"
      className="grid"
    >
      {gameGrid}
    </div>
  );
}
