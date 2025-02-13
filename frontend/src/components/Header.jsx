import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul className="flex gap-10 justify-center capitalize p-4 shadow items-center w-[100%] mx-auto bg-white">
        <li className="font-bold text-xl ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-amber-500 underline"
                : "text-black cursor-pointer"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="font-bold text-xl ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-amber-600 underline"
                : "text-black cursor-pointer"
            }
            to="/applications"
          >
            apply now
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
