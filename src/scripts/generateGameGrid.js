import { blank, speeder, lava, mud, person } from "../components/images";

const tiles = ["B", "S", "L", "M"];
const icons = {
  B: blank,
  S: speeder,
  L: lava,
  M: mud,
  person: person,
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
  const gridSize = grid.length;
  gameGrid.push(
    grid.map((arr, row) => (
      <div className="row">
        {arr.map((val, col) => (
          <div
            className={
              row === start.y && col === start.x
                ? `tile-current-${gridSize}`
                : row === end.y && col === end.x
                ? `tile-win-${gridSize}`
                : `tile-${gridSize}`
            }
            data-row={row}
            data-col={col}
            style={{ backgroundImage: `url(${icons[val]})` }}
          />
        ))}
      </div>
    ))
  );
  return gameGrid;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
