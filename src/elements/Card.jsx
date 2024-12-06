import React from "react";
import { CiHeart } from "react-icons/ci";
import defaultimg from "../assets/product.jpg";   

const Card = (prompt) => {
    const {category = "men", title = "product title" , price = "price" , imgproduct = defaultimg} = prompt;
  return (
    <div className="flex flex-col items-center bg-slate-100 rounded-lg shadow-md p-4 w-[350px] gap-5 h-[570px]">
      <div className="flex justify-between w-full mb-2">
        <div className="flex justify-center items-center bg-blue-500 p-0.5 w-16 rounded-full text-white"><p >{category}</p></div>
        <button className="text-gray-500 hover:text-red-500 text-3xl"><CiHeart/></button>
      </div>

      <img
        src={imgproduct}
        alt="Product"
        className="w-full h-[400px] object-cover rounded-md"
      />

      <div className="flex justify-between w-full ">
        <h3 className="text-xl font-bold text-gray-800 text-wrap">{title}</h3>
        <div className="flex flex-col gap-1">
            <h1 className="ms-14">SIZE</h1>
            <p>S, M, L, XL</p>
        </div>
      </div>

        <button className="p-2 w-full border-2 border-black hover:bg-yellow-200 hover:border-yellow-200 rounded-full">$ {price}</button>
    </div>
  );
};

export default Card;
 