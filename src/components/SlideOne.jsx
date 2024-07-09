import React from "react";
import { Parallax } from "react-parallax";
import homepic from "../media/homepic.png";

const SlideOne = () => {
  return (
    <Parallax
      blur={0}
      bgImage={homepic}
      bgImageAlt="Home picture"
      strength={200}
    >
      <div className="w-screen h-[50vh] flex items-center justify-center flex-col bg-black bg-opacity-75 shadow-lg p-8 text-white">
        <div className="grid  md:grid-cols-2 m-8 place-items-center">
          <h1 className="text-3xl font-bold m-2">Where Style</h1>
          <span className="text-2xl font-bold m-2">Meets Comfort</span>
        </div>
        <p className="w-2/3">
          Join us to celebrate stylish, comfy wears. Your path to extraordinary
          style begins here.
        </p>
        <button className="bg-[#27489E] w-36 p-2 rounded-full m-14 font-bold hover:scale-110 hover:text-[#27489E] hover:bg-white">
          Get Started
        </button>
      </div>
    </Parallax>
  );
};

export default SlideOne;
