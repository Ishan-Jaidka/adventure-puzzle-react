import React, { useState } from "react";
import { generateGameGrid, buildGameGrid } from "../scripts/generateGameGrid";
import "./gameGrid.css";

export default function GameGrid({ x, y, start, end }) {
  const [position, setPosition] = useState({ x: 0, y: start });
  const [gameGrid] = useState(buildGameGrid(generateGameGrid(x, y)));

  const handleKeyPress = (e) => {
    let curr = position;
    console.log("before:", curr);
    switch (e.key) {
      case "ArrowUp":
        if (position.y > 0) {
          curr = { x: position.x, y: position.y - 1 };
          setPosition(curr);
        }
        console.log(curr);
        break;
      case "ArrowRight":
        if (position.x < x - 1) {
          curr = { x: position.x + 1, y: position.y };
          setPosition(curr);
        }
        console.log(curr);
        break;
      case "ArrowLeft":
        if (position.x > 0) {
          curr = { x: position.x - 1, y: position.y };
          setPosition(curr);
        }
        console.log(curr);
        break;
      case "ArrowDown":
        if (position.y < y - 1) {
          curr = { x: position.x, y: position.y + 1 };
          setPosition(curr);
        }
        console.log(curr);
        break;
      default:
        break;
    }
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
