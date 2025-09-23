import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import Usdc from "../assets/usdc-nonbg.png";

function CryptoThankYou() {
  const location = useLocation();
  const { amount, success, order } = location.state || {};
  const [searchParams] = useSearchParams();
  const signature = searchParams.get("signature");
  const successParam = searchParams.get("success1") === "false";

  // 🔹 State for network fee
  const [networkFee, setNetworkFee] = useState(null);

  useEffect(() => {
    if (!signature) return;

    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    const fetchFee = async () => {
      try {
        // ✅ Wait until transaction is confirmed
        await connection.confirmTransaction(signature, "confirmed");

        let attempts = 0;
        let feeFetched = false;

        // ✅ Try up to 5 times (polling every 2s)
        while (attempts < 5 && !feeFetched) {
          const txDetails = await connection.getTransaction(signature, {
            commitment: "confirmed",
            maxSupportedTransactionVersion: 0,
          });

          if (txDetails?.meta?.fee) {
            const feeLamports = txDetails.meta.fee;
            setNetworkFee(feeLamports / 1e9); // lamports → SOL
            feeFetched = true;
            break;
          }

          attempts++;
          await new Promise((r) => setTimeout(r, 2000)); // wait 2 sec before retry
        }

        // If still not found, show 0 (but this is rare)
        if (!feeFetched) {
          setNetworkFee(0);
        }
      } catch (err) {
        console.error("Error fetching network fee:", err);
        setNetworkFee(0);
      }
    };

    fetchFee();
  }, [signature]);

  function exploreSignature(sig) {
    // 🔹 Open Solana Explorer to view transaction details
    const url = `https://explorer.solana.com/tx/${sig}?cluster=devnet`;
    window.open(url, "_blank");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center border-b pb-4 mb-6">
          <h1 className="text-xl font-semibold text-gray-800">
            {successParam ? "Payment Complete" : "Payment Uncomplete"}
          </h1>
        </div>

        {/* Paid Info */}
        <div className="text-center mb-6 flex flex-col items-center">
          <img src={Usdc} alt="" className="w-24" />
          <p className="mt-1 text-2xl font-bold text-gray-900">
            {success ? "Paid" : "UnPaid"} {amount || "0.0"} USD
          </p>
        </div>

        {/* Details */}
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Order Code</span>
            <span className="truncate max-w-[200px] text-gray-600">
              {order || "00000000"}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{success ? amount : "0.0"}</span>
          </div>
          <div className="flex justify-between">
            <span>Network fee</span>
            <span>
              {networkFee !== null
                ? `${networkFee} SOL`
                : success
                ? "Fetching..."
                : "0.0"}
            </span>
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
          {success && (
            <button
              onClick={() => exploreSignature(signature)}
              className="block w-full text-center bg-gray-800 hover:bg-black text-white py-3 rounded-full font-medium"
            >
              View on Block Explorer
            </button>
          )}
          <Link
            to="/"
            rel="noopener noreferrer"
            className="block w-full text-center hover:bg-gray-800 text-gray-800 py-3 rounded-full font-medium transition-all border border-2 border-gray-800 hover:text-white"
          >
            Home
          </Link>
        </div>

        {/* Footer */}
        {/* <p className="mt-6 text-center text-xs text-gray-500">
          Need help? Contact{" "}
          <a href="mailto:support@example.com" className="underline">
            support@example.com
          </a>
        </p> */}
      </div>
    </div>
  );
}

export default CryptoThankYou;
