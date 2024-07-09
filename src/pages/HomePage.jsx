import React, { useEffect } from "react";

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
      <NavBar />
    </div>
  );
};

export default HomePage;
