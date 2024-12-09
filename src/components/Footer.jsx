import React from "react";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-slate-200 p-5 rounded-lg mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex flex-wrap gap-5 font-mono justify-center md:justify-start">
          <a href="#" className="relative group">
            ABOUT US
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#privacy" className="relative group">
            PRIVACY POLICY
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#terms" className="relative group">
            TERMS OF SERVICE
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#help" className="relative group">
            HELP
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <div className="text-2xl font-mono text-center md:text-left">
          <h1 className="font-bold">BAROQSHOP</h1>
        </div>

        <div className="flex gap-5 font-mono items-center justify-center md:justify-end">
          <a href="#" className="text-2xl text-blue-500 hover:text-blue-600">
            <RiFacebookFill />
          </a>
          <a href="#" className="text-2xl text-blue-500 hover:text-blue-600">
            <RiInstagramFill />
          </a>
          <a href="#" className="text-2xl text-blue-500 hover:text-blue-600">
            <RiTwitterFill />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
