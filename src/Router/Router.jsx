import { createBrowserRouter } from "react-router-dom";
import Root from "./../Layout/Root";
import NotFound from "../Pages/ErrorPage/NotFound";
import AddCraftItem from "./../Pages/AddCraftItem/AddCraftItem";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Crafts from "../Pages/Home/Crafts/Crafts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Crafts></Crafts>,
            loader: () => fetch("http://localhost:5000/crafts"),
          },
        ],
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addCraftItem",
        element: <AddCraftItem></AddCraftItem>,
      },
    ],
  },
]);

export default router;
