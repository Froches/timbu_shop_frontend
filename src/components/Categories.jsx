import React from "react";
import ProductSlide from "./ProductSlide";

const Categories = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold">Categories</h3>
        <p className="font-bold m-8">
          We have different categories of wears to suit everyones need.
        </p>
      </div>
      <div>
        <p className="font-bold my-8">Female Category</p>
        <ProductSlide />
      </div>
      <div>
        <p className="font-bold my-8">Male Category</p>
        <ProductSlide />
      </div>
      <div>
        <p className="font-bold my-8">Kids Category</p>
        <ProductSlide />
      </div>
    </div>
  );
};

export default Categories;
