// import React from 'react'
// import Cart from '../assets/cart-ss1.png'
// import Usdc from '../assets/usdc-banner3-1.png'
// import { Wallet, CreditCard, TrendingUp } from "lucide-react"
// import { Link } from 'react-router-dom'
// import TrustedBusinesses from '../components/TrustedBusinesses '
// import PaymentDemo from '../components/PaymentDemo'
// import CallToAction from '../components/CallToAction'
// import VideoModal from '../components/VideoModal'
// import { useState } from 'react'


// function Landing() {
// 	const [isOpen, setOpen] = useState(false);
// 	return (
// 		<>
// 			<div className="hero-section h-[90vh] flex  justify-center md:justify-end ">
// 				{/* Left Section */}
// 				<div className='   flex items-center justify-center  w-[90%] '>
// 					<div className="left w-[90%] lg:w-[45%]  flex flex-col justify-center h-full md:mr-4">
// 						<h1 className="text-[3rem] md:text-[4rem] 2xl:text-[6rem] font-bold text-gray-900 leading-tight">
// 							Save up to <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ">3%</span>  with  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ">Stablecoin Payments</span>
// 						</h1>
// 						<p className="text-lg text-gray-600 max-w-lg">
// 							Accept payments in USDC and crypto wallets directly on your website. No middlemen. No hidden fees. Just faster, cheaper, global payments.
// 						</p>
// 						<div className="flex justify-center lg:justify-start space-x-4">
// 							<div className="flex flex-col">

// 								<Link to='/cart' class="btn1 text-base md:text-xl  flex justify-center shadow-2xl items-center px-4 py-5"> <span>Enable Crypto Payments</span>
// 									<svg
// 										width="15px"
// 										height="10px"
// 										viewBox="0 0 13 10"
// 										className="relative ml-2 stroke-[#234567] stroke-2 transition-transform duration-300 ease-in-out -translate-x-1"
// 									>
// 										<path d="M1,5 L11,5"></path>
// 										<polyline points="8 1 12 5 8 9"></polyline>
// 									</svg>
// 								</Link>
// 								<div className="space-y-1  px-2  border-t border-gray-200 ">

// 									<Link
// 										to="/crypto-wallet-setup-guide" // Replace with your actual checkout link
// 										className="w-full flex items-center justify-center py-2 border border-purple-600  md:text-lg font-medium rounded-full shadow-md hover:text-white text-gray-600 hover:bg-[linear-gradient(90deg,#a1d9f7_0%,#c2acda_100%)] bg-white transition-all duration-300"
// 									>
// 										See setup guide
// 									</Link>
// 									<p className=" text-sm text-center text-gray-400">
// 										First time paying with crypto?
// 									</p>
// 								</div>

// 								{/* Secondary Button */}

// 							</div>

// 						</div>
// 					</div>

// 					{/* Middle Image Section */}
// 					<div className="hidden w-[25%] 2xl:w-[20%] relative   items-center  lg:flex h">
// 						<img
// 							src={Cart}
// 							alt=""
// 							className="h-[32rem] 2xl:h-[42rem]  object-fit rounded-4xl"
// 							style={{ boxShadow: "0px 0px 30px rgba(0,0,0,0.2)" }}
// 						/>
// 					</div>


// 					{/* Right Section */}
// 					<div className="hidden w-[25%] relative lg:flex justify-end items-center h-full pr-0 ">
// 						{/* Gradient Blob (only bottom-right area) */}
// 						{/* <div className="absolute w-[400px] h-[400px] bg-blue-500 bottom-[-10px] right-[-10px]"></div> */}

// 						{/* Image */}
// 						<img
// 							src={Usdc}
// 							alt="Hero Illustration"
// 							className="relative z-10 h-[50%] object-cover  rounded-2xl mr-0 opacity-50"
// 						/>

// 					</div>
// 				</div>


// 			</div>

// 			<div className="bg-gradient-to-b from-background to-muted py-8 px-6">
// 				<div className="max-w-6xl mx-auto">
// 					{/* Section Header */}
// 					<div className="text-center mb-20 flex flex-col items-center justify-center">
// 						<h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent tracking-tight">
// 							How It Works
// 						</h2>
// 						<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-2 mb-1"></div>
// 						<p className="text-xs text-orange-600 max-w-2xl mx-auto">
// 							Save up to 3.5% in fees
// 						</p>
// 						<div className='mt-2'>
// 							<Link onClick={() => setOpen(true)} className="cta relative px-5 py-3 font-ubuntu font-bold text-lg tracking-wide text-[#234567] flex items-center rounded-full transition-all duration-200 ease-in-out active:scale-95">
// 								<span className="relative z-10 text-[0.8rem] md:text-base">Watch video demo of crypto payment</span>
// 								<svg
// 									width="15px"
// 									height="10px"
// 									viewBox="0 0 13 10"
// 									className="relative ml-2 stroke-[#234567] stroke-2 transition-transform duration-300 ease-in-out -translate-x-1"
// 								>
// 									<path d="M1,5 L11,5"></path>
// 									<polyline points="8 1 12 5 8 9"></polyline>
// 								</svg>
// 							</Link>
// 						</div>
// 					</div>
// 					<VideoModal
// 						isOpen={isOpen}
// 						onClose={() => setOpen(false)}
// 					/>


// 					{/* Steps with arrows */}
// 					<div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6 xl:gap-12 relative">
// 						{/* Step 1 */}
// 						<div className="flex flex-col items-center justify-center text-center group relative">
// 							<div className="w-20 h-20 mb-5 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-200 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
// 								<Wallet className="w-10 h-10 text-purple-600" />
// 							</div>
// 							<span className="text-xs tracking-wide uppercase text-purple-600 font-medium bg-purple-100 px-3 py-1 rounded-full mb-3">
// 								Step 1
// 							</span>
// 							<h3 className="text-xl font-bold text-gray-900 mb-2">
// 								Connect Wallet
// 							</h3>
// 							<p className="text-gray-400 leading-relaxed max-w-sm">
// 								Easily link a <span className="font-semibold text-gray-900">USDC</span> or crypto wallet to your store.
// 							</p>
// 						</div>

// 						{/* Arrow 1 */}
// 						<div className="hidden md:flex items-center justify-center">
// 							<svg
// 								className="w-44 h-24 text-purple-400 drop-shadow-md animate-pulse"
// 								viewBox="0 0 200 100"
// 								fill="none"
// 								aria-hidden="true"
// 							>
// 								<path
// 									d="M10,65 C55,20 145,110 190,55"
// 									stroke="currentColor"
// 									strokeWidth="3"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								/>
// 								<polyline
// 									points="176,50 190,55 178,66"
// 									stroke="currentColor"
// 									strokeWidth="3"
// 									fill="none"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								/>
// 							</svg>
// 						</div>

// 						{/* Step 2 */}
// 						<div className="flex flex-col items-center text-center group relative">
// 							<div className="w-20 h-20 mb-5 rounded-2xl bg-gradient-to-br from-pink-100 to-orange-100 border border-pink-200 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
// 								<CreditCard className="w-10 h-10 text-pink-500" />
// 							</div>
// 							<span className="text-xs tracking-wide uppercase text-pink-600 font-medium bg-pink-100 px-3 py-1 rounded-full mb-3">
// 								Step 2
// 							</span>
// 							<h3 className="text-xl font-bold text-gray-900 mb-2">
// 								Checkout Options
// 							</h3>
// 							<p className="text-gray-400 leading-relaxed max-w-sm">
// 								Your checkout supports <span className="font-semibold text-gray-900">crypto + card + PayPal</span> side by side.
// 							</p>
// 						</div>

// 						{/* Arrow 2 */}
// 						<div className="hidden md:flex items-center justify-center">
// 							<svg
// 								className="w-44 h-24 text-pink-400 drop-shadow-md animate-pulse"
// 								viewBox="0 0 200 100"
// 								fill="none"
// 								aria-hidden="true"
// 							>
// 								<path
// 									d="M10,65 C55,20 145,110 190,55"
// 									stroke="currentColor"
// 									strokeWidth="3"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								/>
// 								<polyline
// 									points="176,50 190,55 178,66"
// 									stroke="currentColor"
// 									strokeWidth="3"
// 									fill="none"
// 									strokeLinecap="round"
// 									strokeLinejoin="round"
// 								/>
// 							</svg>
// 						</div>

// 						{/* Step 3 */}
// 						<div className="flex flex-col items-center text-center group relative">
// 							<div className="w-20 h-20 mb-5 rounded-2xl bg-gradient-to-br from-orange-100 to-yellow-100 border border-orange-200 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
// 								<TrendingUp className="w-10 h-10 text-orange-500" />
// 							</div>
// 							<span className="text-xs tracking-wide uppercase text-orange-600 font-medium bg-orange-100 px-3 py-1 rounded-full mb-3">
// 								Step 3
// 							</span>
// 							<h3 className="text-xl font-bold text-gray-900 mb-2">
// 								Save Fees
// 							</h3>
// 							<p className="text-gray-400 leading-relaxed max-w-sm">
// 								Receive stablecoins instantly, avoid credit card fees, and off-ramp to your bank when needed.
// 							</p>

// 						</div>

// 					</div>
// 				</div>
// 			</div >

// 			<div className="w-full h-42  flex items-center justify-center  bg-gradient-to-r from-gray-900 via-slate-700 to-black">
// 				<h2 className='text-xl md:text-4xl px-4 text-center font-extrabold text-white font-montserrat'>Tired of paying high transaction fees?</h2>
// 			</div>

// 			<section className="w-full bg-gradient-to-b from-white to-gray-50 flex items-center justify-center  ">
// 				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-14 items-center  p-8">

// 					{/* Right Art (2/5) - shown first on mobile */}
// 					<div className="md:col-span-2 order-1 md:order-2">
// 						<div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
// 							{/* Background Pattern */}
// 							<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 rounded-3xl"></div>
// 							<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

// 							<div className="relative px-4">
// 								<div className="text-center mb-8">
// 									<h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
// 										Fee Comparison Cost
// 									</h3>
// 								</div>

// 								<div className="flex items-end justify-center gap-8 h-64">
// 									{/* Genius Act */}
// 									<div className="flex flex-col items-center">
// 										<div className="relative">
// 											<div className="w-16 h-7 shadow-lg bg-green-800 transition-all duration-1000 ease-out relative overflow-hidden">
// 												<div className="absolute top-1 left-1/2 -translate-x-1/2 text-white font-bold text-xs">0.01%</div>
// 											</div>
// 										</div>
// 										<div className="mt-4 text-center">
// 											<span className="text-sm font-semibold text-gray-700">Genius Act</span>
// 										</div>
// 									</div>

// 									{/* Stripe */}
// 									<div className="flex flex-col items-center">
// 										<div className="relative">
// 											<div className="w-16 h-55 shadow-lg bg-blue-900 transition-all duration-1000 ease-out relative overflow-hidden">
// 												<div className="absolute top-4 left-1/2 -translate-x-1/2 text-white font-bold text-lg">2.9%</div>
// 											</div>
// 										</div>
// 										<div className="mt-4 text-center">
// 											<span className="text-sm font-semibold text-gray-700">Stripe</span>
// 										</div>
// 									</div>

// 									{/* PayPal */}
// 									<div className="flex flex-col items-center">
// 										<div className="relative">
// 											<div className="w-16 h-55 shadow-lg bg-blue-900 transition-all duration-1000 ease-out delay-200 relative overflow-hidden">
// 												<div className="absolute top-4 left-1/2 -translate-x-1/2 text-white font-bold text-lg">2.9%</div>
// 											</div>
// 										</div>
// 										<div className="mt-4 text-center">
// 											<span className="text-sm font-semibold text-gray-700">PayPal</span>
// 										</div>
// 									</div>

// 								</div>

// 								{/* Savings Indicator */}
// 								<div className="mt-5 text-center">
// 									<div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 border border-emerald-200 rounded-full px-4 py-2">
// 										<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
// 										<span className="text-sm font-semibold text-white">Save up to 99.7% on fees</span>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					{/* Left Content (3/5) */}
// 					<div className="md:col-span-3 space-y-6 order-2 md:order-1">
// 						<div className="flex items-start gap-5">
// 							<div className="w-1.5 md:w-2 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full self-stretch"></div>
// 							<div className="space-y-4">
// 								<h2 className="text-2xl md:text-5xl font-extrabold tracking-tight font-montserrat">
// 									Keep More of Your Money
// 								</h2>
// 								<p className="text-sm md:text-lg text-gray-600 leading-relaxed">
// 									Traditional payment processors charge{" "}
// 									<span className="font-semibold text-gray-900">2.9% + $0.30 per transaction</span>.
// 									With stablecoins on Solana, fees are less than{" "}
// 									<span className="font-semibold text-green-600">a cent per payment</span>.
// 								</p>
// 							</div>
// 						</div>
// 					</div>

// 				</div>
// 			</section>

// 			<PaymentDemo />
// 			<TrustedBusinesses />
// 			<CallToAction />





// 		</>
// 	)
// }

// export default Landing