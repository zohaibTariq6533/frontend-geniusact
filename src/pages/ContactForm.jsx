import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import usdcIcon from '../assets/usdc-nonbg.png'
import HCaptcha from '@hcaptcha/react-hcaptcha';

function ContactForm() {
    const navigate = useNavigate()
    const web3ApiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    const [errors, setErrors] = useState()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessType: '',
        website: '',
        income: '',
        message: ''
    })

    const onHCaptchaChange = (token) => {
        setFormData((prev) => ({
            ...prev,
            "h-captcha-response": token
        }))
    };

    const showWebsiteField = ['E-commerce Store', 'Website', 'SaaS'].includes(formData.businessType)

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        if (errors) setErrors(null)
    }


    const handleSubmit = async (e) => {

        e.preventDefault()

        if (!formData.name.trim() || !formData.email.trim() || !formData.businessType || !formData.income || !formData.message.trim()) {
            setErrors('Please fill in all fields above')
        } else {
            setErrors(null)
            const formDataSend = new FormData(e.target);
            formDataSend.append("access_key", web3ApiKey);
            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formDataSend
                });

                const data = await response.json();
                if (data.success) {
                    e.target.reset();
                    setFormData({ name: '', email: '', businessType: '', website: '', income: '', message: '' });
                    navigate('/thanks');
                } else {
                    setErrors('Failed: ' + data.error);
                    console.log(data);
                }
            } catch (error) {
                setErrors('Failed: ' + error.message);
            }
        }
    }

    const inputClasses = "w-full px-4 py-3 text-sm rounded-lg bg-gray-50/80 border border-gray-400 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#4b6bff]/20 focus:border-[#4b6bff]/40 transition-all duration-200"

    return (
        <div className="min-h-screen bg-[#f8fafc] overflow-hidden">
            <div className="w-full min-h-screen flex flex-col lg:flex-row">
                {/* Left: Hero content */}
                <div className="relative w-full lg:w-[45%] py-10 px-6 sm:px-8 lg:py-0 lg:px-10 lg:pl-24 xl:pl-32 xl:pr-12 bg-gradient-to-br from-[#4b6bff] via-[#3d5ee8] to-[#2d4bd6] flex flex-col justify-center overflow-hidden">
                    {/* Decorative bg elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />
                    <img src={usdcIcon} alt="" aria-hidden="true" className="absolute bottom-6 right-6 w-24 h-24 opacity-[0.08] pointer-events-none select-none" />

                    <div className="relative z-10">
                        {/* Badge */}
                        <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 font-poppins">
                            Genius Act
                        </span>

                        {/* Headline */}
                        <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-white font-poppins tracking-tight leading-[1.15] mb-3">
                            Accept Crypto<br />
                            Payments.<br />
                            <span className="text-white/70 font-medium">Instantly. Globally.</span>
                        </h1>

                        {/* Description */}
                        <p className="text-white/75 text-[13px] sm:text-xs leading-relaxed font-poppins mb-5 max-w-sm">
                            Let customers pay with USDT & USDC directly on your site—fast, secure, with near-zero fees. Save up to <span className="text-white font-semibold">97% compared to traditional processors</span>.
                        </p>

                        {/* Divider */}
                        <div className="h-px w-12 bg-white/25 mb-4" />

                        {/* Pain points as pills */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['Tired of high Stripe fees?', 'Freelancer invoicing headaches?', 'Need flexible payments?'].map((item) => (
                                <span key={item} className="bg-white/10 backdrop-blur-sm text-white/90 text-xs px-3 py-1.5 rounded-full font-poppins">
                                    {item}
                                </span>
                            ))}
                        </div>

                        {/* Built for */}
                        <div className="mb-6">
                            <p className="text-[11px] font-semibold text-white/50 uppercase tracking-widest mb-2.5 font-poppins">Built for</p>
                            <div className="flex flex-wrap gap-1.5">
                                {['Freelancers', 'Agencies', 'E-commerce', 'SaaS', 'Digital Sellers'].map((item) => (
                                    <span key={item} className="bg-white/10 backdrop-blur-sm text-white/90 text-xs px-3 py-1.5 rounded-full font-poppins">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA nudge */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-px bg-white/40" />
                            <p className="text-white/80 text-xs font-medium font-poppins tracking-wide">
                                Fill the form to get started
                            </p>
                            <ArrowRight className="w-3.5 h-3.5 text-white/60" />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[55%] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                    <div className="relative w-full flex items-center justify-center max-w-lg">
                        {/* Large USDC icon — right background */}
                        <img
                            src={usdcIcon}
                            alt=""
                            aria-hidden="true"
                            className="hidden sm:block absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] opacity-[0.08] pointer-events-none select-none"
                        />

                        {/* Form card */}
                        <div className="relative z-10 w-full">
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] border border-gray-100/80">


                                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="px-5 sm:px-7 py-5 sm:py-6 flex flex-col gap-3 sm:gap-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1.5 font-poppins">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={inputClasses}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1.5 font-poppins">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="you@company.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={inputClasses}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="businessType" className="block text-xs font-medium text-gray-700 mb-1.5 font-poppins">
                                            I Run a...
                                        </label>
                                        <select
                                            name="businessType"
                                            id="businessType"
                                            value={formData.businessType}
                                            onChange={handleChange}
                                            className={inputClasses + " cursor-pointer"}
                                        >
                                            <option value="">Select your business type</option>
                                            <option value="Freelancer">Freelancer</option>
                                            <option value="E-commerce Store">E-commerce Store</option>
                                            <option value="Website">Website</option>
                                            <option value="SaaS">SaaS</option>
                                            <option value="Agency Owner">Agency Owner</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    {showWebsiteField && (
                                        <div>
                                            <label htmlFor="website" className="block text-xs font-medium text-gray-700 mb-1.5 font-poppins">
                                                Website URL <span className="text-gray-400 font-normal">(optional)</span>
                                            </label>
                                            <input
                                                type="url"
                                                id="website"
                                                name="website"
                                                placeholder="https://yoursite.com"
                                                value={formData.website}
                                                onChange={handleChange}
                                                className={inputClasses}
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <label htmlFor="income" className="block text-xs font-medium text-gray-700 mb-1.5 font-poppins">
                                            Monthly Revenue
                                        </label>
                                        <select
                                            name="income"
                                            id="income"
                                            value={formData.income}
                                            onChange={handleChange}
                                            className={inputClasses + " cursor-pointer"}
                                        >
                                            <option value="">Select a range</option>
                                            <option value="$0-$1k">$0 – $1k</option>
                                            <option value="$1k-$10k">$1k – $10k</option>
                                            <option value="$10k-$50k">$10k – $50k</option>
                                            <option value="$50k-$100k">$50k – $100k</option>
                                            <option value="$100k+">$100k+</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1.5 font-poppins">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your business..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={3}
                                            className={inputClasses + " resize-none"}
                                        />
                                    </div>


                                    {errors && (
                                        <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">
                                            {errors}
                                        </p>
                                    )}
                                    <div className="[&_iframe]:max-w-full overflow-hidden">
                                        <HCaptcha
                                            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                                            reCaptchaCompat={false}
                                            onVerify={onHCaptchaChange}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full mt-1 bg-[#4b6bff] hover:bg-[#3d5ee8] text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-md hover:shadow-blue-500/20 active:scale-[0.98] font-poppins text-sm"
                                    >
                                        Send Message
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
