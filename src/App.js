import "./App.css";
import GameGrid from "./components/gameGrid";

function App() {
  return (
    <div className="App">
      <GameGrid x={5} y={5} start={1} end={4} />
    </div>
  );
}

export default App;
