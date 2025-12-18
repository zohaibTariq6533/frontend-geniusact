import React from "react";
import { Link } from 'react-router-dom';
import WalletConnectionProvider from './WalletConnectionProvider';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
function Navbar() {
  return (
    <>
      <header className="flex items-center sticky top-0 z-100 justify-between px-6 py-3 max-w-6xl mx-auto bg-white text-gray-800 rounded-b-2xl">
        {/* Left Section: Logo and Slogan */}
        <div className="flex flex-col items-start mt-3">
          <Link
            to="/"
            className=" text-xl md:text-3xl font-extrabold tracking-normal text-gray-900 "
          >
            Genius Act
          </Link>
          <p className="text-xs text-gray-400 mt-1 px-1">Future of Payments</p>
        </div>

        {/* Center Section: Main Title */}
        {/* <div className="flex-1 text-center hidden md:block">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
            Crypto Payments for Businesses
          </h1>
        </div> */}

        {/* Right Section: Contact Us Button */}
        <div className="flex items-center justify-center">
          <div>
            <WalletConnectionProvider>
              <div className="flex justify-center">
                <WalletMultiButton />
              </div>
            </WalletConnectionProvider>
          </div>
        </div>
      </header>

    </>
  );
}

export default Navbar;
