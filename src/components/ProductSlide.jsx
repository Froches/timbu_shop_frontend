import React from "react";
import img5 from "../media/img5.png";
import img1 from "../media/img1.png";

const ProductSlide = () => {
  return (
    <div className="h-min flex items-center justify-center bg-[#E7E4E4] text-[#504F4F]">
      <div className="w-full max-w-4xl overflow-x-auto">
        <div className="flex space-x-4 p-4">
          <div>
            <img
              src={img5}
              alt=""
              className="min-w-[197px] h-[230px] flex items-center justify-center"
            />
            <h3>Winter Coat</h3>
            <p>$50.0</p>
          </div>

          <div>
            <img
              src={img1}
              alt=""
              className="min-w-[197px] h-[230px] flex items-center justify-center"
            />
            <h3>Winter Coat</h3>
            <p>$50.0</p>
          </div>
          <div>
            <img
              src={img5}
              alt=""
              className="min-w-[197px] h-[230px] flex items-center justify-center"
            />
            <h3>Winter Coat</h3>
            <p>$50.0</p>
          </div>
          <div>
            <img
              src={img1}
              alt=""
              className="min-w-[197px] h-[230px] flex items-center justify-center"
            />
            <h3>Winter Coat</h3>
            <p>$50.0</p>
          </div>
          <div>
            <img
              src={img5}
              alt=""
              className="min-w-[197px] h-[230px] flex items-center justify-center"
            />
            <h3>Winter Coat</h3>
            <p>$50.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
