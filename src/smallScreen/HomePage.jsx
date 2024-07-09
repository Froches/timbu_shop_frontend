import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ProductSlide from "../components/ProductSlide";
import SmallProductSlide from "../components/SmallProductSlide";
import BottomNav from "../components/BottomNav";
import randomicon from "../media/Frame19.png";

const HomePage = () => {
  useEffect(() => {
    const body = document.body;

    body.classList.add("bg-[#E7E4E4]", "text-[#504F4F]");

    return () => {
      body.classList.remove("bg-[#E7E4E4]", "text-[#504F4F]");
    };
  }, []);

  return (
    <div className="relative min-h-screen ml-3">
      <div className="flex items-center justify-end my-5">
        <img src={randomicon} alt="" />
      </div>

      <div>
        <h3 className="font-bold md:text-2xl lg:text-4xl">Where Style</h3>
        <p className="md:text-2xl lg:text-3xl">Meets Comfort</p>
      </div>
      <SearchBar />
      <div>
        <div className="flex justify-between mx-5">
          <h2 className="text-2xl">New Arrival</h2>
          <p>See all</p>
        </div>
        <ProductSlide />
      </div>
      <div>
        <div className="flex justify-between mx-5">
          <h2 className="text-2xl">Categories</h2>
          <p>See all</p>
        </div>
        <SmallProductSlide />
      </div>
      <div className="">
        <BottomNav />
      </div>
    </div>
  );
};

export default HomePage;
