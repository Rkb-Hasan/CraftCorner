import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import { Outlet } from "react-router-dom";
import ArtCraftCategories from "./ArtCraftCategories/ArtCraftCategories";
import OurPartners from "./OurPartners/OurPartners";
import Member from "./Member/Member";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Outlet></Outlet>
      <ArtCraftCategories></ArtCraftCategories>
      <Member></Member>
      <OurPartners></OurPartners>
    </div>
  );
};

export default Home;
