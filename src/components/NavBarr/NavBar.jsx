import React, { useEffect, useState } from "react";
import DarckMode from "./DarckMode";
import Logo from "../../assets/Real Estate Agency Logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#services",
  },
  {
    id: 3,
    name: "Services",
    link: "/#",
  },
  {
    id: 4,
    name: "Projects",
    link: "/#",
  },
  {
    id: 5,
    name: "Blog",
    link: "/#",
  },
];

const DropdawnLinks = [
  {
    id: 1,
    name: "Dropdown 1",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const NavBar = () => {
  const menu = document.getElementById("menu");
  const handleMenu = () => {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };

  return (
    <div className="fluid shadow-md bg-white dark:bg-slate-900 dark:text-white">
      {/* upper nav bar with logo */}
      <div className="group bg-primary/40 py-3 sm:py-0 flex justify-between items-center">
        <div className="container flex justify-between items-center py-3">
          <div>
            <div>
              <a href="#" className="font-bold text-sm sm:text-3xl flex gap-2">
                <img src={Logo} alt="" className="w-5 sm:w-10 rounded-full hover:scale-105" />
                Cayderus GC
              </a>
            </div>
          </div>
          {/* search bar  */}
          <div className="flex items-center gap-3 py-2">
            {/* Darck mode switcher will go here */}
            <div>
              <DarckMode />
            </div>
          </div>
        </div>
        {/* mobile menu will go here */}
        <div>
          <div>
            <IoMenu
              className="sm:hidden mx-3 text-2xl cursor-pointer"
              onClick={handleMenu}
            />
          </div>
        </div>
      </div>
      {/* lower nav bar */}
      <div className="md:flex  justify-center">
        <ul className="md:flex hidden items-center gap-5 relative" id="menu" >
          
            {Menu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block text-lg px-4 hover:text-primary transition-all duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* simple Dropdawn will go here */}
            <li className="group relative cursor-pointer px-4">
              <a href="#" className="flex items-center gap-[2px] py-2 ">
                Dropdown
                <span>
                  <IoMdArrowDropdown className="transition-all duration-300 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropdawnLinks.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20 transition-all duration-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          
          <div className=" absolute top-0 right-0 px-2">
            <IoCloseOutline
              className="text-2xl cursor-pointer sm:hidden"
              onClick={handleMenu}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
