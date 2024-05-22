import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);