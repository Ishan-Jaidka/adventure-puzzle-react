import { blank, speeder, lava, mud, person } from "../components/images";

const tiles = ["B", "S", "L", "M"];
const icons = {
  B: <img className="icon" src={blank} alt="blank" />,
  S: <img className="icon" src={speeder} alt="speeder" />,
  L: <img className="icon" src={lava} alt="lava" />,
  M: <img className="icon" src={mud} alt="mud" />,
  person: <img className="icon" src={person} alt="player" />,
};

export function generateGameGrid(x, y) {
  let grid = [];
  for (let i = 0; i < x; i++) {
    grid[i] = [];
    for (let j = 0; j < y; j++) grid[i][j] = tiles[getRandomInteger(0, 4)];
  }

  return grid;
}

export function buildGameGrid(grid, start, end) {
  let gameGrid = [];
  gameGrid.push(
    grid.map((arr, row) => (
      <div className="row">
        {arr.map((val, col) => (
          <div
            className={
              row === start && col === 0
                ? "tile-current"
                : row === end && col === grid[0].length - 1
                ? "tile-win"
                : "tile"
            }
            data-row={row}
            data-col={col}
          >
            {icons[val]}
          </div>
        ))}
      </div>
    ))
  );
  return gameGrid;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
