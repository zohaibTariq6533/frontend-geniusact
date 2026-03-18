import React from "react";
import { Link, useLocation } from 'react-router-dom';
import WalletConnectionProvider from './WalletConnectionProvider';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

function Navbar() {
  const { pathname } = useLocation();
  const showWallet = pathname === '/cart';

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

        {/* Right Section: Wallet button only on /cart */}
       
          <div className="flex items-center justify-center gap-3">
          <Link to="/contact-form" className="bg-[#4b6bff] hover:bg-[#3d62ea] text-white text-sm sm:text-md px-4 sm:px-8 py-3.5 rounded-sm font-medium flex items-center gap-2 transition-all hover:scale-105 cursor-pointer">
                Get in Touch
                {/* <ChevronRight className="w-4 h-4" /> */}
              </Link>
            {showWallet && ( <div>
              <WalletConnectionProvider>
                <div className="flex justify-center">
                  <WalletMultiButton />
                </div>
              </WalletConnectionProvider>
            </div>
            )}
          </div>
        
      </header>
    </>
  );
}

export default Navbar;
