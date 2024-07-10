import React from 'react';
import Logo from "../media/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[#22374A] h-[50vh] m-0 p-3 uppercase text-[#F8F8F8] flex flex-col justify-center items-center">
      <div className="flex items-center self-start md:self-center">
        <img src={Logo} alt="" />
        <p className="ml-2">unique store</p>
      </div>
      <div className="flex items-center justify-center">
        <ul className="grid grid-cols-2 m-8">
          <Link to={'/about'}><li className="m-4">About us</li></Link>
          <Link to={'/faq'}><li className="m-4">FAQ</li></Link>
          <Link to={'/privacy'}><li className="m-4">Privacy Policy</li></Link>
          <Link to={'/terms'}><li className="m-4">Terms Of Service</li></Link>
        </ul>
      </div>
      <div className="text-center">
        <Link to={'https://google.com/timbu_shop'}><FontAwesomeIcon icon={faGoogle} className="m-2 text-black bg-white p-2 rounded-full" /></Link>
        <Link to={'https://gmail.com'}><FontAwesomeIcon icon={faEnvelope} className="m-2 text-black bg-white p-2 rounded-full" /></Link>
        <Link to={'https://x.com/Froches_'}><FontAwesomeIcon icon={faTwitter} className="m-2 text-black bg-white p-2 rounded-full" /></Link>
        <Link to={'https://facebook.com'}><FontAwesomeIcon icon={faFacebook} className="m-2 text-black bg-white p-2 rounded-full" /></Link>
      </div>
      <p className="bottom-0">
        © Unique store 2024. All rights reserved
      </p>
    </div>
  );
}

export default Footer
