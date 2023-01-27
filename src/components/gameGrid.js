import React, { useState } from "react";
import { getNewStats, startingStats } from "../scripts/gameLogic";
import { generateGameGrid, buildGameGrid } from "../scripts/generateGameGrid";
import "./gameGrid.css";

export default function GameGrid({ x, y, start, end }) {
  const [position, setPosition] = useState({ x: 0, y: start });
  const [grid] = useState(generateGameGrid(x, y));
  const [gameGrid] = useState(buildGameGrid(grid));
  const [stats, setStats] = useState(startingStats);

  const handleKeyPress = (e) => {
    let curr = position;
    let currStats = stats;
    switch (e.key) {
      case "ArrowUp":
        if (position.y > 0) curr = { x: position.x, y: position.y - 1 };
        break;
      case "ArrowRight":
        if (position.x < x - 1) curr = { x: position.x + 1, y: position.y };
        break;
      case "ArrowLeft":
        if (position.x > 0) curr = { x: position.x - 1, y: position.y };
        break;
      case "ArrowDown":
        if (position.y < y - 1) curr = { x: position.x, y: position.y + 1 };
        break;
      default:
        break;
    }
    currStats = getNewStats(currStats, grid[curr.x][curr.y]);
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

// function buildGameGrid(grid) {
//   let gameGrid = [];
//   gameGrid.push(
//     grid.map((arr) => (
//       <div className="row">
//         {arr.map((val) => (
//           <div className="tile">{val}</div>
//         ))}
//       </div>
//     ))
//   );
//   return gameGrid;
// }
