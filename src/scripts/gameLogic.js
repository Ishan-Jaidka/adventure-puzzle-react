export const startingStats = { health: 100, moves: 150 };
export const logic = {
  B: { health: 0, moves: -1 },
  S: { health: -5, moves: 0 },
  L: { health: -50, moves: -10 },
  M: { health: -10, moves: -5 },
};
export function getNewStats(currStats, tile) {
  console.log("health", logic[tile].health);
  console.log("moves", logic[tile].moves);
  return {
    health: currStats.health + logic[tile].health,
    moves: currStats.moves + logic[tile].moves,
  };
}
