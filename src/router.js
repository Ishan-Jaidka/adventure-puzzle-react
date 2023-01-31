import GameGrid from "./components/gameGrid";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loss from "./components/loss";
import Start from "./components/start";
import Win from "./components/win";
import Instructions from "./components/instructions";
import ErrorPage from "./components/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/game",
    element: <GameGrid x={10} y={10} start={1} end={4} />,
  },
  {
    path: "/game/loss",
    element: <Loss />,
  },
  {
    path: "/game/win",
    element: <Win />,
  },
  {
    path: "/instructions",
    element: <Instructions />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export { RouterProvider, router };
