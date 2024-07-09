import React from 'react';
import img2 from "../media/img2.png";
import img3 from "../media/img3.png";
import img4 from "../media/img4.png";

const SmallProductSlide = () => {
  return (
    <div className="h-min flex items-center justify-center bg-[#E7E4E4] text-[#504F4F]">
      <div className="w-full max-w-4xl overflow-x-auto">
        <div className="flex space-x-4 p-4">
          <div>
            <img
              src={img2}
              alt=""
              className="min-w-[97px] h-[167px] flex items-center justify-center"
            />
            <h3 className="text-center my-4">Winter Coat</h3>
          </div>

          <div>
            <img
              src={img3}
              alt=""
              className="min-w-[97px] h-[167px] flex items-center justify-center"
            />
            <h3 className="text-center my-4">Winter Coat</h3>
          </div>
          <div>
            <img
              src={img4}
              alt=""
              className="min-w-[97px] h-[167px] flex items-center justify-center"
            />
            <h3 className="text-center my-4">Winter Coat</h3>
          </div>
          <div>
            <img
              src={img2}
              alt=""
              className="min-w-[97px] h-[167px] flex items-center justify-center"
            />
            <h3 className="text-center my-4">Winter Coat</h3>
          </div>
          <div>
            <img
              src={img3}
              alt=""
              className="min-w-[97px] h-[167px] flex items-center justify-center"
            />
            <h3 className="text-center my-4">Winter Coat</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallProductSlide
