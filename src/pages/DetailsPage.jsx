import React, { useEffect } from "react";
import img5 from "../media/img5.png";

const DetailsPage = () => {
  useEffect(() => {
    const body = document.body;

    body.classList.add("bg-[#E7E4E4]", "text-[#504F4F]");

    return () => {
      body.classList.remove("bg-[#E7E4E4]", "text-[#504F4F]");
    };
  }, []);

  return (
    <div className="min-h-screen grid lg:grid-cols-2 m-4">
      <div className="flex items-center justify-center flex-col">
        <img
          src={img5}
          alt=""
          className="flex items-center justify-center w-4/5"
        />
        <div className="flex justify-between w-4/5 m-8">
          <h2 className="">Winter Coat</h2>
          <p>$50.0</p>
        </div>
      </div>
      <div>
        <div className="lg:mt-40">
          <h2 className="text-2xl">Details</h2>
          <p>
            Winter coat for women with insulating materials like down, fleece,
            and wool for warmth. Adjustable cuffs and hem for a custamizable
            fit.{" "}
          </p>
        </div>
        <div className="w-1/2 my-4">
          <p>Size:</p>
          <div className="flex items-center justify-around mt-4">
            <button className="bg-white rounded-full p-1 w-9 h-9">S</button>
            <button className="bg-white rounded-full p-1 w-9 h-9">M</button>
            <button className="bg-white rounded-full p-1 w-9 h-9">L</button>
            <button className="bg-white rounded-full p-1 w-9 h-9">XL</button>
          </div>
        </div>
        <div className="w-1/2 my-4">
          <p className="font-bold">Colors Available:</p>
          <div className="flex items-center justify-around mt-4">
            <button className="bg-[#737574] rounded-full p-1 w-9 h-9"></button>
            <button className="bg-[#355C96] rounded-full p-1 w-9 h-9"></button>
            <button className="bg-[#C71616] rounded-full p-1 w-9 h-9"></button>
            <button className="bg-[#D3434C] rounded-full p-1 w-9 h-9"></button>
          </div>
        </div>
        <div className="flex items-center justify-center text-[#F8F8F8]">
          <button className="bg-[#27489E] w-5/6 p-3 rounded-full my-10 font-bold hover:bg-[#F8F8F8] hover:text-[#27489E]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
