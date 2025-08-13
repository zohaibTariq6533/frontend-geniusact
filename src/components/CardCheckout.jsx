import React, { useState } from "react";
import { CreditCard } from "lucide-react";
import axios from "axios";

function CardCheckout({ subtotal }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://keep-empowering.com/ecommerce_api/api/stripe",
        {
          amount: subtotal * 100, // Send subtotal as the payment amount
        }
      );
      window.location.href = response.data.url; // Redirect to Stripe Checkout
    } catch (err) {
      setError("Failed to initiate checkout. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl 
                 shadow-lg transition-colors duration-300 flex items-center gap-3 focus:outline-none 
                 focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 hover:from-blue-700 hover:to-indigo-800"
      >
        <CreditCard className="h-5 w-5" />
        {loading ? "Processing..." : "Card Pay"}
      </button>
      {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
    </div>
  );
}

export default CardCheckout;

// import React, { useState } from "react";
// import { CreditCard, X } from "lucide-react";

// function CardCheckout({subtotal,totalItems}) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [form, setForm] = useState({
//     number: "",
//     exp_month: "",
//     exp_year: "",
//     cvc: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handlePay = () => {
//     console.log("Form Data:", form);
//     // Here you can call your Laravel API with fetch/axios
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {/* Button */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="px-8 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl
//                  shadow-lg transition-colors duration-300 flex items-center gap-3 focus:outline-none
//                  focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 hover:from-blue-700 hover:to-indigo-800"
//       >
//         <CreditCard className="h-5 w-5" />
//         Card Pay
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//             {/* Close button */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <div className="mb-4 flex flex-col items-center justify-center text-center">
//               <h2 className="text-xl font-semibold w-100">Pay with your card </h2>
//               <h4 className="text-xs text-gray-500">You can use your Debit or Credit Card</h4>
//             </div>

//             <div className="flex justify-between">
//               <h2 className="text-s text-gray-700">Items</h2>
//               <h2 className="text-s text-gray-700">{totalItems}</h2>
//             </div>
//             <div className="flex justify-between mb-3">
//               <h2 className="text-s text-gray-700">Total Price</h2>
//               <h2 className="text-s text-gray-700">${subtotal}</h2>
//             </div>

//             <input
//               type="text"
//               name="number"
//               placeholder="Card Number"
//               value={form.number}
//               onChange={handleChange}
//               className="w-full border rounded-md p-2 mb-3"
//             />

//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 name="exp_month"
//                 placeholder="MM"
//                 value={form.exp_month}
//                 onChange={handleChange}
//                 className="w-1/3 border rounded-md p-2 mb-3"
//               />
//               <input
//                 type="text"
//                 name="exp_year"
//                 placeholder="YYYY"
//                 value={form.exp_year}
//                 onChange={handleChange}
//                 className="w-1/3 border rounded-md p-2 mb-3"
//               />
//               <input
//                 type="text"
//                 name="cvc"
//                 placeholder="CVC"
//                 value={form.cvc}
//                 onChange={handleChange}
//                 className="w-1/3 border rounded-md p-2 mb-3"
//               />
//             </div>

//             <button
//               onClick={handlePay}
//               className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-indigo-800"
//             >
//               Pay
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default CardCheckout;
