import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/Appcontext";

const Header = () => {
  const { setToken } = useAppContext();
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  }
  return (
    <header>
      <ul className="flex gap-10 justify-between capitalize p-4 px-10 shadow items-center w-[100%] mx-auto bg-white">
        <div className=" flex gap-10">
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
        </div>
        <button
          className="text-lg capitalize font-bold cursor-pointer border-2 px-3 rounded-lg py-0.5"
          onClick={handleLogout}
        >
          logout
        </button>
      </ul>
    </header>
  );
};

export default Header;
