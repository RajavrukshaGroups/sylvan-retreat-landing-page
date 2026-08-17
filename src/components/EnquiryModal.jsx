import React, { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { PROJECT_INFO } from "../data/projectData";
import { submitEnquiry } from "../services/api";

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
    interest: defaultInterest || "Free Weekend Site Visit",
    pickupRequired: true,
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
        message: formData.message,
      });

      if (onSuccess) {
        onSuccess(formData);
      }
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#0b2415] border border-[#e6c278]/50 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {" "}
        {/* Top Gold Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#9b7328] via-[#e6c278] to-[#9b7328]" />
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-stone-300 hover:text-white rounded-full bg-[#081a0e] border border-stone-700 hover:border-[#e6c278] transition-all cursor-pointer"
          aria-label="Close enquiry form"
        >
          <X className="w-5 h-5" />
        </button>
        <div>
          <div className="text-center mb-6">
            <span className="text-[11px] font-semibold text-[#e6c278] uppercase tracking-widest block mb-1">
              {PROJECT_INFO.title}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase">
              {defaultInterest || "BOOK SITE VISIT / ENQUIRE"}
            </h3>
            <p className="text-xs text-stone-300 mt-1">
              Fill in your details for instant availability & site visit details
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                Full Name <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-[#07190e] border border-stone-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#e6c278]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">
                  Mail / Email Address <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#07190e] border border-stone-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#e6c278]"
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
                  value={formData.phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    if (val.length <= 10)
                      setFormData({ ...formData, phone: val });
                  }}
                  className="w-full bg-[#07190e] border border-stone-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#e6c278]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">
                Message / Requirement
              </label>
              <textarea
                rows={2}
                placeholder="Tell us about your requirement..."
                value={formData.message || ""}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-[#07190e] border border-stone-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#e6c278]"
              />
            </div>

            {/* Shuttle Pickup checkbox */}
            <div className="flex items-center gap-2 bg-[#07190e] p-3 rounded-lg border border-stone-800">
              <input
                type="checkbox"
                id="pickup"
                checked={formData.pickupRequired}
                onChange={(e) =>
                  setFormData({ ...formData, pickupRequired: e.target.checked })
                }
                className="w-4 h-4 text-[#e6c278] accent-[#e6c278] cursor-pointer"
              />
              <label
                htmlFor="pickup"
                className="text-xs text-stone-300 cursor-pointer"
              >
                Request Complimentary Cab Pick-Up & Drop from Bangalore
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 bg-gradient-to-r from-[#e6c278] to-[#cba153] hover:from-[#f0d08a] hover:to-[#dbb060] text-[#081a0e] font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>
                {isSubmitting ? "Submitting..." : "CONFIRM & GET DETAILS"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
