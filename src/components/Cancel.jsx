import React from 'react';

const Cancel = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Payment Canceled</h2>
        <p className="text-lg">Your payment was canceled. Please try again.</p>
        <a href="/" className="text-blue-600 hover:underline mt-4 block">Return to Home</a>
      </div>
    </div>
  );
};

export default Cancel;