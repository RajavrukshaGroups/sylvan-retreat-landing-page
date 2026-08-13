import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ShieldCheck, MapPin, Sparkles, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';
import { IMAGES } from '../data/images';
import { submitEnquiry } from '../services/api';

export const Hero = ({ onFormSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [interest, setInterest] = useState('Site Visit & Pricing');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Two-image background carousel state
  const slides = [
    {
      image: IMAGES.heroBg1,
      title: '58-Acre Farmland Masterplan',
      caption: 'Shot on Location — Organic Estate Layout',
    },
    {
      image: IMAGES.heroBg2,
      title: 'Sylvan Retreat Nature Embrace',
      caption: 'Shot on Location — Lush Farmland Vistas',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    try {
      await submitEnquiry({ name, email, phone, message });
      setSubmitted(true);
      if (onFormSuccess) {
        onFormSuccess({ name, phone, interest });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative  text-white overflow-hidden py-10 sm:py-16 border-b border-[#e6c278]/30 min-h-[620px] flex items-center">
      
      {/* Two-Image Carousel Background Layers */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center filter brightness-45 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-105' : 'opacity-100 scale-100 pointer-events-none'
          }`}
          style={{ backgroundImage: `url("${slide.image}")` }}
        />
      ))}

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0  pointer-events-none" />

      {/* Carousel Navigation Controls Overlay */}
      <div className="absolute bottom-4 left-4 sm:left-8 z-20 flex items-center gap-3">
        <div className="flex items-center gap-1.5 bg-[#081a0e]/80 border border-[#e6c278]/40 rounded-full p-1 backdrop-blur-md shadow-lg">
          <button
            onClick={handlePrevSlide}
            className="w-7 h-7 rounded-full bg-[#0d2a17] hover:bg-[#e6c278] hover:text-[#081a0e] text-stone-200 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? 'w-6 bg-[#e6c278]' : 'w-2 bg-stone-600 hover:bg-stone-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}

          <button
            onClick={handleNextSlide}
            className="w-7 h-7 rounded-full bg-[#0d2a17] hover:bg-[#e6c278] hover:text-[#081a0e] text-stone-200 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-medium text-stone-300 bg-[#081a0e]/70 border border-stone-800 rounded-full px-3 py-1 backdrop-blur-md">
          <Camera className="w-3.5 h-3.5 text-[#e6c278]" />
          <span>{slides[currentSlide].caption}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & Key Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0a2314] border border-[#e6c278]/50 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#e6c278] shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Doddaballapur, North Bangalore — 58 Acres Organic Estate</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-white leading-tight">
              SAMRUDHI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6c278] via-[#f0d08a] to-[#cba153]">
                SYLVAN RETREAT
              </span>
            </h1>

            <p className="text-stone-100 text-sm sm:text-base font-semibold max-w-xl font-light leading-relaxed">
              Experience serene agricultural living surrounded by coconut groves, fruit orchards, and ethical livestock farming. Fully managed organic farmland plots with clear titles and bank loan support.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-medium text-stone-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e6c278] shrink-0" />
                <span>20 Guntas & 1 Acre Plots</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e6c278] shrink-0" />
                <span>Managed Wooden Cottage Option</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e6c278] shrink-0" />
                <span>30 Mins from KIAL Airport</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e6c278] shrink-0" />
                <span>Bank Approved Clear Titles</span>
              </div>
            </div>

            {/* Price Tag Box */}
            <div className="pt-4 flex items-center gap-4 border-t border-[#e6c278]/20">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-400 block font-semibold">
                  PLOTS STARTING FROM
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#e6c278]">
                  ~₹2.4 Lakhs / Gunta
                </span>
                <span className="text-xs text-stone-300 block font-light">
                  (Approx. ₹48–50 Lakhs for 20 Guntas)
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Instant Enquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-[#0b2415]/95 border border-[#e6c278]/50 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#9b7328] via-[#e6c278] to-[#9b7328] rounded-t-2xl" />

              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-[#e6c278]/20 border border-[#e6c278] rounded-full flex items-center justify-center mx-auto text-[#e6c278]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white">
                    Request Received!
                  </h3>
                  <p className="text-xs text-stone-300">
                    Thank you {name}! Our team will call you back on{' '}
                    <span className="text-[#e6c278] font-bold">{phone}</span> shortly with price list and route map.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#e6c278] underline hover:text-white cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-center pb-2 border-b border-[#e6c278]/20">
                    <span className="text-xs font-serif font-bold uppercase text-[#e6c278] tracking-widest block">
                      EXPRESS INTEREST
                    </span>
                    <h3 className="text-lg font-serif font-bold text-white">
                      Get Price Sheet & Free Cab Visit
                    </h3>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#07190e] border border-stone-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#e6c278]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1">
                        Mail / Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#07190e] border border-stone-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#e6c278]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="^[1-9][0-9]{9}$"
                        maxLength="10"
                        title="Please enter a valid 10-digit mobile number (cannot start with 0)"
                        placeholder="10-digit mobile number"
                        value={phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          if (val.length <= 10) setPhone(val);
                        }}
                        className="w-full bg-[#07190e] border border-stone-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#e6c278]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Message / Question
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Your requirements or questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#07190e] border border-stone-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#e6c278]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-[#e6c278] to-[#cba153] hover:from-[#f0d08a] hover:to-[#dbb060] text-[#081a0e] font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'SUBMIT ENQUIRY & GET PRICE'}</span>
                  </button>

                  <p className="text-[10px] text-center text-stone-400">
                    🔒 100% Privacy Guaranteed. No spam. Instant callback.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
