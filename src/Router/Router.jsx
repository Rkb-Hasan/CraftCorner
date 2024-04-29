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
// import MyArt from "../Pages/MyArt/MyArt";
import MyArts from "../Pages/MyArts/MyArts";
import UpdateCraft from "../Pages/UpdateCraft/UpdateCraft";
import ArtCraftCategories from "../Pages/Home/ArtCraftCategories/ArtCraftCategories";
import SubDetails from "../Pages/SubDetails/SubDetails";
import SubItemDetails from "../Pages/SubDetails/SubItemDetails/SubItemDetails";
import OurPartners from "../Pages/Home/OurPartners/OurPartners";
import Member from "../Pages/Home/Member/Member";

// import Landscape from "../Pages/SubDetails/SubDetails";

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
            loader: () =>
              fetch(
                "https://assignment-10-server-eight-opal.vercel.app/crafts"
              ),
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
        loader: () =>
          fetch("https://assignment-10-server-eight-opal.vercel.app/crafts"),
      },
      {
        path: "/",
        element: <ArtCraftCategories></ArtCraftCategories>,
        loader: () =>
          fetch(
            "https://assignment-10-server-eight-opal.vercel.app/subCategories"
          ),
      },
      {
        path: "/",
        element: <OurPartners></OurPartners>,
      },
      {
        path: "/",
        element: <Member></Member>,
      },
      {
        path: "/subDetails/:subCategoryName",
        element: <SubDetails></SubDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-eight-opal.vercel.app/subCategories/${params.subCategoryName}`
          ),
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
        path: "/updateCraft/:id",
        element: (
          <PrivateRoute>
            <UpdateCraft></UpdateCraft>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-eight-opal.vercel.app/crafts/${params.id}`
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
          fetch(
            `https://assignment-10-server-eight-opal.vercel.app/crafts/${params.id}`
          ),
      },
      {
        path: "/subCategoryDetail/:id",
        element: <SubItemDetails></SubItemDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-eight-opal.vercel.app/subCategoryDetail/${params.id}`
          ),
      },
      {
        path: "/craft/myArt",
        element: (
          <PrivateRoute>
            <MyArts></MyArts>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
