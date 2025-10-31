import React from 'react';
import ImageCarousel from './ImageCarousal';

import Phantomextension from '../assets/phantom.png'
import Phantomsetup from '../assets/phantom2.png'
import Phantomchrome from '../assets/phantom3.png'
import Phantomdashboard from '../assets/phantom4.png'
import Phantomsol from '../assets/phantom5.png'
import Phantomswap from '../assets/phantom6.png'
import Phantomsend from '../assets/phantom7.png'
import { Link } from 'react-router-dom';
// Data for the setup steps (UPDATED WITH IMAGE ARRAYS)
const setupSteps = [
  {
    step: 1,
    title: 'Install Phantom Wallet',
    icon: '🚀',
    description: (
      <>
        Go to the <strong  className="  cursor-pointer" onClick={()=>chromewebstore()}>Phantom Wallet Chrome Extension</strong> and click Add to Chrome. After installation, click the Phantom icon in your browser extension.
      </>
    ),
    images: [
      Phantomextension,
      Phantomchrome
    ],
  },
  {
    step: 2,
    title: 'Create or Log In to Your Wallet',
    icon: '🔑',
    description: (
      <>
        Choose <strong>Continue with Email</strong> for easy setup, or <strong>Create a new wallet</strong> with a seed phrase if you prefer full self-custody. Once done, you'll see your new wallet dashboard.
      </>
    ),
    images: [
      Phantomsetup,
      Phantomdashboard
    ],
  },
  {
    step: 3,
    title: 'Add a Small Amount of SOL (for network fees)',
    icon: '⚡',
    description: (
      <>
        <strong >SOL</strong> is the Solana network token used for transaction fees. You can:
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>Buy directly inside Phantom using <strong className="font-semibold">MoonPay, Ramp, or Coinbase Pay</strong>, or</li>
          <li>Receive SOL from another wallet or exchange (like Coinbase or Binance).</li>
        </ul>
      </>
    ),
    images: [
      Phantomsol
    ],
  },
  {
    step: 4,
    title: 'Swap Some SOL for USDC',
    icon: '🔄',
    description: (
      <>
        Inside Phantom, click <strong >Swap → Select USDC (Solana)</strong>. This stablecoin is pegged 1:1 to the US dollar. <em className="text-red-500 font-semibold">Keep at least a few cents of SOL for gas fees.</em>
      </>
    ),
    images: [
      Phantomswap
    ],
  },
  {
    step: 5,
    title: 'Return to Our Checkout',
    icon: '✅',
    description: (
      <>
        When you click <strong >Crypto Checkout</strong>, Phantom will automatically pop up to confirm payment. <strong>Approve the transaction</strong> — and that’s it! Your purchase will be confirmed on the Solana blockchain.
      </>
    ),
    images: [
      Phantomsend
    ],
  },
];
function chromewebstore() {
    // 🔹 Open Solana Explorer to view transaction details
    const url = `https://chromewebstore.google.com/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa`;
    window.open(url, "_blank");
  }
const CryptoWalletGuidePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      

      <main className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Crypto Wallet Setup Guide
            </h2>
            <p className=" text-3xs mt-2 text-gray-400">
              A simple guide to setup your phantom wallet.
            </p>
          </div>

          <div className="space-y-8"> {/* Increased space-y for better separation with images */}
            {setupSteps.map((item) => (
              <div
                key={item.step}
                className="relative p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-start"> {/* Flex container for step number and text content */}
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 mr-6">
                    <span className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl ring-4 ring-indigo-200">
                      {item.step}
                    </span>
                  </div>
                  
                  {/* Content (text description) */}
                  <div className="min-w-0 flex-1">
                    
                    <h3 className="mt-1 text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <div className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </div>

                {/* Image Carousel for the step */}
                <div className="mt-6 mx-auto max-w-md"> 
        <ImageCarousel images={item.images} />
      </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 pt-6 border-t border-gray-200">
            <p className="text-lg text-gray-600">
              Ready to get started? Find your product and proceed to the checkout.
            </p>
            <Link
              to="/cart" // Replace with your actual checkout link
              className="mt-4 inline-flex items-center px-8 py-3 border border-purple-600  text-lg font-medium rounded-full shadow-md text-white hover:text-black bg-purple-600 hover:bg-white transition duration-150"
            >
              Try Demo
            </Link>
          </div>

        </div>
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Genuis Act. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default CryptoWalletGuidePage;