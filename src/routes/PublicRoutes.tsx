import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/dynamic/Home/Home";
import Login from "../components/dynamic/Login/Login";
import Books from "../components/dynamic/Books/Books";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: (
          <PrivateRoute>
            <Books></Books>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
