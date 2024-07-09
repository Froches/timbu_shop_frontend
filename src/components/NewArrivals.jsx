import React from "react";
import ProductSlide from "./ProductSlide";

const NewArrivals = () => {
  return (
    <div className="w-full min-h-[150vh] flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold">New Arrivals</h3>
        <p className="font-bold m-8">Get trendy with our latest arrivals</p>
      </div>
      <div>
        <ProductSlide />
        <ProductSlide />
      </div>
    </div>
  );
};

export default NewArrivals;
