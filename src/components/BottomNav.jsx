import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShop,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const BottomNav = () => {
  return (
    <div className="relative">
      <div className="fixed bottom-0 left-0 w-full bg-[#F8F8F8] text-[#808080] text-center p-4">
        <div className="flex items-center justify-between">
          <FontAwesomeIcon icon={faHome} className="text-2xl" />
          <FontAwesomeIcon icon={faShop} className="text-2xl" />
          <FontAwesomeIcon icon={faHeart} className="text-2xl" />
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
