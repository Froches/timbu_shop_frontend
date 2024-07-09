import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import image1 from "../media/slidepic.png";
import React from "react";

const SlideShow = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    image1,
  ];

  const indicators = (index, isActive) => (
    <div
      key={index}
      className="cursor-pointer p-3 text-center border-1 border-[#666] m-0"
    >
      <span
        className={`block w-3 h-3 rounded-full ${
          isActive ? "bg-[#000000]" : "bg-white"
        }`}
      ></span>
    </div>
  );

  return (
    <Zoom indicators={indicators} scale={1.4} arrows={false}>
      <div>
        <div
          className="flex items-center justify-center bg-cover h-[350px] rounded-2xl"
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
      </div>
      <div>
        <div
          className="flex items-center justify-center bg-cover h-[350px] rounded-2xl"
          style={{ backgroundImage: `url(${images[1]})` }}
        ></div>
      </div>
      <div>
        <div
          className="flex items-center justify-center bg-cover h-[350px] rounded-2xl"
          style={{ backgroundImage: `url(${images[2]})` }}
        ></div>
      </div>
    </Zoom>
  );
};

export default SlideShow;
