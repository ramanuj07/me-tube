import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col py-2 px-4 shadow-lg">
      <div className="flex col-span-2 items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="hamburger icon"
          className="h-6 items-center"
        />
        <img
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="logo"
          className="h-14 ml-4 items-center"
        />
      </div>

      <div className="flex col-span-9 items-center">
        <input
          type="text"
          placeholder="Search"
          className="h-8 w-1/2 border border-black rounded-l-full p-2"
        />
        <button className="">
          <img
            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
            alt="search icon"
            className="h-8 px-5 py-1 items-center border border-black rounded-r-full bg-gray-100"
          />
        </button>
      </div>

      <div className="flex col-span-1 items-center justify-end mr-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9hrpUnDCcHPqBT1mvnZ0HM-CddsZnfZXiyJd_VPRGOA&s"
          alt="user icon"
          className="h-8 items-center"
        />
      </div>
    </div>
  );
};

export default Header;
