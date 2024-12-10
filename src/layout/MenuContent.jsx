import React from "react";
import pp from "../assets/product.jpg";

const MenuContent = () => {
  return (
    <div className="flex items-center h-screen mx-32 p-10 gap-10 bg-slate-100 shadow-lg">
      <div className="flex-shrink-0">
        <img src={pp} width={500} className="rounded-lg border" alt="Product" />
      </div>

      <div className="flex flex-col gap-6 flex-grow">
        <h1 className="text-3xl font-bold text-gray-800">jecket mahal</h1>
        <p className="text-gray-600 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div className="text-2xl text-slate-900 font-semibold">
          Rp 1.000.000
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">Jumlah</span>
          <div className="flex items-center border rounded-lg">
            <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
              -
            </button>
            <input
              type="number"
              className="w-16 text-center border-l border-r outline-none"
              defaultValue={1}
              min={1}
            />
            <button className="px-3 py-2 text-gray-600 hover:bg-gray-100">
              +
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex-grow py-2 px-6 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
            Masukkan Keranjang
          </button>
          <button className="flex-grow py-2 px-6 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
