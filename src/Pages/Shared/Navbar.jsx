import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        toast.success("Logged Out successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/update">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/offers">My Offers</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-green-500 bg-opacity-70">
      <div className="navbar max-w-7xl mx-auto px-4  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-4xl  md:text-3xl font-bold text-2xl">
            HomeHub
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <div className="flex gap-2">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-inherit hover:bg-inherit border-none hover:border-none btn-circle avatar tooltip tooltip-bottom z-20"
                data-tip={user.displayName}
              >
                <div className="w-10 rounded-full ">
                  <img alt="User" src={user.photoURL} />
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className="btn font-bold btn-primary lg:text-lg"
              >
                Log Out
              </button>
            </div>
          ) : loading ? (
            <div className="text-center mr-10">
              {" "}
              <span className="loading loading-spinner loading-md "></span>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn font-bold btn-primary lg:text-lg ">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
