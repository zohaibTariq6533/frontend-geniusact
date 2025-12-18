import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import handPhone from '../assets/hand-phone-removebg-preview.png';
import dotedAnimation from '../assets/videos/doted_animation.mp4';
import {
  ChevronRight,
  Check,
  ArrowRight,
  Globe,
  Shield,
  Zap,
  CreditCard,
  Wallet,
  ShoppingCart,
  Building,
  Users,
  BarChart3,
  PieChart,
  DollarSign,
  Smartphone,
  Lock,
  Clock,
  Sparkles,
  TrendingUp,
  Award,
  Play
} from 'lucide-react';

/**
 * WaveAnimation Component for the hero section
 */
const WaveAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    const gap = 20;
    const waveSpeed = 0.02;
    const waveHeight = 15;
    const waveFrequency = 0.025;
    const bottomPadding = 80;

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      if (!canvas) return;
      particles = [];

      const waveAreaHeight = canvas.height * 0.3;
      const waveStartY = canvas.height - waveAreaHeight - bottomPadding;

      const startX = -gap * 5;
      const startY = waveStartY;

      const totalCols = Math.ceil(canvas.width / gap) + 10;
      const totalRows = Math.ceil(waveAreaHeight / gap);

      for (let ix = 0; ix < totalCols; ix++) {
        for (let iy = 0; iy < totalRows; iy++) {
          particles.push({
            x: startX + ix * gap,
            y: startY + iy * gap,
            baseX: startX + ix * gap,
            baseY: startY + iy * gap,
            ix,
            iy,
          });
        }
      }
    };

    let time = 0;

    const render = () => {
      if (!canvas || !ctx) return;

      const waveAreaHeight = canvas.height * 0.3;
      const waveStartY = canvas.height - waveAreaHeight - bottomPadding;
      ctx.clearRect(0, waveStartY - 20, canvas.width, waveAreaHeight + 40);

      time += waveSpeed;

      particles.forEach((p) => {
        const wave1 = Math.sin((p.ix * waveFrequency) + (time * 1.8)) * waveHeight;
        const wave2 = Math.sin((p.ix * waveFrequency * 0.8) + (time * 2.5)) * (waveHeight * 0.6);
        const rowFactor = 1 - (p.iy / 20);
        const yOffset = wave1 * rowFactor;
        const xOffset = Math.sin((p.iy * waveFrequency * 0.3) + (time * 2)) * 5 * rowFactor;

        const currentX = p.baseX + xOffset;
        const currentY = p.baseY + yOffset;

        if (currentX >= -20 && currentX <= canvas.width + 20) {
          const opacity = 0.3 + (Math.sin((p.ix * 0.05) + time) * 0.1);
          ctx.beginPath();
          ctx.fillStyle = `rgba(79, 117, 255, ${Math.max(0.1, opacity)})`;
          const radius = 1.8;
          ctx.arc(currentX, currentY, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

const stepsData = [
  {
    id: 1,
    icon: Wallet,
    stepTxt: 'Step 1',
    title: 'Connect Wallet',
    description: 'Easily link a USDC or crypto wallet to your store.',
  },
  {
    id: 2,
    icon: CreditCard,
    stepTxt: 'Step 2',
    title: 'Checkout Options',
    description: 'Your checkout supports crypto + card + PayPal side by side.',
  },
  {
    id: 3,
    icon: TrendingUp,
    stepTxt: 'Step 3',
    title: 'Save Fees',
    description: 'Receive stablecoins instantly, avoid credit card fees, and off-ramp to your bank when needed.',
  },
];

// Reusable Card Component
const StepCard = ({ icon: Icon, stepTxt, title, description }) => (
  <div className="relative bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex-1 z-10 border border-gray-100 flex flex-col items-start text-left h-full">
    {/* Blue Icon Background */}
    <div className="w-14 h-14 bg-[#4b6bff] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
    </div>

    {/* Step Pill */}
    <span className="inline-block bg-blue-100 text-[#4b6bff] text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
      {stepTxt}
    </span>

    {/* Content */}
    <h3 className="text-2xl font-medium text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-[15px]">{description}</p>
  </div>
);

// Component for the connecting arrows (only visible on desktop)
const ConnectingArrows = () => (
  // Increased z-index to z-10 to ensure visibility
  <div className="absolute top-[100px] left-0 w-full h-20 hidden md:block pointer-events-none z-30">
    <svg className="w-full h-full text-[#4b6bff]" fill="none" viewBox="0 0 1000 80" preserveAspectRatio="none">
      <defs>
        {/* Reduced marker dimensions for a finer arrowhead */}
        <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="" refY="3" orient="auto" className="text-[#4b6bff]">
          <path d="M0,0 L6,3 L0,6" fill="currentColor" />
        </marker>
      </defs>
      {/* Path 1: shorten overall run */}
      <path
        d="M 280,40 C 300,20 340,20 350,40"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 6"
        strokeLinecap="round"
        markerEnd="url(#arrowhead)"
      />
      {/* Path 2: shorten overall run */}
      <path
        d="M 630,30 C 630,60 700,60 700,35"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 6"
        strokeLinecap="round"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  </div>
);

/**
 * Reusable Product Feature Row Component
 * Handles sticky positioning and independent video playback
 */
const ProductFeatureRow = ({
  title,
  titleSuffix,
  description,
  features,
  videoSrc,
  zIndex = 0
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          if (videoRef.current) videoRef.current.play().catch(e => console.log('Autoplay prevented', e));
        } else {
          setIsInView(false);
          if (videoRef.current) videoRef.current.pause();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`max-w-6xl mx-auto sticky top-24 bg-white py-10`}
      style={{ zIndex }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Content */}
        <div
          className={`space-y-6 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
        >
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            {title} {titleSuffix && <pre className='text-xs inline-block ml-2 align-middle'>{titleSuffix}</pre>}
          </h2>
          <p className="text-gray-600 text-lg">
            {description}
          </p>

          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-700">
                  {feature.bold && <strong className="font-medium text-gray-900">{feature.bold}</strong>} {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Video */}
        <div
          className={`relative transition-all duration-700 transform ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
        >
          <div className="relative overflow-hidden bg-[#ffffff]">
            <video
              ref={videoRef}
              className="w-full h-auto"
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Fees Comparison Component
 * Visual bar chart comparing transaction fees
 */
const FeesComparison = () => {
  return (
    <section className="bg-[#4b6bff] py-14 px-4 text-center text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-lg mb-6">
            Save up to 99.7% on fees
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">
            Tired of Paying High Transaction Fees?
          </h2>
          <p className="text-indigo-100 max-w-2xl text-sm md:text-base opacity-90">
            Traditional payment processors charge 2.9% + $0.30 per transaction. With stablecoins on Solana, fees are less than a cent per payment.
          </p>
        </div>

        {/* Chart Container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-end h-60 md:h-76">
          {/* Genius Act */}
          <div className="flex flex-col items-center justify-end h-full">
            <h3 className="text-2xl font-bold mb-1">Genius Act</h3>
            <span className="text-xs text-indigo-200 mb-6">Future of Payments</span>

            {/* Bar */}
            <div className="w-full bg-white relative group transition-all duration-500" style={{ height: '60px' }}>
              <div className="absolute top-4 left-0 w-full text-center">
                <span className="text-xl font-bold text-black">0.01%</span>
              </div>
            </div>
          </div>

          {/* Stripe */}
          <div className="flex flex-col items-center justify-end h-full">
            <h3 className="text-5xl font-bold mb-8">stripe</h3>

            {/* Bar */}
            <div className="w-full h-full max-h-[200px] flex flex-col overflow-hidden relative">
              {/* Top Label */}
              <div className="absolute top-4 left-0 w-full text-center z-10">
                <span className="text-xl font-bold text-black/80">2.9%</span>
              </div>
              {/* Top Dark Part */}
              <div className="bg-[#a3b8ff] h-1/3 w-full"></div>
              {/* Mid Light Part */}
              <div className="bg-[#edf0ff] h-1/3 w-full border-t-2 border-dashed border-[#a3b8ff]"></div>
              {/* Bottom White Part */}
              <div className="bg-white h-1/3 w-full border-t-2 border-dashed border-[#d9d9d9]"></div>
            </div>
          </div>

          {/* PayPal */}
          <div className="flex flex-col items-center justify-end h-full">
            <h3 className="text-4xl font-bold mb-8 italic">PayPal</h3>

            {/* Bar */}
            {/* Bar */}
            <div className="w-full h-full max-h-[200px] flex flex-col overflow-hidden relative">
              {/* Top Label */}
              <div className="absolute top-4 left-0 w-full text-center z-10">
                <span className="text-xl font-bold text-black/80">2.9%</span>
              </div>
              {/* Top Dark Part */}
              <div className="bg-[#a3b8ff] h-1/3 w-full"></div>
              {/* Mid Light Part */}
              <div className="bg-[#edf0ff] h-1/3 w-full border-t-2 border-dashed border-[#a3b8ff]"></div>
              {/* Bottom White Part */}
              <div className="bg-white h-1/3 w-full border-t-2 border-dashed border-[#d9d9d9]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * FooterWaveAnimation Component
 * Adapted for the footer with lighter/gray colors
 */


const FooterSection = () => {
  return (
    <footer className="relative bg-[#f8fafc] pt-24 pb-10 overflow-hidden">
      {/* Full Width Video Background Container */}
      <div className="absolute top-0 left-0 w-full h-[600px] z-0 pointer-events-none">
        <video
          className="w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={dotedAnimation} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-white/60 z-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">

        {/* CTA Content */}
        <div className="mb-24 flex flex-col items-center relative py-10">

          <div className="relative z-10">
            <span className="inline-block bg-gray-200/60 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 font-semibold tracking-wide mb-6">
              Genius Act
            </span>

            <h2 className="text-2xl md:text-4xl text-slate-900 mb-4 tracking-tight">
              Ready to Accept Crypto Payments?
            </h2>

            <p className="text-slate-500 max-w-xl mx-auto mb-8 text-xs md:text-sm">
              Join the next wave of businesses using stablecoins to cut fees and expand globally.
            </p>

            <div className="flex justify-center">
              <button className="bg-[#4b6bff] hover:bg-[#3d62ea] text-white text-md px-6 py-2 rounded-sm font-medium flex items-center gap-2 transition-all hover:scale-105 cursor-pointer">
                Get Started with Genius Act
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-10 border-t border-slate-200 relative bg-white/70 backdrop-blur-sm rounded-t-3xl -mx-4 px-4 sm:mx-0 sm:px-0 sm:bg-transparent sm:backdrop-blur-none">
          {/* Center Logo */}
          <div className="flex flex-col items-center mb-8">
            <h3 className="text-3xl font-extrabold text-slate-900">Genius Act</h3>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Future of Payments</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <div className="mb-4 md:mb-0">
              © Genius Act 2025
            </div>

            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
/**
 * Main Page Component
 */
const GeniusActPage = () => {

  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          // Play video when section is visible
          if (videoRef.current) {
            videoRef.current.play();
          }
        } else {
          setIsInView(false);
          // Optional: Pause video when section is not visible
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      {
        threshold: 0.25, // Trigger when 25% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <div className="w-full bg-white font-sans text-slate-900">

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={dotedAnimation} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-white/90 z-0 pointer-events-none"></div>

        <div className="relative z-10">
          {/* Navigation */}
          {/* <nav className="flex items-center sticky top-0 justify-between px-6 py-6 max-w-7xl mx-auto">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">Genius Act</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">Future of Payments</span>
            </div>

            <button className="bg-[#5b40b8] hover:bg-[#4a3399] text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-lg shadow-indigo-200">
              <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              Connect
            </button>
          </nav> */}

          {/* Hero Content */}
          <main className="flex flex-col items-center justify-center pt-16 pb-32 px-4 text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium uppercase tracking-wide">
              Crypto Payments
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-black mb-10 leading-[1.1]">
              Stablecoin for <br /> Businesses
            </h1>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-4">
              <button className="bg-[#4b6bff] hover:bg-[#3d62ea] text-white text-lg px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-transform hover:scale-105 shadow-xl shadow-blue-100">
                Enable Crypto Payments
                <ChevronRight className="w-5 h-5" />
              </button>

              <a href="#" className="text-gray-500 font-medium hover:text-gray-800 transition-colors">
                First time paying with crypto?
              </a>
            </div>

            {/* Feature List */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2 ">
                <Check className="w-4 h-4 text-gray-400" /> No Setup Fees
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gray-400" /> Global payments
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gray-400" /> 1% transaction fees
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-20 flex items-center justify-center gap-6 opacity-80">
              <div className="flex items-center gap-1 text-slate-700 font-bold text-xl italic">
                <FontAwesomeIcon icon={faPaypal} />
                <span className="text-[#3a3c3d]">Pay</span><span className="text-[#787a7c]">Pal</span>
              </div>

              <div className="bg-[#4b4b4b] text-white px-3 py-1 rounded text-xs flex items-center gap-2 font-medium">
                <div className="w-3 h-2 border border-white rounded-sm"></div>
                Card Pay
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* ===== WHAT WE SAVE SECTION ===== */}
      <section className="pb-20 px-40 bg-transparent -mt-2 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Text */}
            <div className="lg:w-1/2 max-w-3xl ">
              <div className="mb-4 inline-flex items-center gap-2 text-xs  text-[##444444] uppercase rounded-full px-2 py-1 bg-gray-200 font-poppins">
                {/* <Sparkles className="w-4 h-4" /> */}
                What We Save
              </div>

              <h2 className="text-2xl md:text-4xl font-medium text-black mb-6 leading-tight">
                Financial Infrastructure That <br /> Feels Effortless.
              </h2>

              <p className="text-md text-gray-600 mb-8">
                Payment systems today are fragmented, slow, and expensive. <br />
                Genius Act bridges the gap between traditional finance and <br /> AI-powered automation,
                helping businesses operate with speed, <br /> stability, and total transparency.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Reduce operational friction</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Automate treasury workflows</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Access stable, borderless payments</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Build financial trust at scale</span>
                </div>
              </div>
            </div>

            {/* Right Column - Stats Card */}
            {/* Right Column - Stats Card */}
            <div className="lg:w-1/2 relative flex justify-center items-center">
              {/* Gray Background Card */}
              <div className="absolute bg-[#f5f5f5] rounded-xl w-[90%] h-[135%] -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-sm"></div>

              {/* Phone Image */}
              <img
                src={handPhone}
                alt="Stats"
                // Increased max-w and added margin top negative to pull it up significantly
                className="w-auto h-auto scale-125 drop-shadow-2xl relative z-10 -mt-24"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="bg-[#f7f7f7] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">

          {/* --- Header Section --- */}
          <div className="flex flex-col items-center text-center mb-20 space-y-6 ">
            {/* Top Pill */}
            <span className="inline-block bg-gray-200/80 rounded-full px-5 py-1.5 text-sm font-semibold text-gray-600 tracking-wide">
              Process
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
              How It Works
            </h2>

            {/* Discount Pill */}
            <span className="inline-block bg-red-100 rounded-full px-5 py-1.5 text-sm font-medium text-red-500 tracking-wide">
              Save up to 3.5% in fees!
            </span>
          </div>

          {/* --- Steps Cards Section --- */}
          <div className="relative mb-10">
            {/* Arrows Background Layer */}
            <ConnectingArrows />

            {/* Cards Container: Increased z-index to z-20 to stay above the arrows */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-20">
              {stepsData.map((step) => (
                <StepCard key={step.id} {...step} />
              ))}
            </div>
          </div>

          {/* --- Video Placeholder Section --- */}
          <div className="relative max-w-6xl mx-auto">
            {/* Browser Mockup Container */}
            <div className="bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-800/50">

              {/* Video Content Area */}
              <div className="relative group cursor-pointer bg-gray-900">

                <video src="src\assets\videos\how_it_works.mp4" alt="Video preview of checkout process"
                  className="w-full h-auto object-cover opacity-60 hover:opacity-80 transition-all duration-300" controls ></video>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Product modules */}
      <section className="bg-white">
        <div ref={sectionRef} className="py-16 px-4 md:px-8 lg:px-16 bg-[#ffffff]">
          {/* --- Header Section --- */}
          <div className="flex flex-col items-center text-center mb-5 space-y-2 ">
            {/* Top Pill */}
            <span className="inline-block bg-gray-200/80 rounded-full px-5 font-poppins py-1.5 text-sm font-semibold text-gray-600 tracking-wide">
              See It in Action
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight font-poppins">
              Product Modules
            </h2>

          </div>

          {/* Crypto */}
          <ProductFeatureRow
            zIndex={0}
            title="Crypto Checkout"
            description="Accept USDC and other major stablecoins with instant, low fee settlement."
            videoSrc="src/assets/videos/crypto.mp4"
            features={[
              { bold: "Instant Settlement", text: "For USDC and top stablecoins" },
              { bold: "Low processing fees", text: "compared to cards" },
              { bold: "Multi-Chain support", text: "for maximum flexibility" },
              { bold: "Built-in", text: "fraud prevention & compliance layers" },
              { bold: "Familiar checkout flow", text: "that requires no crypto expertise" }
            ]}
          />

          {/* Cards */}
          <ProductFeatureRow
            zIndex={10}
            title="Card Pay"
            titleSuffix="(Stripe)"
            description="Secure credit and debit card processing for global customers."
            videoSrc="src/assets/videos/payment_stripe.mp4"
            features={[
              { bold: "Support all major credit & debit cards", text: "(Visa, Mastercard, Amex & more)" },
              { bold: "Instant authorization", text: "with intelligent fraud screening" },
              { bold: "PCI-compliant encryption", text: "to protect sensitive data" },
              { bold: "Chargeback protection", text: "& dispute management" },
              { bold: "Optimized for global payments", text: "with multi-currency support" }
            ]}
          />

          {/* Paypal */}
          <ProductFeatureRow
            zIndex={20}
            title="Pay with PayPal"
            description="Instant payments using your customer's trusted PayPal accounts."
            videoSrc="src/assets/videos/paypal.mp4"
            features={[
              { bold: "Instant payment confirmation", text: "from verified PayPal accounts" },
              { bold: "One-tap login", text: "with no card entry needed" },
              { bold: "Global reach", text: "with millions of active users" },
              { bold: "Encrypted, secure processing", text: "backed by PayPal's fraud protection" },
              { bold: "Seamless mobile and desktop", text: "experience" }
            ]}
          />
        </div>
      </section>

      {/* ===== FEES COMPARISON SECTION ===== */}
      <FeesComparison />



      {/* ===== TESTIMONIAL SECTION ===== */}
      < section className="py-20 px-4 bg-white" >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-block bg-gray-100 rounded-full px-5 py-2 text-sm font-semibold text-gray-600 tracking-wide font-poppins">
              Testimonial
            </span>

            <h2 className="text-2xl md:text-4xl font-medium text-black mt-6 mb-4 font-poppins">
              Trusted by Forward–Thinking Businesses
            </h2>

            <p className="text-md font-poppins text-gray-500 max-w-lg mx-auto leading-relaxed">
              Teams across industries choose Genius Act to reduce fees and boost conversions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-stretch h-full">
            {/* Left Column: Testimonial Card */}
            <div className="bg-white border border-[#4b6bff] border-t-4 rounded-[1.5rem] p-4 md:p-6 relative flex flex-col justify-between h-full min-h-[250px]">
              {/* Pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                <div className="bg-[#eef2ff] text-[#4b6bff] px-5 py-2 rounded-full text-xs font-bold tracking-wide font-poppins">100+ businesses</div>
                <div className="bg-[#eef2ff] text-[#4b6bff] px-5 py-2 rounded-full text-xs font-bold tracking-wide font-poppins">Global-ready</div>
                <div className="bg-[#eef2ff] text-[#4b6bff] px-5 py-2 rounded-full text-xs font-bold tracking-wide font-poppins">Low fees</div>
              </div>

              {/* Quote */}
              <div className="mt-auto">
                <p className="text-xl md:text-2xl font-medium text-black mb-10 leading-relaxed font-poppins">
                  "Genius Act helped us unlock global customers while cutting payment costs."
                </p>
                <div className="text-right">
                  <div className="text-[#4b6bff] font-semibold text-sm font-poppins">Business Name</div>
                  <div className="text-gray-400 text-xs font-poppins">Global E-commerce Platform</div>
                </div>
              </div>
            </div>

            {/* Right Column: Use Cases */}
            <div className="flex flex-col gap-6 justify-center">

              {/* Freelancers */}
              <div className="flex flex-col items-start gap-4 p-4 bg-[#eef2ff] border border-gray-200 rounded-[1.5rem] hover:bg-blue-50 transition-colors">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 bg-[#2d5bff] rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black mb-1 font-poppins">Freelancers</h4>
                  <p className="text-gray-500 text-sm font-poppins">No more 3% cuts on every payment.</p>
                </div>
              </div>

              {/* E-commerce */}
              <div className="flex flex-col items-start gap-4 p-4 bg-[#eef2ff] border border-gray-200 rounded-[1.5rem] hover:bg-blue-50 transition-colors">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 bg-[#2d5bff] rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black mb-1 font-poppins">E-commerce Stores</h4>
                  <p className="text-gray-500 text-sm font-poppins">International buyers pay in seconds with USDC.</p>
                </div>
              </div>

              {/* SaaS */}
              <div className="flex flex-col items-start gap-4 p-4 bg-[#eef2ff] border border-gray-200 rounded-[1.5rem] hover:bg-blue-50 transition-colors">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 bg-[#2d5bff] rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black mb-1 font-poppins">SaaS Platforms</h4>
                  <p className="text-gray-500 text-sm font-poppins">Offer both fiat and crypto side by side.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section >

      <FooterSection />
    </div >
  );
};

const Dashboard = () => {
  return <GeniusActPage />;
};

export default Dashboard;