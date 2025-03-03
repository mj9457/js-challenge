import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import C1 from "@/pages/Challenges/C1";
import C2 from "@/pages/Challenges/C2";
import C3 from "@/pages/Challenges/C3";

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
        path: "/c1",
        element: <C1 />,
      },
      {
        path: "/c2",
        element: <C2 />,
      },
      {
        path: "/c3",
        element: <C3 />,
      },
    ],
  },
]);

export default router;
