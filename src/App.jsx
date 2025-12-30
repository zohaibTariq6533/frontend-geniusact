import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Dashboard loads eagerly since it's the home page and contains LCP element
import Dashboard from "./pages/Dashboard";
// Lazy load other routes to reduce initial bundle size and main-thread work
// Add error handling for failed imports
const Cart = lazy(() => import("./pages/Cart").catch(() => ({ default: () => <div>Failed to load page. Please refresh.</div> })));
const Contact = lazy(() => import("./pages/Contact").catch(() => ({ default: () => <div>Failed to load page. Please refresh.</div> })));
const Success = lazy(() => import("./components/Success").catch(() => ({ default: () => <div>Failed to load page. Please refresh.</div> })));
const Cancel = lazy(() => import("./components/Cancel").catch(() => ({ default: () => <div>Failed to load page. Please refresh.</div> })));
const ThankYou = lazy(() => import("./components/cryptoThankYou").catch(() => ({ default: () => <div>Failed to load page. Please refresh.</div> })));
const CryptoWalletSetup = lazy(() => import("./components/CryptoWalletSetup").catch(() => ({ default: () => <div>Failed to load page. Please refresh.</div> })));

// Load Font Awesome CSS asynchronously
import('@fortawesome/fontawesome-free/css/all.min.css').catch(() => {});

// Buffer is already initialized in main.jsx before this module loads

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
);

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={
            <Suspense fallback={<LoadingFallback />}>
              <Cart />
            </Suspense>
          } />
          <Route path="/contact-us" element={
            <Suspense fallback={<LoadingFallback />}>
              <Contact />
            </Suspense>
          } />
          <Route path="/success" element={
            <Suspense fallback={<LoadingFallback />}>
              <Success />
            </Suspense>
          } />
          <Route path="/cancel" element={
            <Suspense fallback={<LoadingFallback />}>
              <Cancel />
            </Suspense>
          } />
          <Route path="/thank-you" element={
            <Suspense fallback={<LoadingFallback />}>
              <ThankYou />
            </Suspense>
          } />
          <Route path="crypto-wallet-setup-guide" element={
            <Suspense fallback={<LoadingFallback />}>
              <CryptoWalletSetup />
            </Suspense>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
