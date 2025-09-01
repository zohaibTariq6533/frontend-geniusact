import React, { useState } from "react";
import WalletConnectionProvider from '../components/WalletConnectionProvider';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import SendUSDC from "../components/SendSol";
function Contact() {
  
  return (
    <>
      {/* <WalletConnectionProvider>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <WalletMultiButton />
      </div>
    </WalletConnectionProvider> */}

    <WalletConnectionProvider>
      <SendUSDC />
    </WalletConnectionProvider>
    </>
  );
}

export default Contact;
