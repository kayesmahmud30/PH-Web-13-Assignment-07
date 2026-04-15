import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center py-20">
      <div className="mb-8">
        <div className="max-w-[50%] mx-auto">
          <img
            src="https://i.ibb.co.com/1VyvRsS/986fdadf-8dc2-4a46-aea7-8f9002ebaed0.gif"
            alt=""
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold -mt-10 text-[#1B4332]">
          Oops...! Not Found!
        </h2>
      </div>

      <p className="max-w-md text-gray-500 mb-10 text-lg">
        This page is not exist that you're looking for.
      </p>

      <Link
        to="/"
        className="px-8 py-3 bg-[#2D6A4F] text-white rounded-full font-semibold hover:bg-[#1B4332] transition-colors shadow-sm"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
