import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" max-w-7xl mx-auto px-4 lg:my-10 md:my-6 my-3">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
