import { createBrowserRouter } from "react-router-dom";
import Root from "./../Layout/Root";
import NotFound from "../Pages/ErrorPage/NotFound";
import AddCraftItem from "./../Pages/AddCraftItem/AddCraftItem";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Crafts from "../Pages/Home/Crafts/Crafts";
import Register from "./../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllCraft from "../Pages/AllCraft/AllCraft";
import CraftDetails from "../Pages/CraftDetails/CraftDetails";
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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allCraft",
        element: <AllCraft></AllCraft>,
        loader: () => fetch("http://localhost:5000/crafts"),
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRoute>
            <AddCraftItem></AddCraftItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/craft/:id",
        element: (
          <PrivateRoute>
            <CraftDetails></CraftDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/crafts/${params.id}`),
      },
    ],
  },
]);

export default router;
