import React, { useMemo } from "react";

import { Link, useLocation, useSearchParams } from "react-router-dom";
import Usdc from '../assets/usdc-nonbg.png';

function CryptoThankYou() {
    const location = useLocation();
    const { amount, success,order } = location.state || {};
    const [searchParams] = useSearchParams();
    const signature = searchParams.get("signature");
    

    function exploreSignature(sig) {
        const url =`https://explorer.solana.com/tx/${signature}?cluster=devnet`;
        window.open(url, "_blank");
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8">
                {/* Header */}
                <div className="text-center border-b pb-4 mb-6">
                    <h1 className="text-xl font-semibold text-gray-800">Payment Complete</h1>
                </div>

                {/* Paid Info */}
                <div className="text-center mb-6 flex flex-col items-center">
                    <img src={Usdc} alt="" className="w-24" />
                    <p className="mt-1 text-2xl font-bold text-gray-900">
                        Paid {amount || "0.0"} USD
                    </p>
                </div>

                {/* Details */}
                <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex justify-between">
                        <span>Order Code</span>
                    <span className="truncate max-w-[200px] text-gray-600">{order || "00000000"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{amount || "0.0"}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Network fee</span>
                        <span>$0.02 • 0.02 USDC</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Date</span>
                        <span>{new Date().toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Status</span>
                        {success ? (
                            <span className="text-green-600 font-medium">
                                <span className="text-green-500">●</span> Success
                            </span>
                        ) : (
                            <span className="text-red-600 font-medium">
                                <span className="text-red-500">●</span> Failed
                            </span>
                        )}
                    </div>


                </div>

                {/* Button */}
                <div className="mt-6 space-y-3">
                    <button
                        onClick={() => exploreSignature(signature)}
                        className="block w-full text-center bg-gray-800 hover:bg-black text-white py-3 rounded-full font-medium"
                    >
                        View on Block Explorer
                    </button>
                    <Link
                        to='/'
                        rel="noopener noreferrer"
                        className="block w-full text-center  hover:bg-gray-800 text-gray-800 py-3 rounded-full font-medium transition-all border border-2 border-gray-800 hover:text-white"
                    >
                        Home
                    </Link>
                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-xs text-gray-500">
                    Need help? Contact <a href="mailto:support@example.com" className="underline">support@example.com</a>
                </p>
            </div>
        </div>
    );
}

export default CryptoThankYou;
