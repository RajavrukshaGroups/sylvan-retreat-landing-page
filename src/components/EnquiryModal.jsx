import React, { useState, useEffect } from "react";
import { User, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { submitEnquiry } from "../services/api";
import diwaliPopupImg from "../assets/diwali_popup_img/Pop-up.png";

export const EnquiryModal = ({
  isOpen,
  onClose,
  defaultInterest,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: defaultInterest || "Diwali Special Offer",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultInterest) {
      setFormData((prev) => ({ ...prev, interest: defaultInterest }));
    }
  }, [defaultInterest]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    try {
      await submitEnquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || `Diwali Offer Enquiry (${formData.interest || "General"})`,
      });

      if (onSuccess) {
        onSuccess(formData);
      }
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]"
    >
      <div
        className="relative w-full max-w-4xl bg-[#081e11] border border-[#e6c278]/60 rounded-2xl md:rounded-3xl shadow-[0_0_60px_rgba(230,194,120,0.25)] overflow-hidden my-auto flex flex-col md:flex-row [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#9b7328] via-[#e6c278] to-[#9b7328] z-30" />

        {/* Left Column: Diwali Special Poster Image */}
        <div className="relative md:w-1/2 bg-black flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-[#e6c278]/30">
          <img
            src={diwaliPopupImg}
            alt="Sylvan Retreat Diwali Offer"
            className="w-full h-48 sm:h-64 md:h-full object-contain bg-black select-none"
          />
          {/* Subtle gradient overlay at bottom for mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none md:hidden" />
        </div>

        {/* Right Column: Diwali Themed Lead Form */}
        <div className="relative md:w-1/2 p-5 sm:p-6 md:p-7 flex flex-col justify-center bg-gradient-to-b from-[#0b2415] via-[#091f13] to-[#06170e] [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
          {/* Headline & Subtitle */}
          <div className="mb-3">
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white leading-tight">
              Limited Time Offer <br /> More Information{" "}
              <span className="text-[#e6c278]">Contact Us</span>
            </h3>
            <p className="text-[11px] sm:text-xs text-stone-300 mt-1 leading-relaxed">
              Celebrate this Deepavali by owning fertile managed farmland. Fill in your details below for project information.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-2.5">
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold text-stone-300 mb-1">
                Full Name <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <User className="w-3.5 h-3.5 text-[#e6c278]/70 absolute left-3 top-2.5 pointer-events-none" />
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#07190e] border border-stone-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#e6c278] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-stone-300 mb-1">
                  Phone Number <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-[#e6c278]/70 absolute left-3 top-2.5 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    pattern="^[1-9][0-9]{9}$"
                    maxLength="10"
                    title="Please enter a valid 10-digit mobile number (cannot start with 0)"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      if (val.length <= 10)
                        setFormData({ ...formData, phone: val });
                    }}
                    className="w-full bg-[#07190e] border border-stone-700 rounded-lg pl-8 pr-2.5 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#e6c278] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-stone-300 mb-1">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-[#e6c278]/70 absolute left-3 top-2.5 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-[#07190e] border border-stone-700 rounded-lg pl-8 pr-2.5 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#e6c278] transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs font-semibold text-stone-300 mb-1">
                Message / Requirement
              </label>
              <div className="relative">
                <MessageSquare className="w-3.5 h-3.5 text-[#e6c278]/70 absolute left-3 top-2.5 pointer-events-none" />
                <textarea
                  rows={2}
                  placeholder="Interested in 20 Guntas / 1 Acre plot, schedule site visit..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#07190e] border border-stone-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#e6c278] transition-colors resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-1.5 py-2.5 px-5 bg-gradient-to-r from-[#e6c278] via-[#f5d082] to-[#cba153] hover:from-[#f0d08a] hover:to-[#dbb060] text-[#081a0e] font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[0_4px_16px_rgba(230,194,120,0.3)] flex items-center justify-center gap-2 transition-all cursor-pointer hover:shadow-[0_6px_24px_rgba(230,194,120,0.45)] active:scale-[0.99] disabled:opacity-70"
            >
              <span>
                {isSubmitting ? "Submitting Enquiry..." : "GET DETAILS"}
              </span>
            </button>

            <div className="flex items-center justify-center gap-1.5 pt-0.5 text-[10px] sm:text-[11px] text-stone-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Instant callback &amp; brochure on WhatsApp / Email</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
