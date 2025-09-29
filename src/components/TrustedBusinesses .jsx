import React from 'react';

const TrustedBusinesses = () => {
    return (
        <div className="min-h-screen mb-4 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white  px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-6 md:p-10 lg:p-12">
                    <div className="flex-1  text-black rounded-xl p-4 md:p-12 relative overflow-hidden min-h-[22rem] md:min-h-[26rem] flex flex-col justify-between">
                        <i className="fas fa-quote-right text-black text-7xl md:text-8xl opacity-10 absolute top-6 right-6 animate-pulse"></i>
                        <p className="text-xl md:text-2xl text-center font-semibold leading-relaxed relative z-10">
                            "Genius Act helped us unlock global customers while cutting payment costs."
                        </p>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                        <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">BA</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-semibold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Business Name</div>
                                    <div className="text-black/80 text-sm">Global E-commerce Platform</div>
                                </div>
                            </div>
                            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-gray-500 ">
                                <span className="px-3 py-1 rounded-full bg-gray-100">100+ businesses</span>
                                <span className="px-3 py-1 rounded-full bg-gray-100">Global-ready</span>
                                <span className="px-3 py-1 rounded-full bg-gray-100">Low fees</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.15), transparent 40%)' }}></div>
                    </div>
                    {/* Content Section */}
                    <div className="flex-1">
                        <h2 className="text-2xl  md:text-3xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
                            Trusted by Forward-Thinking Businesses
                        </h2>
                        <p className="text-gray-600 mb-6 md:mb-8">Teams across industries choose Genius Act to reduce fees and boost conversions.</p>

                        <div className="space-y-4 md:space-y-5">
                            <div className="flex items-start p-4 rounded-xl border border-gray-100 bg-gray-50/60">
                                <div className="mr-4 mt-1">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                                        <i className="fas fa-check text-white text-xs"></i>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-lg md:text-xl">Freelancers</h3>
                                    <p className="text-gray-600 mt-1">No more 3% cuts on every payment.</p>
                                </div>
                            </div>

                            <div className="flex items-start p-4 rounded-xl border border-gray-100 bg-gray-50/60">
                                <div className="mr-4 mt-1">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                                        <i className="fas fa-check text-white text-xs"></i>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-lg md:text-xl">E-commerce Stores</h3>
                                    <p className="text-gray-600 mt-1">International buyers pay in seconds with USDC.</p>
                                </div>
                            </div>

                            <div className="flex items-start p-4 rounded-xl border border-gray-100 bg-gray-50/60">
                                <div className="mr-4 mt-1">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                                        <i className="fas fa-check text-white text-xs"></i>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-lg md:text-xl">SaaS Platforms</h3>
                                    <p className="text-gray-600 mt-1">Offer both fiat and crypto side by side.</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Callout Box */}

                </div>
            </div>
        </div>
    );
};

export default TrustedBusinesses;