import React from "react";
import { RiShoppingBasketLine } from "react-icons/ri";

const Header = () => {
  return (
    <nav
      className="flex justify-between items-center h-auto md:h-[65px] w-full m-3 p-5 bg-slate-200 rounded-lg"
      aria-label="Main Navigation"
    >
      <div className="text-2xl font-mono flex-shrink-0">
        <h1 className="font-bold">BAROQSHOP</h1>
      </div>

      <div className="hidden md:flex gap-7 font-mono">
        <a href="/" className="relative group">
          HOME
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#newarrival" className="relative group">
          NEW ARRIVAL
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#" className="relative group">
          MEN
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#" className="relative group">
          WOMEN
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>

      <div className="flex gap-7  font-mono items-center">
        <a href="#" className="relative group hidden md:block">
          CONTACT
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="/Login" className="relative group ">
          LOGIN
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </a>
      <div className=" bg-blue-500 p-2 rounded-xl text-white text-2xl flex items-center justify-center cursor-pointer hover:bg-blue-600">
        <RiShoppingBasketLine />
      </div>
      </div>

    </nav>
  );
};

export default Header;
