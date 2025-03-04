import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import C1 from "@/pages/Challenges/C1";
import C2 from "@/pages/Challenges/C2";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/challengs",
        element: <C1 />,
      },
      {
        path: "/challenges/C1",
        element: <C1 />
      },
      {
        path: "/challenges/C2", 
        element: <C2 />
      },
    ],
  },
]);

export default router;
