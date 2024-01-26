import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/navSlice";
import {
  HAMBURGER_ICON,
  LOGO_URL,
  SEARCH_ICON,
  USER_ICON,
} from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col py-2 px-4 shadow-lg">
      <div className="flex col-span-2 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          src={HAMBURGER_ICON}
          alt="hamburger icon"
          className="h-6 items-center cursor-pointer"
        />
        <img
          src={LOGO_URL}
          alt="logo"
          className="h-14 ml-4 items-center cursor-pointer"
        />
      </div>

      <div className="flex col-span-9 items-center">
        <input
          type="text"
          placeholder="Search"
          className="h-8 w-1/2 border border-gray-400 rounded-l-full p-2"
        />
        <button className="">
          <img
            src={SEARCH_ICON}
            alt="search icon"
            className="h-8 px-5 py-1 items-center border border-gray-400 rounded-r-full bg-gray-100"
          />
        </button>
      </div>

      <div className="flex col-span-1 items-center justify-end mr-8">
        <img
          src={USER_ICON}
          alt="user icon"
          className="h-8 items-center cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
