import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SlideItem = ({ image, name, price, rating }) => {
  const setRating = () => {
    rating += 1;
  }
  const starRating = ({ rating }) => {
    const adjustedRating = Math.min(Math.max(rating, 0), 5);
    const stars = [];

    for (let i = 0; i < adjustedRating; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className="text-yellow-500 w-6 h-6"
        />
      );
    }
    for (let i = adjustedRating; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className="text-gray-300 w-6 h-6"
        />
      );
    }

    return <div className="flex">{stars}</div>;
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="min-w-[197px] h-[230px] flex items-center justify-center">
        <img src={image} alt="" className="object-contain" />
      </div>

      <Link to={"/details"}>
        <h3>{name}</h3>
        <p>${price}</p>
      </Link>
      <div onClick={setRating}>{starRating({ rating })}</div>
    </div>
  );
};

export default SlideItem;
