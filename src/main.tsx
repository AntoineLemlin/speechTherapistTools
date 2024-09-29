import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Root from "./components/Root";
import StarsGame from "./views/StarsGame";
import Dobble from "./views/Dobble";
import DobblePdf from "./views/DobblePdf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/starsGame",
        element: <StarsGame />,
      },
      {
        path: "/dobbleGenerator",
        element: <Dobble />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
