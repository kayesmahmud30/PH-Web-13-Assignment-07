import React from "react";
import { Link } from "react-router";
import Navmenu from "./Navmenu";
import { BiHomeAlt2 } from "react-icons/bi";
import { ImStatsDots } from "react-icons/im";
import { MdOutlineAccessTime } from "react-icons/md";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const menuList = (
    <>
      <Navmenu
        icon={<BiHomeAlt2 className=" font-medium" />}
        to="/"
        children="Home"
      />

      <Navmenu
        icon={<MdOutlineAccessTime className=" font-medium" />}
        to="/timeline"
        children="Timeline"
      />

      <Navmenu
        icon={<ImStatsDots className=" font-medium" />}
        to="/stats"
        children="Stats"
      />
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-5 justify-between">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow items-start nav"
            >
              {menuList}
            </ul>
          </div>

          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 justify-center items-center nav">
            {menuList}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
