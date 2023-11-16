import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import StarsGame from "./views/StarsGame";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/starsGame",
    element: <StarsGame />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
