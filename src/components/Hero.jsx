import React, { useState } from "react";
import {
  MapPin,
  Leaf,
  Sprout,
  Droplets,
  ShieldCheck,
  Landmark,
  Camera,
  Star,
  User,
  Mail,
  Phone,
  Edit3,
  Send,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { IMAGES } from "../data/images";
import HeroBgImg from "../assets/images/hero-2.png";
import { submitEnquiry } from "../services/api";

export const Hero = ({ onFormSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    try {
      await submitEnquiry({ name, email, phone, message });
      setSubmitted(true);
      if (onFormSuccess) {
        onFormSuccess({ name, phone, email, message });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[660px] lg:min-h-[680px] bg-cover bg-center py-8 lg:py-9 overflow-hidden flex items-center"
      style={{
        backgroundImage: `url("${HeroBgImg}")`,
      }}
    >
      {/* Soft Bright Sunlight Overlays & Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:from-white/90 lg:via-white/70 lg:to-white/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Value Props, Price & Features */}
          <div className="lg:col-span-7 space-y-5">
            {/* Top Location Pill */}
            <div className="inline-flex items-center gap-2.5 bg-white/95 border border-white/80 shadow-md rounded-full px-4 py-2 backdrop-blur-md">
              <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                <MapPin className="w-3.5 h-3.5 text-purple-700" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-amber-900 tracking-wide">
                Doddaballapur, North Bangalore
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-serif font-extrabold tracking-tight text-[#154726] leading-[1.05]">
                SAMRUDHI
              </h1>

              <h2 className="font-kepler text-4xl sm:text-6xl lg:text-[68px] font-semibold tracking-[0.03em] text-[#d96500] leading-[1.05]">
                Sylvan Retreat
              </h2>
            </div>

            {/* Decorative Leaf Divider */}
            <div className="flex items-center gap-3 max-w-sm pt-1 pb-1">
              <div className="h-[1.5px] flex-1 bg-gradient-to-r from-[#2d6a3f]/60 to-[#2d6a3f]/20" />
              <Leaf className="w-4 h-4 text-[#2d6a3f]" />
              <div className="h-[1.5px] flex-1 bg-gradient-to-l from-[#2d6a3f]/60 to-[#2d6a3f]/20" />
            </div>

            {/* Description Paragraph */}
            {/* <p className="text-stone-800 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Experience serene agricultural living surrounded by coconut groves, fruit orchards, and ethical livestock farming. Fully managed organic farmland plots with clear titles and bank loan support.
            </p> */}

            <p className="text-stone-800 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Welcome to a premium 5-acre managed farmland project offering 27
              exclusive plots starting from 6000 sqft onwards. Designed for
              privacy, security, and convenience, this project is the perfect
              blend of modern amenities and traditional farming lifestyle.
            </p>

            {/* Price Box Card */}
            {/* <div className="bg-white/95 backdrop-blur-md border border-white/90 rounded-2xl p-4 sm:p-5 shadow-lg max-w-md">
              <span className="text-[11px] font-bold tracking-wider text-[#154726] uppercase block">
                PLOTS STARTING FROM
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-extrabold text-[#d96500] mt-0.5">
                ₹2.4 Lakhs <span className="text-2xl sm:text-3xl font-serif font-bold text-[#d96500]">/ Gunta</span>
              </div>
              <div className="text-xs font-semibold text-stone-600 mt-1">
                (Approx. ₹48–50 Lakhs for 20 Guntas)
              </div>
            </div> */}

            {/* 4 Feature Circular Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full border border-[#154726]/40 bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#154726] shrink-0 shadow-xs">
                  <Sprout className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold text-stone-800 leading-tight">
                  100%
                  <br />
                  Organic Farming
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full border border-[#154726]/40 bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#154726] shrink-0 shadow-xs">
                  <Droplets className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold text-stone-800 leading-tight">
                  Abundant
                  <br />
                  Water Source
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full border border-[#154726]/40 bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#154726] shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold text-stone-800 leading-tight">
                  Clear Title
                  <br />& Legal Security
                </div>
              </div>
              {/* 
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full border border-[#154726]/40 bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#154726] shrink-0 shadow-xs">
                  <Landmark className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold text-stone-800 leading-tight">
                  Bank Loan<br />Support Available
                </div>
              </div> */}
            </div>

            {/* Bottom Tag */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-[#154726] text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
                <Camera className="w-4 h-4 text-emerald-300" />
                <span>Shot on Location — Organic Estate Layout</span>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Form Design from UI Mockup */}
          <div className="lg:col-span-5 pt-4 lg:pt-0">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.16)] border border-stone-100 relative">
              {/* Top Tab Ribbon */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ff9f00] to-[#f05a00] text-white px-6 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <Star className="w-3.5 h-3.5 fill-white text-white" />
                <span>EXPRESS INTEREST</span>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-emerald-100 border border-emerald-400 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-stone-900">
                    Request Received!
                  </h3>
                  <p className="text-xs text-stone-600">
                    Thank you {name}! Our team will call you back on{" "}
                    <span className="text-emerald-800 font-bold">{phone}</span>{" "}
                    shortly with price list and route map.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#d96500] font-bold underline hover:text-[#154726] cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                  {/* Card Title & Decorative Dots */}
                  <div className="text-center pb-2">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                      Get <span className="text-[#154726]">Price Sheet</span> &
                      Free Cab Visit
                    </h3>

                    {/* Small Orange Dot Divider */}
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <div className="h-[1.5px] w-8 bg-[#f05a00]/40" />
                      <div className="w-2 h-2 rounded-full bg-[#f05a00]" />
                      <div className="h-[1.5px] w-8 bg-[#f05a00]/40" />
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-3 pr-10 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#f05a00] focus:ring-1 focus:ring-[#f05a00]/30 transition-all shadow-xs"
                      />
                      <User className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* 2 Columns: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-stone-800 mb-1">
                        Mail / Email Address{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-3 pr-10 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#f05a00] focus:ring-1 focus:ring-[#f05a00]/30 transition-all shadow-xs"
                        />
                        <Mail className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-800 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          placeholder="10-digit mobile number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-3 pr-10 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#f05a00] focus:ring-1 focus:ring-[#f05a00]/30 transition-all shadow-xs"
                        />
                        <Phone className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-stone-800 mb-1">
                      Message / Question
                    </label>
                    <div className="relative">
                      <textarea
                        rows={3}
                        placeholder="Your requirements or questions..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-3 pr-10 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#f05a00] focus:ring-1 focus:ring-[#f05a00]/30 transition-all shadow-xs resize-none"
                      />
                      <Edit3 className="w-4 h-4 text-stone-400 absolute right-3.5 bottom-3 pointer-events-none" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-[#ff9f00] via-[#f78000] to-[#ea580c] hover:brightness-105 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? "Sending..."
                        : "SUBMIT ENQUIRY & GET PRICE"}
                    </span>
                  </button>

                  {/* Privacy Notice with Green Lock */}
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 font-medium pt-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-700" />
                    <span>
                      100% Privacy Guaranteed. No spam. Instant callback.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
