import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import { Outlet } from "react-router-dom";
import ArtCraftCategories from "./ArtCraftCategories/ArtCraftCategories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Outlet></Outlet>
      <ArtCraftCategories></ArtCraftCategories>
    </div>
  );
};

export default Home;
