import React, { useEffect, useState } from "react";
import SlideItem from "./SlideItem";
import products from "../products.json";
import img1 from "../media/img1.png";
import img2 from "../media/img2.png";
import img5 from "../media/img5.png";

const ProductSlide = () => {
  const images = {
    img5: img5,
    img1: img1,
    img2: img2,
  };
  return (
    <div className="h-min w-[90vw] flex items-center justify-center bg-[#E7E4E4] text-[#504F4F] overflow-scroll scrollbar-hide">
      <div className="w-screen">
        <div className="flex space-x-4 p-4">
          {products.map((product) => {
            return (
              <SlideItem
                key={product.id}
                image={images[product.imgSrc]}
                name={product.name}
                price={product.price}
                rating={product.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
