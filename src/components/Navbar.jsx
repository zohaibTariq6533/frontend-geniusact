import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header className="flex h-24 w-full items-center justify-between px-8 bg-white text-gray-800 border-b border-gray-100 shadow-md">
        {/* Left Section: Logo and Slogan */}
        <div className="flex flex-col items-start mt-3">
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-normal text-gray-900 "
          >
            Genius Act
          </Link>
          <p className="text-xs text-gray-400 mt-1 px-1">Future of Payments</p>
        </div>

        {/* Center Section: Main Title */}
        <div className="flex-1 text-center hidden md:block">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
            Crypto Payments for Businesses
          </h1>
        </div>

        {/* Right Section: Contact Us Button */}
        <div className="flex items-center">
          <Link
            to="contact-us"
            className="text-sm font-medium text-gray-700 px-4 py-2 rounded-full border border-gray-200 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300"
          >
            Contact us
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
