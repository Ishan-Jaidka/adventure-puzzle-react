const tiles = ["B", "S", "L", "M"];

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
            className={row === start && col === 0 ? "tile-current" : "tile"}
            data-row={row}
            data-col={col}
          >
            {val}
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
