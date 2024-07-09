import React, { useEffect } from "react";
import SlideShow from "../components/SlideShow";

const OnboardingPage = () => {
  useEffect(() => {
    const body = document.body;

    body.classList.add("bg-[#22374A]", "text-gray-800");

    return () => {
      body.classList.remove("bg-[#22374A]", "text-gray-800");
    };
  }, []);

  return (
    <div className="w-full h-screen text-white flex items-center justify-center flex-col">
      <div className="flex items-center justify-center m-8">
        <div className="w-10 h-10 bg-[#27489E] flex-none -order-none flex-grow-0"></div>
        <h1>Unique Store</h1>
      </div>
      <div className="m-10 ">
        <div>
          <h3 className="font-bold">Where Style</h3>
          <p className="mb-8">Meets Comfort</p>
        </div>

        <p>
          Join us to celebrate stylish, comfy wears. Your path to extraordinary
          style begins here.
        </p>
      </div>
      <div className="w-3/4 rounded-sm">
        <SlideShow />
      </div>
      <button className="w-80 h-14 bg-[#27489E] rounded-lg my-20">Get Started</button>
    </div>
  );
};

export default OnboardingPage;
