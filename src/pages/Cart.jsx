"use client";
import React, { useState, useMemo } from "react";
import PayPalCheckout from "../components/PayPalCheckout";
import { InfoIcon, ClockIcon } from "lucide-react";
import CardCheckout from "../components/CardCheckout";
import shorts from '../assets/shorts.webp';
import tank from '../assets/tank.webp';
import logos from '../assets/logos.png'
import { Link } from 'react-router-dom';
import SendUSDC from "../components/SendSol";
import WalletConnectionProvider from '../components/WalletConnectionProvider';

import {
  CreditCard,
  ShoppingCartIcon as Paypal,
  Bitcoin,
  Trash2,
} from "lucide-react";

function noti() {
  const alrt = alert('Under Development');
}

function CartItem({ product, onQuantityChange, onRemoveItem }) {
  return (
    <div className="relative flex items-start gap-4 p-5 border border-gray-100 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-28 h-28 object-cover rounded-lg shadow-sm"
      />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        {/* Product Details */}
        <div className="flex flex-col col-span-1 md:col-span-1">
          <h3 className="font-semibold text-lg text-gray-900">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600">Color: {product.color}</p>
        </div>
        {/* Item Price, Quantity, and Total */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between col-span-1 md:col-span-2">
          <div className="flex flex-col items-start md:items-center md:w-1/3">
            <span className="text-sm text-gray-500 hidden md:block">
              Item Price
            </span>
            <span className="font-medium text-gray-800 text-base">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <div className="flex flex-col items-start md:items-center md:w-1/3">
            <label
              htmlFor={`quantity-${product.id}`}
              className="text-sm text-gray-500 hidden md:block"
            >
              Quantity
            </label>
            <select
              id={`quantity-${product.id}`}
              value={product.quantity}
              onChange={(e) =>
                onQuantityChange(product.id, Number(e.target.value))
              }
              className="border border-gray-300 rounded-md p-2 text-sm focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
              aria-label={`Select quantity for ${product.name}`}
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-start md:items-center md:w-1/3">
            <span className="text-sm text-gray-500 hidden md:block">
              Item Total
            </span>
            <span className="font-semibold text-gray-900 text-base">
              ${(product.price * product.quantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => onRemoveItem(product.id)}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-600 transition-colors duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label={`Remove ${product.name} from cart`}
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Tank Top | High Quality",
      color: "Purple",
      price: 22.0,
      imageUrl: tank,
      quantity: 1,
    },
    {
      id: 2,
      name: "Shorts | Summer Collection",
      color: "Beige",
      price: 20.0,
      imageUrl: shorts,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const totalItems = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);
  const newsubtotal = subtotal.toFixed(2);
  const subtTotalDiscounted = newsubtotal - ((newsubtotal / 100) * 2);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
            My Cart ({totalItems} Item{totalItems !== 1 ? "s" : ""})
          </h1>
          {/* Product Cards */}
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              onQuantityChange={handleQuantityChange}
              onRemoveItem={handleRemoveItem}
            />
          ))}
        </div>
        {/* Right Column: Order Summary */}
        <div className="lg:col-span-1 h-fit ">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Total Items</span>
                <span className="font-semibold text-gray-900">
                  {totalItems}
                </span>
              </div>
              <div className="pt-2 border-t border-gray-100 flex justify-between text-xl font-bold text-gray-900">
                <span>Estimated Total</span>
                <span>${newsubtotal}</span>
              </div>
              <div className=" border-t border-gray-100 flex justify-between text-md  text-gray-700">
                <span>Pay with USDC(2% off):</span>
                <span>${subtTotalDiscounted}</span>
              </div>
              {/* <button
                className="w-full mt-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl transition-all duration-300 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center gap-3 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-2 transform hover:-translate-y-1"
                aria-label="Proceed to Crypto Checkout"
              >
                <Bitcoin className="h-5 w-5" />
                <span >Crypto Checkout</span>
              </button> */}
              <WalletConnectionProvider>
                <SendUSDC subtotal={subtotal} newsubtotal={subtTotalDiscounted} />
              </WalletConnectionProvider>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-2 space-y-2">
            <h4 className="text-gray-700 text-sm">Or pay with</h4>
            <div className="flex gap-4">
              {/* Card Payment */}
              {/* <button
                className="px-8 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl 
             shadow-lg transition-colors duration-300 flex items-center gap-3 focus:outline-none 
             focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 hover:from-blue-700 hover:to-indigo-800"
              >
                <CreditCard className="h-5 w-5" />
                Card Pay
              </button> */}
              <CardCheckout subtotal={subtotal} totalItems={totalItems} />

              {/* PayPal Payment */}
              <PayPalCheckout subtotal={subtotal} />
            </div>
            {/* <div id="paypal-container" ></div> */}
            <div className="flex flex-col justify-center items-center mt-2 opacity-79">
              <p className="font-semibold">Powered By</p>
              <div className="flex space-x-3 mt-1 ">
                <i className="fa-brands fa-stripe text-[28px]"></i>
                <i className="fa-brands fa-paypal text-[28px]"></i>
                <i className="fa-brands fa-btc text-[28px]"></i>
                <i className="fa-brands fa-expeditedssl text-[28px]"></i>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
