import "./App.css";
import { router, RouterProvider } from "./router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
