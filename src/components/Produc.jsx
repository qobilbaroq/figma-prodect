import React from "react";
import Card from "../elements/Card";

const Produc = () => {
  return (
    <div
      className="flex flex-col gap-10 font-mono items-center"
      id="newarrival"
    >
      <div className="flex gap-5 mt-10 flex-wrap justify-center">
        <button className="border-2 border-slate-300 p-2 w-[100px] rounded-lg hover:bg-yellow-200 hover:border-yellow-200">
          <p className="text-slate-600">SEE ALL</p>
        </button>
        <button className="border-2 border-slate-300 p-2 w-[100px] rounded-lg hover:bg-yellow-200 hover:border-yellow-200">
          <p className="text-slate-600">T-SHIRT</p>
        </button>
        <button className="border-2 border-slate-300 p-2 w-[100px] rounded-lg hover:bg-yellow-200 hover:border-yellow-200">
          <p className="text-slate-600">PANTS</p>
        </button>
        <button className="border-2 border-slate-300 p-2 w-[100px] rounded-lg hover:bg-yellow-200 hover:border-yellow-200">
          <p className="text-slate-600">JACKET</p>
        </button>
        <button className="border-2 border-slate-300 p-2 w-[100px] rounded-lg hover:bg-yellow-200 hover:border-yellow-200">
          <p className="text-slate-600">BAGS</p>
        </button>
        <button className="border-2 border-slate-300 p-2 w-[100px] rounded-lg hover:bg-yellow-200 hover:border-yellow-200">
          <p className="text-slate-600">SHOE</p>
        </button>
      </div>
      <div className="flex gap-3 flex-wrap justify-center mt-5">
        <Card formpage = "menu"/>
        <Card formpage = "menu"/>
        <Card formpage = "menu"/>
        <Card formpage = "menu"/>
        <Card formpage = "menu"/>
        <Card formpage = "menu"/>
        <Card formpage = "menu"/>
        <Card formpage = "menu"/>
        
      </div>
    </div>
  );
};

export default Produc;
