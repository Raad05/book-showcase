import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/dynamic/Home/Home";
import Login from "../components/dynamic/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
