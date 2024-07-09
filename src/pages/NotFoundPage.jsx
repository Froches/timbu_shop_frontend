import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <h1 className="text-center font-bold text-red-700 text-2xl m-4">
        The page you're looking for does not exist. Are you perhaps, lost?{" "}
        <br /> <br />
        <Link to={"/"} className="underline">
          Click here to back home
        </Link>
      </h1>
    </div>
  );
}

export default NotFoundPage
