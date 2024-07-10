import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  useEffect(() => {
    const body = document.body;

    body.classList.add("bg-[#E7E4E4]", "text-[#504F4F]");

    return () => {
      body.classList.remove("bg-[#E7E4E4]", "text-[#504F4F]");
    };
  }, []);
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col items-start justify-center m-4">
        <h3>Personal Information</h3>
        <div className="border-2 border-[#27489E] flex flex-col rounded-lg p-4 mb-6 md:w-7/12">
          <div className="flex">
            <div className="m-4">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                className="w-full p-2 border border-gray-300 rounded-md bg-[#D6D2D2] shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="m-4">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                className="w-full p-2 border border-gray-300 rounded-md bg-[#D6D2D2] shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="m-4">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md bg-[#D6D2D2] shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="m-4 flex flex-col">
            <label htmlFor="number">Phone Number</label>
            <input
              type="number"
              id="number"
              className="w-2/5 p-2 border border-gray-300 rounded-md bg-[#D6D2D2] shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <h3>Shipping Address</h3>
        <div className="border-2 border-[#27489E] flex flex-col rounded-lg p-4 mb-6 md:w-7/12">
          <div className="m-4">
            <label htmlFor="address">Street address</label>
            <input
              type="address"
              id="address"
              className="w-full p-2 border border-gray-300 rounded-md bg-[#D6D2D2] shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex">
            <div className="m-4">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                className="w-full p-2 border border-gray-300 rounded-md bg-[#D6D2D2] shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="m-4">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                className="w-full p-2 border border-gray-300 rounded-md bg-[#D6D2D2] shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="m-4 flex flex-col">
            <label htmlFor="postal">Postal Code</label>
            <input
              type="number"
              id="postal"
              className="w-2/5 p-2 border border-gray-300 rounded-md bg-[#D6D2D2] shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <h3>Payment Method</h3>
        <div className="border-2 border-[#27489E] flex flex-col rounded-lg p-4 mb-6 md:w-7/12">
          <div className="flex">
            <div className="m-4">
              <input type="checkbox" className="mx-2" />
              <label htmlFor="checkbox">Cash on Delivery</label>
            </div>
            <div className="m-4">
              <input type="checkbox" className="mx-2" />
              <label htmlFor="checkbox">Credit or Debit</label>
            </div>
          </div>

          <div className="m-4">
            <label htmlFor="cardname">Card Holder Name</label>
            <input
              type="text"
              id="cardname"
              className="w-full p-2 border border-gray-300 rounded-md bg-[#D6D2D2] shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="m-4 flex flex-col">
            <label htmlFor="cardnumber">Phone Number</label>
            <input
              type="number"
              id="cardnumber"
              className="w-full p-2 border border-gray-300 rounded-md bg-[#D6D2D2] shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex">
            <div className="m-4">
              <label htmlFor="expiry">Exp Date</label>
              <input
                type="text"
                id="expiry"
                className="w-full p-2 border border-gray-300 rounded-md bg-[#D6D2D2] shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="m-4">
              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                id="cvc"
                className="w-full p-2 border border-gray-300 rounded-md bg-[#D6D2D2] shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <button className="bg-[#27489E] w-2/6 p-3 rounded-2xl my-20 text-[#F8F8F8] font-bold hover:bg-[#F8F8F8] hover:text-[#27489E] self-center">
          <Link to={"payment"}>Pay Now</Link>
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
