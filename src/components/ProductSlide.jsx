import React from "react";
import img5 from "../media/img5.png";
import img1 from "../media/img1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProductSlide = () => {
  return (
    <div className="h-min w-[90vw] flex items-center justify-center bg-[#E7E4E4] text-[#504F4F] overflow-scroll">
      <div className="w-screen">
        <div className="flex space-x-4 p-4">
          <div className="flex flex-col items-center justify-center">
            <img
              src={img5}
              alt=""
              className="min-w-[197px] h-[230px] flex items-center justify-center"
            />
            <Link to={'/details'}><h3>Winter Coat</h3>
            <p>$51.0</p></Link>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={img1}
              alt=""
              className="min-w-[197px] h-[230px] flex items-center justify-center"
            />
            <Link to={'/details'}><h3>Winter Coat</h3>
            <p>$51.0</p></Link>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={img5}
              alt=""
              className="min-w-[197px] h-[230px] flex items-center justify-center"
            />
            <Link to={'/details'}><h3>Winter Coat</h3>
            <p>$51.0</p></Link>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={img5}
              alt=""
              className="min-w-[197px] h-[230px] flex items-center justify-center"
            />
            <Link to={'/details'}><h3>Winter Coat</h3>
            <p>$51.0</p></Link>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={img5}
              alt=""
              className="min-w-[197px] h-[230px] flex items-center justify-center"
            />
            <Link to={'/details'}><h3>Winter Coat</h3>
            <p>$51.0</p></Link>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={img5}
              alt=""
              className="min-w-[197px] h-[230px] flex items-center justify-center"
            />
            <Link to={'/details'}><h3>Winter Coat</h3>
            <p>$51.0</p></Link>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={img5}
              alt=""
              className="min-w-[197px] h-[230px] flex items-center justify-center"
            />
            <Link to={'/details'}><h3>Winter Coat</h3>
            <p>$51.0</p></Link>
            <div>
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
              <FontAwesomeIcon icon={faStar} className="text-[#F0E821]" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
