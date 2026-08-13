import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';
import { submitEnquiry } from '../services/api';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotInterest: '20 Guntas (Half Acre)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await submitEnquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          plotInterest: '20 Guntas (Half Acre)',
          message: '',
        });
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#0a2214] text-white border-t border-[#e6c278]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-8 bg-[#e6c278]"></span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#e6c278] tracking-wider uppercase">
              VISIT US / ENQUIRE
            </h2>
            <span className="h-[1px] w-8 bg-[#e6c278]"></span>
          </div>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto font-light">
            Book a complimentary guided site visit with cab pick-up or speak with our farmland investment consultants today.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Details & Office (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Box */}
            <div className="bg-[#081a0e] p-6 rounded-2xl border border-[#e6c278]/40 shadow-xl space-y-6">
              <h3 className="text-lg font-serif font-bold text-[#e6c278] border-b border-[#e6c278]/20 pb-3">
                GET IN TOUCH DIRECTLY
              </h3>

              <div className="space-y-4">
                
                {/* Phone */}
                <a
                  href={`tel:${PROJECT_INFO.phone}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0b2415] border border-[#e6c278]/20 hover:border-[#e6c278] transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#081a0e] border border-[#e6c278]/30 text-[#e6c278] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-400 block font-medium">
                      Call / WhatsApp Us
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-[#e6c278] transition-colors">
                      {PROJECT_INFO.displayPhone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PROJECT_INFO.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0b2415] border border-[#e6c278]/20 hover:border-[#e6c278] transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-[#081a0e] border border-[#e6c278]/30 text-[#e6c278] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-400 block font-medium">
                      Email Inquiry
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-[#e6c278] transition-colors">
                      {PROJECT_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Office Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0b2415] border border-[#e6c278]/20">
                  <div className="p-2.5 rounded-lg bg-[#081a0e] border border-[#e6c278]/30 text-[#e6c278] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-400 block font-medium">
                      Corporate Office Address
                    </span>
                    <p className="text-xs font-semibold text-stone-200 mt-0.5 leading-relaxed">
                      {PROJECT_INFO.officeAddress}
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#081a0e] border border-[#e6c278]/15 text-xs text-stone-300">
                  <Clock className="w-4 h-4 text-[#e6c278] shrink-0" />
                  <span>Office Hours: 9:00 AM – 7:00 PM (Open All Days)</span>
                </div>

              </div>
            </div>

            {/* Free Cab Pickup Highlight Banner */}
            <div className="bg-[#f4ebd9] text-[#0a2214] p-5 rounded-2xl border border-[#e6c278] shadow-lg flex items-center gap-4">
              <div className="p-3 bg-[#0a2214] rounded-xl text-[#e6c278] shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-[#9b7328]">
                  COMPLIMENTARY CAB PICKUP
                </h4>
                <p className="text-xs font-semibold mt-0.5 leading-snug">
                  We provide free luxury AC cab pick-up & drop from your doorstep anywhere in Bangalore for weekend site visits.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Site Visit & Booking Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#081a0e] p-6 sm:p-8 rounded-2xl border border-[#e6c278]/40 shadow-2xl">
            <h3 className="text-xl font-serif font-bold text-[#e6c278] mb-1">
              BOOK A GUIDED SITE VISIT
            </h3>
            <p className="text-xs text-stone-300 mb-6">
              Fill in your details below. Our team will contact you within 15 minutes to confirm plot availability.
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-[#0b2415] border border-emerald-500/50 rounded-xl text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-serif font-bold text-white">
                  Thank You for Your Interest!
                </h4>
                <p className="text-xs text-stone-300 max-w-md mx-auto">
                  Our farmland consultant will call you shortly on{' '}
                  <strong className="text-[#e6c278]">{formData.phone || 'your phone number'}</strong>{' '}
                  to arrange your site visit and share price sheets.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0b2415] border border-stone-700 rounded-lg text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#e6c278]"
                    />
                  </div>

                  {/* Mail / Email */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Mail / Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0b2415] border border-stone-700 rounded-lg text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#e6c278]"
                    />
                  </div>
                </div>

                {/* Phone Number */}
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
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      if (val.length <= 10) setFormData({ ...formData, phone: val });
                    }}
                    className="w-full px-3.5 py-2.5 bg-[#0b2415] border border-stone-700 rounded-lg text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#e6c278]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">
                    Message / Requirement
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message or inquiry details here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0b2415] border border-stone-700 rounded-lg text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#e6c278]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-[#e6c278] to-[#cba153] hover:from-[#f0d08a] hover:to-[#dbb060] text-[#0a2214] font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT & SCHEDULE FREE SITE VISIT</span>
                </button>

                <p className="text-[10px] text-stone-400 text-center flex items-center justify-center gap-1 mt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Privacy Protected. No spam or third-party sharing.</span>
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
