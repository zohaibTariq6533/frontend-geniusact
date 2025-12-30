import React, { lazy, Suspense, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

// Lazy load Solana wallet components to reduce initial bundle size and main-thread work
const WalletConnectionProvider = lazy(() => import('./WalletConnectionProvider'));

// Create a wrapper component for WalletMultiButton since it's a named export
const LazyWalletButton = lazy(() => 
  import('@solana/wallet-adapter-react-ui').then(module => ({
    default: () => {
      const { WalletMultiButton } = module;
      return (
        <div className="flex justify-center">
          <WalletMultiButton />
        </div>
      );
    }
  }))
);

// Simple loading placeholder for wallet button
const WalletButtonPlaceholder = () => (
  <div className="h-10 w-32 bg-gray-200 animate-pulse rounded-lg"></div>
);

function Navbar() {
  const [shouldLoadWallet, setShouldLoadWallet] = useState(false);

  // Defer wallet loading until after initial render to reduce main-thread work
  useEffect(() => {
    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        setShouldLoadWallet(true);
      }, { timeout: 2000 });
    } else {
      setTimeout(() => {
        setShouldLoadWallet(true);
      }, 100);
    }
  }, []);

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

        {/* Right Section: Wallet Button - Lazy loaded and deferred */}
        <div className="flex items-center justify-center">
          {shouldLoadWallet ? (
            <Suspense fallback={<WalletButtonPlaceholder />}>
              <WalletConnectionProvider>
                <Suspense fallback={<WalletButtonPlaceholder />}>
                  <LazyWalletButton />
                </Suspense>
              </WalletConnectionProvider>
            </Suspense>
          ) : (
            <WalletButtonPlaceholder />
          )}
        </div>
      </header>

    </>
  );
}

export default Navbar;
