import React from 'react'
import Cart from '../assets/cart-ss1.png'
import Usdc from '../assets/usdc-banner.png'
import { Wallet, CreditCard, TrendingUp } from "lucide-react"
import { Link } from 'react-router-dom'
import TrustedBusinesses from '../components/TrustedBusinesses '
import PaymentDemo from '../components/PaymentDemo'
import CallToAction from '../components/CallToAction'

function Landing() {
	return (
		<>
			<div className="hero-section h-[90vh] flex items-center justify-center	px-8">
				{/* Left Section */}
				<div className="left w-2/6 flex flex-col justify-center space-y-6 ">
					<h1 className="text-5xl font-bold text-gray-900 leading-tight">
						Save up to <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-5xl">3%</span> on every transaction with  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-5xl">Stablecoin Payments</span>
					</h1>
					<p className="text-lg text-gray-600 max-w-lg">
						Accept payments in USDC and crypto wallets directly on your website. No middlemen. No hidden fees. Just faster, cheaper, global payments.
					</p>
					<div className="flex space-x-4">
						<div className="flex gap-4">
							{/* Fancy CTA Button */}
							<Link to='/cart' className="cta relative px-5 py-3 font-ubuntu font-bold text-lg tracking-wide text-[#234567] flex items-center rounded-full transition-all duration-200 ease-in-out active:scale-95">
								<span className="relative z-10">Enable Crypto Payments Today</span>
								<svg
									width="15px"
									height="10px"
									viewBox="0 0 13 10"
									className="relative ml-2 stroke-[#234567] stroke-2 transition-transform duration-300 ease-in-out -translate-x-1"
								>
									<path d="M1,5 L11,5"></path>
									<polyline points="8 1 12 5 8 9"></polyline>
								</svg>
							</Link>

							{/* Secondary Button */}

						</div>

					</div>
				</div>

				{/* Middle Image Section */}
				<div className="middle w-2/6 relative flex justify-end items-center ">
					<img
						src={Cart}
						alt=""
						className="h-[75vh] w-2xs  object-fit rounded-2xl shadow-2xl"
					/>
				</div>


				{/* Right Section */}
				<div className="right w-1/6 relative flex justify-end items-center h-full pr-0 ">
					{/* Gradient Blob (only bottom-right area) */}
					{/* <div className="absolute w-[400px] h-[400px] bg-blue-500 bottom-[-10px] right-[-10px]"></div> */}

					{/* Image */}
					<img
						src={Usdc}
						alt="Hero Illustration"
						className="relative z-10 h-[70vh] w-auto object-none rounded-2xl mr-0 opacity-50"
					/>

				</div>

			</div>

			{/* How it works */}
			<div className="bg-gradient-to-b from-background to-muted py-24 px-6">
				<div className="max-w-6xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-20">
						<h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent tracking-tight">
							How It Works
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4 mb-2"></div>
						<p className="text-lg text-orange-600 max-w-2xl mx-auto">
							Save up to 3.5% in fees
						</p>
					</div>

					{/* Steps with arrows */}
					<div className="flex flex-col md:flex-row items-start justify-between gap-12 relative">
						{/* Step 1 */}
						<div className="flex flex-col items-center text-center group relative">
							<div className="w-20 h-20 mb-5 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-200 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
								<Wallet className="w-10 h-10 text-purple-600" />
							</div>
							<span className="text-xs tracking-wide uppercase text-purple-600 font-medium bg-purple-100 px-3 py-1 rounded-full mb-3">
								Step 1
							</span>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								Connect Wallet
							</h3>
							<p className="text-gray-600 leading-relaxed max-w-xs">
								Easily link a <span className="font-semibold text-gray-900">USDC</span> or crypto wallet to your store.
							</p>
						</div>

						{/* Arrow 1 */}
						<div className="hidden md:flex items-center justify-center">
							<svg
								className="w-44 h-24 text-purple-400 drop-shadow-md animate-pulse"
								viewBox="0 0 200 100"
								fill="none"
								aria-hidden="true"
							>
								<path
									d="M10,65 C55,20 145,110 190,55"
									stroke="currentColor"
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<polyline
									points="176,50 190,55 178,66"
									stroke="currentColor"
									strokeWidth="3"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>

						{/* Step 2 */}
						<div className="flex flex-col items-center text-center group relative">
							<div className="w-20 h-20 mb-5 rounded-2xl bg-gradient-to-br from-pink-100 to-orange-100 border border-pink-200 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
								<CreditCard className="w-10 h-10 text-pink-500" />
							</div>
							<span className="text-xs tracking-wide uppercase text-pink-600 font-medium bg-pink-100 px-3 py-1 rounded-full mb-3">
								Step 2
							</span>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								Checkout Options
							</h3>
							<p className="text-gray-600 leading-relaxed max-w-xs">
								Your checkout supports <span className="font-semibold text-gray-900">crypto + card + PayPal</span> side by side.
							</p>
						</div>

						{/* Arrow 2 */}
						<div className="hidden md:flex items-center justify-center">
							<svg
								className="w-44 h-24 text-pink-400 drop-shadow-md animate-pulse"
								viewBox="0 0 200 100"
								fill="none"
								aria-hidden="true"
							>
								<path
									d="M10,65 C55,20 145,110 190,55"
									stroke="currentColor"
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<polyline
									points="176,50 190,55 178,66"
									stroke="currentColor"
									strokeWidth="3"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>

						{/* Step 3 */}
						<div className="flex flex-col items-center text-center group relative">
							<div className="w-20 h-20 mb-5 rounded-2xl bg-gradient-to-br from-orange-100 to-yellow-100 border border-orange-200 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
								<TrendingUp className="w-10 h-10 text-orange-500" />
							</div>
							<span className="text-xs tracking-wide uppercase text-orange-600 font-medium bg-orange-100 px-3 py-1 rounded-full mb-3">
								Step 3
							</span>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								Save Fees
							</h3>
							<p className="text-gray-600 leading-relaxed max-w-xs">
								Receive stablecoins instantly, avoid credit card fees, and off-ramp to your bank when needed.
							</p>

						</div>
					</div>
				</div>
			</div>

			<div className="w-full h-50  py-20 flex items-center justify-center  bg-gradient-to-r from-gray-900 via-slate-700 to-black">
				<h2 className='text-4xl font-extrabold text-white font-montserrat'>Tired of paying high transaction fees?</h2>
			</div>

			<section className="w-full bg-gradient-to-b from-white to-gray-50 flex items-center justify-center h-[75vh]">
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
					{/* Left Content (3/5) */}
					<div className="md:col-span-3 space-y-6">
						<div className="flex items-start gap-5">
							<div className="w-1.5 md:w-2 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full self-stretch"></div>
							<div className="space-y-4">
								<h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-montserrat">
									Keep More of Your Money
								</h2>
								<p className="text-lg text-gray-600 leading-relaxed">
									Traditional payment processors charge{" "}
									<span className="font-semibold text-gray-900">2.9% + $0.30 per transaction</span>.
									With stablecoins on Solana, fees are less than{" "}
									<span className="font-semibold text-green-600">a cent per payment</span>.
								</p>
							</div>
						</div>
					</div>

					{/* Right Art (2/5) */}
					<div className="lg:col-span-2">
						<div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 relative overflow-hidden">
							{/* Background Pattern */}
							<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30 rounded-3xl"></div>
							<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

							<div className="relative">
								<div className="text-center mb-8">
									<h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparen mb-2">Fee Comparison Cost</h3>
								</div>

								<div className="flex items-end justify-center gap-8 h-64">
									<div className="flex flex-col items-center">
										<div className="relative">
											<div className="w-16 h-7  shadow-lg bg-green-800 transition-all duration-1000 ease-out delay-500 relative overflow-hidden">
												{/* <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20"></div> */}
												<div className="absolute top-1 left-1/2 -translate-x-1/2 text-white font-bold text-xs">0.01%</div>
												{/* Sparkle effect */}
												{/* <div className="absolute top-0 right-1 w-1 h-1 bg-white rounded-full animate-pulse"></div> */}
											</div>
										</div>
										<div className="mt-4 text-center">

											<span className="text-sm font-semibold text-gray-700">Genius Act</span>
										</div>
									</div>
									{/* Stripe */}
									<div className="flex flex-col items-center">
										<div className="relative">
											<div className="w-16 h-55 shadow-lg bg-blue-900 transition-all duration-1000 ease-out relative overflow-hidden">
												{/* <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20"></div> */}
												<div className="absolute top-4 left-1/2 -translate-x-1/2 text-white font-bold text-lg">2.9%</div>
											</div>
										</div>
										<div className="mt-4 text-center">

											<span className="text-sm font-semibold text-gray-700">Stripe</span>
										</div>
									</div>

									{/* PayPal */}
									<div className="flex flex-col items-center">
										<div className="relative">
											<div className="w-16 h-55  shadow-lg bg-blue-900 transition-all duration-1000 ease-out delay-200 relative overflow-hidden">
												{/* <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20"></div> */}
												<div className="absolute top-4 left-1/2 -translate-x-1/2 text-white font-bold text-lg">2.9%</div>
											</div>
										</div>
										<div className="mt-4 text-center">

											<span className="text-sm font-semibold text-gray-700">PayPal</span>
										</div>
									</div>

									{/* Genius Act */}

								</div>

								{/* Savings Indicator */}
								<div className="mt-5 text-center">
									<div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 border border-emerald-200 rounded-full px-4 py-2">
										<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
										<span className="text-sm font-semibold text-white">Save up to 99.7% on fees</span>
									</div>
								</div>
							</div>
						</div>
					</div>


				</div>
			</section>
			{/* Demo Section */}
			<PaymentDemo />
			<TrustedBusinesses />
			<CallToAction />




		</>
	)
}

export default Landing