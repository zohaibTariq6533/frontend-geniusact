import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import handPhone from '../assets/handPhone.png';
import dotedAnimation from '../assets/videos/doted_animation.mp4';
import cryptoVideo from '../assets/videos/crypto.mp4';
import howItWorksVideo from '../assets/videos/how_it_works.mp4';
import paymentStripeVideo from '../assets/videos/payment_stripe.mp4';
import paypalVideo from '../assets/videos/paypal.mp4';
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
import { Link } from 'react-router-dom'

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
  <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex-1 z-10 border border-gray-100 flex flex-col items-center text-center md:items-start md:text-left h-full">
  {/* Blue Icon Background - Centered on mobile, left on desktop */}
  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#4b6bff] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-blue-500/30 md:ml-0 mx-auto md:mx-0">
    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" strokeWidth={2} />
  </div>

  {/* Step Pill - Centered on mobile, left on desktop */}
  <span className="inline-block bg-blue-100 text-[#4b6bff] text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-5 tracking-wide md:ml-0 mx-auto md:mx-0">
    {stepTxt}
  </span>

  {/* Content */}
  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-2 sm:mb-3 text-center md:text-left">{title}</h3>
  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-[15px] text-center md:text-left">{description}</p>
</div>
);

// Component for the connecting arrows (only visible on desktop)
const ConnectingArrows = () => (
  // Increased z-index to z-10 to ensure visibility
  <div className="absolute top-[80px] sm:top-[100px] left-0 w-full h-16 sm:h-20 hidden md:block pointer-events-none z-30">
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
  className={`max-w-6xl mx-auto sticky top-16 sm:top-20 md:top-24 bg-white py-6 sm:py-8 md:py-10 overflow-hidden`}
  style={{ zIndex }}
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center pt-10">
    {/* Left Column - Content */}
    <div
      className={`space-y-4 sm:space-y-6 px-6 sm:px-4 md:px-0 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 text-center md:text-left">
        {title} {titleSuffix && <pre className='text-xs inline-block ml-2 align-middle'>{titleSuffix}</pre>}
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center md:text-left">
        {description}
      </p>

      <div className="space-y-3 sm:space-y-4 md:space-y-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2 md:gap-2">
            <Check className="w-4 h-4 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm sm:text-base text-left">
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
      <div className="relative overflow-hidden bg-[#ffffff] rounded-lg mx-2 sm:mx-0">
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
    <section className="bg-[#4b6bff] py-8 sm:py-10 md:py-14 px-4 text-center text-white">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="flex flex-col items-center mb-6 sm:mb-8">
      <div className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1 rounded-full text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
        Save up to 99.7% on fees
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 px-4">
        Tired of Paying High Transaction Fees?
      </h2>
      <p className="text-indigo-100 max-w-2xl text-xs sm:text-sm md:text-base opacity-90">
        Traditional payment processors charge 2.9% + $0.30 per transaction. With stablecoins on Solana, fees are less than a cent per payment.
      </p>
    </div>

    {/* Chart Container - Horizontal layout for all screens */}
    <div className="max-w-5xl mx-auto">
      {/* Labels Row */}
      <div className="flex justify-between items-end mb-3 sm:mb-4 md:mb-5">
        <div className="flex-1 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Genius Act</h3>
          {/* <p className="text-xs sm:text-xs md:text-sm text-indigo-200">Future of Payments</p> */}
        </div>
        <div className="flex-1 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">stripe</h3>
        </div>
        <div className="flex-1 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold italic">PayPal</h3>
        </div>
      </div>

      {/* Bars Row - Horizontal comparison */}
      <div className="flex items-end justify-between h-36 sm:h-44 md:h-52 lg:h-60 gap-3 sm:gap-4 md:gap-6">
        {/* Genius Act Bar */}
        <div className="flex-1 flex flex-col items-center justify-end h-full">
          <div className="w-full bg-white rounded-t-md flex items-center justify-center relative h-[25%] sm:h-[30%] min-h-[45px] sm:min-h-[55px] md:min-h-[65px]">
            <span className="text-sm sm:text-base md:text-lg font-bold text-black">0.01%</span>
          </div>
        </div>

        {/* Stripe Bar */}
        <div className="flex-1 flex flex-col items-center justify-end h-full">
          <div className="w-full h-full flex flex-col overflow-hidden rounded-t-md relative">
            <span className="text-sm sm:text-base md:text-lg font-bold text-black/80 absolute top-3 sm:top-4 w-full text-center">
              2.9%
            </span>
            <div className="bg-[#a3b8ff] h-1/3 w-full"></div>
            <div className="bg-[#edf0ff] h-1/3 w-full border-t border-dashed border-[#a3b8ff]"></div>
            <div className="bg-white h-1/3 w-full border-t border-dashed border-gray-300"></div>
          </div>
        </div>

        {/* PayPal Bar */}
        <div className="flex-1 flex flex-col items-center justify-end h-full">
          <div className="w-full h-full flex flex-col overflow-hidden rounded-t-md relative">
            <span className="text-sm sm:text-base md:text-lg font-bold text-black/80 absolute top-3 sm:top-4 w-full text-center">
              2.9%
            </span>
            <div className="bg-[#a3b8ff] h-1/3 w-full"></div>
            <div className="bg-[#edf0ff] h-1/3 w-full border-t border-dashed border-[#a3b8ff]"></div>
            <div className="bg-white h-1/3 w-full border-t border-dashed border-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Percentage Labels at Bottom */}
      <div className="flex justify-between mt-3 sm:mt-5 text-xs sm:text-sm md:text-base text-indigo-200">
        <div className="flex-1 text-center">0.01% fee</div>
        <div className="flex-1 text-center">2.9% + $0.30 fee</div>
        <div className="flex-1 text-center">2.9% + $0.30 fee</div>
      </div>
    </div>

    {/* Fee Savings Comparison Card */}
    {/* <div className="mt-8 sm:mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold">You Save</h4>
          <p className="text-indigo-100 text-sm sm:text-base md:text-lg">With Genius Act vs Traditional Processors</p>
        </div>
        <div className="bg-white text-[#4b6bff] px-5 sm:px-7 py-3 sm:py-4 rounded-lg font-bold text-2xl sm:text-3xl md:text-4xl">
          99.7%
        </div>
      </div>
    </div> */}
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
    <footer className="relative bg-[#f8fafc] pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 overflow-hidden">
      {/* Full Width Video Background Container */}
      <div className="absolute top-0 left-0 w-full h-[400px] sm:h-[500px] md:h-[600px] z-0 pointer-events-none">
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
        <div className="mb-16 sm:mb-20 md:mb-24 flex flex-col items-center relative py-2 sm:py-4 md:py-6">

          <div className="relative z-10 w-[90%] sm:w-full max-w-2xl mx-auto text-center">
            <span className="inline-block bg-gray-200/60 rounded-full px-3 py-1 text-xs sm:text-sm font-semibold text-gray-700 font-semibold tracking-wide mb-4 sm:mb-6">
              Genius Act
            </span>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-900 mb-3 sm:mb-4 tracking-tight">
              Ready to Accept Crypto Payments?
            </h2>

            <p className="text-slate-500 max-w-xl mx-auto mb-6 sm:mb-8 text-xs sm:text-sm md:text-base">
              Join the next wave of businesses using stablecoins to cut fees and expand globally.
            </p>

            <div className="flex justify-center">
              <Link to="/cart" className="bg-[#4b6bff] hover:bg-[#3d62ea] text-white text-sm sm:text-md px-4 sm:px-6 py-2 rounded-sm font-medium flex items-center gap-2 transition-all hover:scale-105 cursor-pointer">
                Get Started with Genius Act
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 md:pt-10 border-t border-slate-200 relative bg-white/70 backdrop-blur-sm rounded-t-2xl sm:rounded-t-3xl -mx-4 px-4 sm:mx-0 sm:px-0 sm:bg-transparent sm:backdrop-blur-none">
          {/* Center Logo */}
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Genius Act</h3>
            <span className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-1">Future of Payments</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-slate-500">
            <div className="mb-3 sm:mb-4 md:mb-0">
              © Genius Act 2025
            </div>

            <div className="flex gap-4 sm:gap-6 md:gap-8">
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
      <section className="relative min-h-[100vh] sm:min-h-screen bg-white overflow-hidden">
        {/* Video Background - Positioned lower on mobile */}
        <div className="absolute top-0 left-0 w-full h-[85%] sm:h-full z-0">
          {/* Mobile: top offset, Desktop: centered */}
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-cover object-center pointer-events-none"
              autoPlay
              loop
              muted
              playsInline
              style={{
                // On mobile, shift the video down
                objectPosition: 'center 60%'
              }}
            >
              <source src={dotedAnimation} type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-white/90 z-0 pointer-events-none"></div>
          </div>
        </div>

        <div className="relative z-10 h-full">
          {/* Hero Content */}
          <main className="flex flex-col items-center justify-center min-h-[85vh] md:min-h-[85vh] px-4">
            <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center justify-center px-3 py-1.5 mb-4 md:mb-6 rounded-full bg-gray-100 text-gray-600 text-xs md:text-sm font-medium uppercase tracking-wide">
                Crypto Payments
              </div>

              {/* Headline - Adjusted for better mobile spacing */}
              <h1 className="text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-black leading-[1.4] text-center mb-6 md:mb-6">
                Stablecoin for <br className="hidden sm:block" /> Businesses
              </h1>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center w-full mb-6 md:mb-8">
                <Link 
                  to='/cart' 
                  className="bg-[#4b6bff] hover:bg-[#3d62ea] text-white text-sm xs:text-base sm:text-lg px-4 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-xl shadow-blue-100 w-full max-w-[280px] sm:max-w-xs sm:w-auto mb-3"
                >
                  Enable Crypto Payments
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>

                <Link 
                  to="/crypto-wallet-setup-guide" 
                  className="text-gray-500 font-medium hover:text-gray-800 transition-colors text-xs xs:text-sm sm:text-base text-center"
                >
                  First time paying with crypto?
                </Link>
              </div>

              {/* Feature List */}
              <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-3 sm:gap-4 mb-8 md:mb-10 text-xs xs:text-sm md:text-base text-gray-500 font-medium">
                <div className="flex items-center gap-1.5 xs:gap-2 bg-gray-50 px-2 xs:px-3 py-1 rounded-full">
                  <Check className="w-3 h-3 xs:w-4 xs:h-4 text-gray-400 flex-shrink-0" /> 
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-1.5 xs:gap-2 bg-gray-50 px-2 xs:px-3 py-1 rounded-full">
                  <Check className="w-3 h-3 xs:w-4 xs:h-4 text-gray-400 flex-shrink-0" /> 
                  <span>Global payments</span>
                </div>
                <div className="flex items-center gap-1.5 xs:gap-2 bg-gray-50 px-2 xs:px-3 py-1 rounded-full">
                  <Check className="w-3 h-3 xs:w-4 xs:h-4 text-gray-400 flex-shrink-0" /> 
                  <span>1% transaction fees</span>
                </div>
              </div>


              {/* Trust Badges */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 w-full">
                <div className="text-gray-400 text-xs sm:text-sm mb-1 md:mb-0">TRUSTED BY</div>
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 opacity-80">
                  <div className="flex items-center gap-1 sm:gap-2 text-slate-700 font-bold text-base sm:text-lg md:text-xl italic">
                    <FontAwesomeIcon icon={faPaypal} className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-[#3a3c3d]">Pay</span><span className="text-[#787a7c]">Pal</span>
                  </div>

                  <div className="bg-[#4b4b4b] text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm flex items-center gap-1 sm:gap-2 font-medium">
                    <div className="w-2 h-1.5 sm:w-2.5 sm:h-1.5 border border-white rounded-sm"></div>
                    Card Pay
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* ===== WHAT WE SAVE SECTION ===== */}
      <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 bg-white relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12">
            {/* Right Column - Stats Card (FIRST on mobile) */}
            <div className="lg:w-1/2 relative flex justify-center items-center order-1 lg:order-2">
              {/* Gray Background Card */}
              <div className="absolute bg-[#f5f5f5] rounded-xl w-[90%] sm:w-[90%] h-[120%] sm:h-[135%] -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-sm"></div>

              {/* Phone Image */}
              <img
                src={handPhone}
                alt="Stats"
                className="w-[80%] sm:w-[80%] md:w-auto h-auto scale-122 md:scale-100 lg:scale-110 xl:scale-125 drop-shadow-2xl relative z-10 mt-4 sm:mt-8 md:-mt-24"
              />
            </div>

            {/* Left Column - Text (SECOND on mobile) */}
            <div className="lg:w-1/2 max-w-3xl px-6 sm:px-6 md:px-0 order-2 lg:order-1 mt-6">
              <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 text-xs text-gray-700 uppercase rounded-full px-3 py-1.5 bg-gray-100 font-poppins">
                What We Save
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black mb-4 sm:mb-6 leading-tight">
                Financial Infrastructure That <br className="hidden sm:block" /> Feels Effortless.
              </h2>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-justify">
                Payment systems today are fragmented, slow, and expensive. 
                Genius Act bridges the gap between traditional finance and 
                AI-powered automation, helping businesses operate with speed, 
                stability, and total transparency.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4b6bff] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">Reduce operational friction</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4b6bff] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">Automate treasury workflows</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4b6bff] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">Access stable, borderless payments</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4b6bff] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg">Build financial trust at scale</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="bg-[#f7f7f7] py-16 sm:py-20 md:py-24 px-3 sm:px-4 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">

          {/* --- Header Section --- */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6">
            {/* Top Pill */}
            <span className="inline-block bg-gray-200/80 rounded-full px-4 sm:px-5 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-gray-600 tracking-wide">
              Process
            </span>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
              How It Works
            </h2>

            {/* Discount Pill */}
            <span className="inline-block bg-red-100 rounded-full px-4 sm:px-5 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-red-500 tracking-wide">
              Save up to 3.5% in fees!
            </span>
          </div>

          {/* --- Steps Cards Section --- */}
          <div className="relative mb-12 sm:mb-16 md:mb-10">
            {/* Arrows Background Layer */}
            <ConnectingArrows />

            {/* Cards Container: Centered on mobile, full width on desktop */}
            <div className="flex justify-center md:block">
              <div className="w-[90%] md:w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-6 relative z-20">
                  {stepsData.map((step) => (
                    <StepCard key={step.id} {...step} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- Video Placeholder Section --- */}
          <div className="relative max-w-6xl mx-auto">
            {/* Browser Mockup Container */}
            <div className="bg-gray-900 rounded-xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-gray-800/50">

              {/* Video Content Area */}
              <div className="relative group cursor-pointer bg-gray-900">

                <video src={howItWorksVideo} alt="Video preview of checkout process"
                  className="w-full h-auto object-cover opacity-60 hover:opacity-80 transition-all duration-300" controls></video>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Product modules */}
      <section className="bg-white">
        <div ref={sectionRef} className="py-12 sm:py-14 md:py-16 px-3 sm:px-4 md:px-8 lg:px-16 bg-[#ffffff]">
          {/* --- Header Section --- */}
          <div className="flex flex-col items-center text-center mb-4 sm:mb-5 space-y-2">
            {/* Top Pill */}
            <span className="inline-block bg-gray-200/80 rounded-full px-4 sm:px-5 font-poppins py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-gray-600 tracking-wide">
              See It in Action
            </span>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 tracking-tight font-poppins px-4 sm:px-6">
              Product Modules
            </h2>

          </div>

          {/* Crypto */}
          <ProductFeatureRow
            zIndex={0}
            title="Crypto Checkout"
            description="Accept USDC and other major stablecoins with instant, low fee settlement."
            videoSrc={cryptoVideo}
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
            videoSrc={paymentStripeVideo}
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
            videoSrc={paypalVideo}
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
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-block bg-gray-100 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold text-gray-600 tracking-wide font-poppins">
              Testimonial
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black mt-4 mb-3 sm:mb-4 font-poppins px-2">
              Trusted by Forward–Thinking Businesses
            </h2>

            <p className="text-sm sm:text-base font-poppins text-gray-500 max-w-md sm:max-w-lg mx-auto leading-relaxed px-2">
              Teams across industries choose Genius Act to reduce fees and boost conversions.
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center lg:items-stretch">
            {/* Left Column: Testimonial Card */}
            <div className="w-full max-w-[90%] sm:max-w-none lg:w-full">
              <div className="bg-white border border-[#4b6bff] border-t-4 rounded-xl sm:rounded-[1.5rem] p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full min-h-[250px] w-full">
                {/* Pills */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <div className="bg-[#eef2ff] text-[#4b6bff] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold tracking-wide font-poppins">
                    100+ businesses
                  </div>
                  <div className="bg-[#eef2ff] text-[#4b6bff] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold tracking-wide font-poppins">
                    Global-ready
                  </div>
                  <div className="bg-[#eef2ff] text-[#4b6bff] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold tracking-wide font-poppins">
                    Low fees
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-auto">
                  <p className="text-lg sm:text-xl md:text-2xl font-medium text-black mb-4 sm:mb-6 md:mb-8 leading-relaxed font-poppins text-center sm:text-left">
                    "Genius Act helped us unlock global customers while cutting payment costs."
                  </p>
                  <div className="text-center sm:text-right">
                    <div className="text-[#4b6bff] font-semibold text-sm sm:text-base font-poppins">
                      Business Name
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm font-poppins">
                      Global E-commerce Platform
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Use Cases */}
            <div className="w-full max-w-[90%] sm:max-w-none lg:w-full">
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                {/* Freelancers */}
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-[#eef2ff] border border-gray-200 rounded-xl sm:rounded-[1.5rem] hover:bg-blue-50 transition-colors w-full">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#2d5bff] rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base sm:text-lg md:text-xl text-black mb-1 sm:mb-2 font-poppins">
                      Freelancers
                    </h4>
                    <p className="text-gray-500 text-sm sm:text-base font-poppins">
                      No more 3% cuts on every payment.
                    </p>
                  </div>
                </div>

                {/* E-commerce */}
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-[#eef2ff] border border-gray-200 rounded-xl sm:rounded-[1.5rem] hover:bg-blue-50 transition-colors w-full">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#2d5bff] rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base sm:text-lg md:text-xl text-black mb-1 sm:mb-2 font-poppins">
                      E-commerce Stores
                    </h4>
                    <p className="text-gray-500 text-sm sm:text-base font-poppins">
                      International buyers pay in seconds with USDC.
                    </p>
                  </div>
                </div>

                {/* SaaS */}
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-[#eef2ff] border border-gray-200 rounded-xl sm:rounded-[1.5rem] hover:bg-blue-50 transition-colors w-full">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#2d5bff] rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-base sm:text-lg md:text-xl text-black mb-1 sm:mb-2 font-poppins">
                      SaaS Platforms
                    </h4>
                    <p className="text-gray-500 text-sm sm:text-base font-poppins">
                      Offer both fiat and crypto side by side.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

const Dashboard = () => {
  return <GeniusActPage />;
};

export default Dashboard;