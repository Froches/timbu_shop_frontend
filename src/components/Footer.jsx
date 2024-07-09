import React from 'react';
import Logo from "../media/Logo.png";

const Footer = () => {
  return (
    <div className="bg-[#22374A] m-0 p-3 uppercase text-[#F8F8F8] flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="" />
        <p className="ml-2">unique store</p>
      </div>
      <div>
        <ul>
            <li>About us</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer
