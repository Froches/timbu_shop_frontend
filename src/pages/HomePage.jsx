import React, { useEffect } from "react";
import SlideOne from "../components/SlideOne";
import NewArrivals from "../components/NewArrivals";
import Categories from "../components/Categories";

const HomePage = () => {
  useEffect(() => {
    const body = document.body;

    body.classList.add("bg-[#E7E4E4]", "text-[#504F4F]");

    return () => {
      body.classList.remove("bg-[#E7E4E4]", "text-[#504F4F]");
    };
  }, []);

  return (
    <div>
      <SlideOne />
      <NewArrivals />
      <Categories />
    </div>
  );
};

export default HomePage;
