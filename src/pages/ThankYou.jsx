import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight } from 'lucide-react'
import usdcIcon from '../assets/usdc-nonbg.png'

function ThankYou() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 py-10 bg-[#f8fafc] overflow-hidden">
      <div className="relative w-full max-w-5xl">

        {/* Background USDC icon */}
        <img
          src={usdcIcon}
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[520px] md:h-[520px] lg:w-[600px] lg:h-[600px] opacity-[0.06] pointer-events-none select-none"
        />

        {/* Card */}
        <div className="relative z-10 w-full max-w-md mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] border border-gray-100/80 text-center px-8 py-12 sm:px-10 sm:py-14">

            {/* Success icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                <CheckCircle className="w-9 h-9 text-green-500" strokeWidth={1.5} />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 font-poppins tracking-tight mb-3">
              Thank You!
            </h1>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-poppins max-w-xs mx-auto mb-8">
              Your message has been received. We'll get back to you shortly.
            </p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />

            {/* CTA */}
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-[#4b6bff] hover:bg-[#3d5ee8] text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-blue-500/20 active:scale-[0.98] font-poppins text-sm"
            >
              Back to Home
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
