import React from "react";
import RiseLoader from "react-spinners/RiseLoader";

const Payment = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black bg-opacity-20">
      <RiseLoader color="#22374A" loading={true} size={20} />
    </div>
  );
};

export default Payment;
