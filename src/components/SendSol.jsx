import React, { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction, PublicKey } from "@solana/web3.js";
import {
  getOrCreateAssociatedTokenAccount,
  createTransferInstruction,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { Bitcoin } from "lucide-react";

const SendUSDC = ({ subtotal,newsubtotal }) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const receiver = "J11tBfQo3swcdHMPAbMf7ZSVoXQgQCxM1quBxNkNM1ps";
  const amount = subtotal / 100;

  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const walletCheck = async () => {
    if (!publicKey) {
      setStatus("Wallet not connected! (If connected please refresh page)");
      alert(status)
      return;
    }
    else {
      setShowPopup(true);
    }
  }

  const cancelPayment = () => {
    setShowPopup(false);
    alert(" Transaction failed!")
  }

  const handleSend = async () => {


    try {
      const USDC_MINT = new PublicKey(
        "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU" // devnet
      );
      const toPubkey = new PublicKey(receiver);

      const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        publicKey,
        USDC_MINT,
        publicKey
      );

      const toTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        publicKey,
        USDC_MINT,
        toPubkey
      );

      const amountInUSDC = Math.round(parseFloat(amount) * 1e6);

      const transaction = new Transaction().add(
        createTransferInstruction(
          fromTokenAccount.address,
          toTokenAccount.address,
          publicKey,
          amountInUSDC,
          [],
          TOKEN_PROGRAM_ID
        )
      );

      const signature = await sendTransaction(transaction, connection);

      alert('✅ USDC Transaction sent! Signature:' + signature);
      console.log(signature);
      setShowPopup(false);
    } catch (err) {
      console.error(err);
      cancelPayment();
    }
  };

  return (
    <>
      <button
        onClick={walletCheck}
        className="w-full mt-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl transition-all duration-300 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center gap-3 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-2 transform hover:-translate-y-1"
      >
        <Bitcoin className="h-5 w-5" />
        <span>Crypto Checkout ${newsubtotal}</span>
      </button>

      {/* {status && <p className="mt-3 text-sm">{status}</p>} */}
      {/* {status && alert(status)} */}

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 shadow-2xl w-96 transform transition-all scale-100 hover:scale-[1.02]">
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
              Confirm Transaction
            </h3>

            <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">

              <p className="text-sm text-gray-700 flex justify-between">
                <strong>Amount:</strong>{" "}
                <span className="text-purple-600 font-semibold">{amount} USDC</span>
              </p>

            </div>
            <div className="mb-4 flex justify-center">
              <p className="text-xs text-gray-400">
                For devnet, amount is divided by 100
              </p>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={cancelPayment}
                className="px-4 py-2 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all shadow-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="px-5 py-2 rounded-xl text-white font-semibold shadow-md bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all transform hover:-translate-y-0.5"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>

      )}
    </>
  );
};

export default SendUSDC;
