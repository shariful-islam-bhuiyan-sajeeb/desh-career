import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? " text-red-600 transition-all duration-300 rounded-lg     "
            : "bg-transparent"
        }
      >
        Home
      </NavLink>

      <Link className="">Privacy Policy</Link>
      <Link className="">Terms Condition</Link>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? " text-red-600 transition-all duration-300 rounded-lg  "
            : "bg-transparent"
        }
      >
        About Us
      </NavLink>
      <NavLink>Contact Us</NavLink>
      <Link className="">Advertise</Link>
      <div>
        <button className="bg-red-500 hover:bg-red-700 hover:text-white px-3 py-1 rounded-lg transition-all duration-500">
          Join Now
        </button>
      </div>
    </>
  );
  return (
    <div className="w-full mx-auto md:py-6 py-4 border shadow-xl">
      <div className="flex items-center justify-between xl:w-9/12 lg:w-full md:w-full w-11/12 mx-auto lg:px-2 md:px-4 xl:px-0">
        <div className="">
          <Link>
            <img
              className="xl:w-40 lg:w-32 sm:w-36 w-28 "
              src="https://deshcareer.com/logo/short-logo.png"
              alt=""
            />
          </Link>
        </div>

        <div className="flex item-center justify-end  w-full xl:text-3xl md:text-lg text-md font-serif">
          <ul className="menu menu-horizontal hidden xl:px-3 md:px-2 py-1 lg:text-lg lg:text-md text-sm font-semibold   md:flex lg:gap-x-6 md:gap-x-4 font-serif text-black ">
            {menuItems}
          </ul>
          <div className="dropdown md:hidden ">
            <label tabIndex={0} className="btn btn-ghost ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black bg-red-100 bg-opacity-30  rounded-full "
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
            </label>
            {/* <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content border font-serif text-center py-2 px-4 space-y-2 bg-blue-100 rounded-lg "
            >
              {menuItems}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
