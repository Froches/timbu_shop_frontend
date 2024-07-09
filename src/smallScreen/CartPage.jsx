import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faTrashAlt,
  faAdd,
  faSubtract,
} from "@fortawesome/free-solid-svg-icons";
import img5 from "../media/img5.png";

const CartPage = () => {
  useEffect(() => {
    const body = document.body;

    body.classList.add("bg-[#E7E4E4]", "text-[#504F4F]");

    return () => {
      body.classList.remove("bg-[#E7E4E4]", "text-[#504F4F]");
    };
  }, []);

  return (
    <div className="relative min-h-screen mx-4">
      <div className="grid grid-cols-2 gap-4 w-full my-10">
        <div className="">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="bg-[#F8F8F8] rounded-full w-10 h-10 p-2"
          />
        </div>
        <div className="ml-[-180px]">
          <h1 className="text-3xl text-center">My Cart</h1>
        </div>
      </div>
      <div>
        <ul>
          <li className="grid grid-cols-3 gap-1 w-full max-w-4xl">
            <div className="flex items-center justify-center">
              <img src={img5} alt="" className="w-[101px] h-[118px]" />
            </div>
            <div>
              <h2 className="font-bold w-full p-2">Quilted Jacket</h2>
              <p className="mx-3">$37.9</p>
              <div className="flex items-center justify-center">
                <button className="bg-[#737574] rounded-full p-1 w-9 h-9 mx-2"></button>
                <button className="bg-white rounded-full p-1 w-9 h-9 mx-2">
                  L
                </button>
              </div>
              <div className="flex justify-between m-4">
                <FontAwesomeIcon icon={faAdd} className="" />
                <FontAwesomeIcon icon={faSubtract} className="" />
              </div>
            </div>
            <div className="flex items-start justify-end">
              <FontAwesomeIcon icon={faTrashAlt} className="hover" />
            </div>
          </li>
          <li className="grid grid-cols-3 gap-1 w-full max-w-4xl">
            <div className="flex items-center justify-center">
              <img src={img5} alt="" className="w-[101px] h-[118px]" />
            </div>
            <div>
              <h2 className="font-bold w-full p-2">Quilted Jacket</h2>
              <p className="mx-3">$37.9</p>
              <div className="flex items-center justify-center">
                <button className="bg-[#F68CB5] rounded-full p-1 w-9 h-9 mx-2"></button>
                <button className="bg-white rounded-full p-1 w-9 h-9 mx-2">
                  M
                </button>
              </div>
              <div className="flex justify-between m-4">
                <FontAwesomeIcon icon={faAdd} className="" />
                <FontAwesomeIcon icon={faSubtract} className="" />
              </div>
            </div>
            <div className="flex items-start justify-end">
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </li>
          <li className="grid grid-cols-3 gap-1 w-full max-w-4xl">
            <div className="flex items-center justify-center">
              <img src={img5} alt="" className="w-[101px] h-[118px]" />
            </div>
            <div>
              <h2 className="font-bold w-full p-2">Quilted Jacket</h2>
              <p className="mx-3">$37.9</p>
              <div className="flex items-center justify-center">
                <button className="bg-[#000000] rounded-full p-1 w-9 h-9 mx-2"></button>
                <button className="bg-white rounded-full p-1 w-9 h-9 mx-2">
                  M
                </button>
              </div>
              <div className="flex justify-between m-4">
                <FontAwesomeIcon icon={faAdd} className="" />
                <FontAwesomeIcon icon={faSubtract} className="" />
              </div>
            </div>
            <div className="flex items-start justify-end">
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-20 m-4">
        <div className="flex items-center justify-between my-4">
          <h4 className="font-bold">Total:</h4>
          <p>$123.8</p>
        </div>
        <div className="flex items-center justify-between my-4 border-b-2 border-[#C0C0C0]">
          <h4 className="font-bold">Shipping fee:</h4>
          <p>$0.0</p>
        </div>
        <div className="flex items-center justify-between my-4">
          <h4 className="font-bold">Grand Total:</h4>
          <p>$123.8</p>
        </div>
      </div>
      <div className="flex items-center justify-center text-[#F8F8F8]">
        <button className="bg-[#27489E] w-5/6 p-3 rounded-2xl my-10">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CartPage;
