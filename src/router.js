import GameGrid from "./views/gameGrid";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loss from "./views/loss";
import Start from "./views/start";
import Win from "./views/win";
import Instructions from "./views/instructions";
import ErrorPage from "./views/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/game",
    element: (
      <GameGrid
        x={100}
        y={100}
        start={Math.floor(Math.random() * 100)}
        end={Math.floor(Math.random() * 100)}
      />
    ),
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
