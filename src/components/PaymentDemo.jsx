import React, { useState, useEffect } from 'react';
import { Wallet, CreditCard, TrendingUp } from "lucide-react";
import Cart from '../assets/cart-ss.png';
import StripeSS from '../assets/StripeSS.png';
import PaypalSS from '../assets/paypalSS.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PaymentDemo = () => {
  const [activeMethod, setActiveMethod] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const paymentMethods = [
    {
      id: 1,
      title: "Crypto Checkout",
      subtitle: "for stablecoins",
      description: "Accept USDC, DAI, and other major stablecoins",
      icon: Wallet,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    },
    {
      id: 2,
      title: "Card Pay",
      subtitle: "(Stripe)",
      description: "Secure credit and debit card processing",
      icon: CreditCard,
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200"
    },
    {
      id: 3,
      title: "Pay with PayPal",
      subtitle: "Instant payments",
      description: "Let customers pay with their PayPal account",
      icon: TrendingUp,
      gradient: "from-orange-500 to-yellow-500",
      bgGradient: "from-orange-50 to-yellow-50",
      borderColor: "border-orange-200"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-4">
            See It In Action
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Payment Methods */}
          <div className="space-y-6">
            {paymentMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={method.id}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                    activeMethod === index 
                      ? `border-purple-300 bg-gradient-to-r ${method.bgGradient} shadow-lg` 
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onClick={() => setActiveMethod(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{method.subtitle}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{method.description}</p>
                    </div>
                    {activeMethod === index && (
                      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Features Badge */}
            <div className={`mt-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <a className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-2xl animate-bounce">⚡</span>
                <span className="font-semibold">Secure. Instant. Flexible.</span>
              </a>
            </div>
          </div>

          {/* Cart Screenshot */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="h-96 md:h-[30rem] bg-white flex items-center justify-center">
                <img
                  src={activeMethod === 0 ? Cart : activeMethod === 1 ? StripeSS : PaypalSS}
                  alt={activeMethod === 0 ? 'Crypto Checkout - Cart Screenshot' : activeMethod === 1 ? 'Stripe Checkout Screenshot' : 'PayPal Checkout Screenshot'}
                  className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Animated overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute top-8 right-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>

              {/* PayPal Transaction Overlay */}
              {activeMethod === 2 && (
                <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-[300px] bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-gray-800">Payment Completed</div>
                      <div className="text-xs text-gray-500">PayPal • TXN-9F2A1C • $49.00</div>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Success
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Progress indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {paymentMethods.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeMethod === index 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setActiveMethod(index)}
                  aria-label={`View ${paymentMethods[index].title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentDemo;