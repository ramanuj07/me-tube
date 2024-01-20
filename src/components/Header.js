import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="hamburger icon"
          className="h-8"
        />
        <img
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="logo"
          className="h-10 ml-4"
        />
      </div>

      <div className="flex col-span-9 ">
        <input
          type="text"
          placeholder="Search"
          className="h-8 w-1/2 border border-black rounded-lg p-2"
        />
        <button>
          <img
            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
            alt="search icon"
            className="h-6 pl-2"
          />
        </button>
      </div>

      <div className="col-span-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9hrpUnDCcHPqBT1mvnZ0HM-CddsZnfZXiyJd_VPRGOA&s"
          alt="user icon"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Header;
