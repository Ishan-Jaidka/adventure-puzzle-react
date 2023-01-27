export function generateGameGrid(x, y) {
  let grid = [];
  for (let i = 0; i < x; i++) {
    grid[i] = [];
    for (let j = 0; j < y; j++) grid[i][j] = getRandomInteger(0, 4);
  }

  return grid;
}

export function buildGameGrid(grid) {
  const tiles = ["B", "S", "L", "M"];
  let gameGrid = [];
  gameGrid.push(
    grid.map((arr) => (
      <div className="row">
        {arr.map((val) => (
          <div className="tile">{tiles[val]}</div>
        ))}
      </div>
    ))
  );
  return gameGrid;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
