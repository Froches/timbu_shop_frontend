import React, { useState } from "react";
import Logo from "../media/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#22374A] m-0 p-3 uppercase text-[#F8F8F8] flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="" />
        <p className="ml-2">unique store</p>
      </div>
      <div>
        <ul className="hidden md:flex mr-20">
          <li className="mx-2">home</li>
          <li className="mx-2">products</li>
          <li className="mx-2">carts</li>
        </ul>
      </div>
      <div className="md:hidden" onClick={handleClick}>
        <FontAwesomeIcon icon={nav ? faClose : faBars} className="mr-4" />
        <Link></Link><FontAwesomeIcon icon={!nav && faCartShopping}/>
      </div>
      {nav ? (
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#22374A] ease-in-out duration-500 mt-16 hover:text-[#a3b8ca] border-2 border-[#7491ad] z-10"
              : "ease-in-out W-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <li className="bg-transparent w-2/4 p-2 m-1 hover:border-b-2 border-[#7491ad]">home</li>
          <li className="bg-transparent w-2/4 p-2 m-1 hover:border-b-2 border-[#7491ad]">products</li>
        </ul>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};

export default NavBar;
