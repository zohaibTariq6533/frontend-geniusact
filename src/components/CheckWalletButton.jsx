import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";

function CheckWalletButton() {
  const { connected, publicKey } = useWallet();

  const handleClick = () => {
    if (connected) {
      alert(`✅ Wallet connected!\nAddress: ${publicKey.toBase58()}`);
    } else {
      alert("❌ Wallet not connected!");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-lg text-white ${
        connected ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
      }`}
    >
      {connected ? "Wallet Connected" : "Check Wallet"}
    </button>
  );
}

export default CheckWalletButton;
