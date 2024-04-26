import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
