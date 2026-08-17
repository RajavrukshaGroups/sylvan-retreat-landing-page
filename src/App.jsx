import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StatsBanner } from "./components/StatsBanner";
import { LocationBanner } from "./components/LocationBanner";
import { ProjectHighlights } from "./components/ProjectHighlights";
import { SpecialActivities } from "./components/SpecialActivities";
import { AmenitiesAndVideo } from "./components/AmenitiesAndVideo";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { InteractivePlotCalculator } from "./components/InteractivePlotCalculator";
import { SiteLocationMap } from "./components/SiteLocationMap";
import { GallerySection } from "./components/GallerySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { EnquiryModal } from "./components/EnquiryModal";
import { VideoModal } from "./components/VideoModal";
import { PrivacyPolicyModal } from "./components/PrivacyPolicyModal";
import { Calendar, Phone, CheckCircle2 } from "lucide-react";
import { PROJECT_INFO } from "./data/projectData";
import { SiteHighlightSection } from "./components/SiteHighlightSection";

export default function App() {
  const [isRegistered, setIsRegistered] = useState(() => {
    return sessionStorage.getItem("sylvan_registered") === "true";
  });

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState(undefined);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (isRegistered) return;

    const timer = setTimeout(() => {
      setModalInterest(undefined);
      setIsEnquiryModalOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isRegistered]);

  const triggerToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleOpenEnquiry = (interest) => {
    setModalInterest(interest);
    setIsEnquiryModalOpen(true);
  };

  const handleFormSuccess = (data) => {
    console.log("Enquiry received:", data);
    if (!isRegistered) {
      sessionStorage.setItem("sylvan_registered", "true");
      setIsRegistered(true);
    }
    setIsEnquiryModalOpen(false);
    triggerToast(
      `Thank you ${data.name || ""}! Your enquiry has been submitted successfully.`,
    );
  };

  return (
    <div className="min-h-screen bg-[#fbf9f4] text-stone-800 font-sans selection:bg-[#e6c278] selection:text-[#081a0e] relative">
      {/* Top Navbar */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with integrated Enquiry Form */}
        <Hero onFormSuccess={handleFormSuccess} />
        {/* <SiteHighlightSection onOpenEnquiry={handleOpenEnquiry}/> */}

        {/* 6-Card Stats Banner */}
        {/* <StatsBanner /> */}

        {/* Location Advantage Strip */}
        <LocationBanner />

        {/* Project Highlights (58 Acres, Wooden House, Mango, Fertile soil, Water, Security) + 3 Images */}
        <ProjectHighlights />

        {/* 3 Featured Activity Cards (Beekeeping, Animal Husbandry, Mango Farming) */}
        <SpecialActivities />

        {/* Amenities Box + Explore Through Video Box */}
        <AmenitiesAndVideo onOpenVideoModal={() => setIsVideoModalOpen(true)} />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Interactive Farmland Plot Calculator & Budget Estimator */}
        {/* <InteractivePlotCalculator onOpenEnquiry={handleOpenEnquiry} /> */}

        {/* Site Location & Route Map */}
        <SiteLocationMap onOpenEnquiry={handleOpenEnquiry} />

        {/* Gallery Section with Lightbox */}
        <GallerySection />

        {/* Contact Us Section */}
        <ContactSection onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* Footer */}
      <Footer onOpenPrivacy={() => setIsPrivacyModalOpen(true)} />

      {/* Sticky Mobile Bottom CTA Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#081a0e]/95 backdrop-blur-md border-t border-[#e6c278]/40 p-3 sm:hidden flex items-center gap-3 shadow-2xl">
        <a
          href={`tel:${PROJECT_INFO.phoneNumber}`}
          className="flex-1 py-2.5 px-3 bg-[#0a2314] text-[#e6c278] border border-[#e6c278]/50 rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>CALL US NOW</span>
        </a>

        <button
          onClick={() => handleOpenEnquiry("Free Site Visit")}
          className="flex-1 py-2.5 px-3 bg-gradient-to-r from-[#e6c278] to-[#cba153] text-[#081a0e] rounded-lg text-xs font-extrabold text-center flex items-center justify-center gap-1.5 shadow"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>BOOK SITE VISIT</span>
        </button>
      </div>

      {/* Popups & Modals */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultInterest={modalInterest}
        onSuccess={handleFormSuccess}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-6 right-6 z-[999] flex items-center gap-3 bg-[#0b2415] border border-[#e6c278] text-white px-4 py-3 rounded-xl shadow-2xl animate-slideIn max-w-sm">
          <CheckCircle2 className="w-5 h-5 text-[#e6c278] shrink-0" />
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-wide text-stone-200">
              {toast}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
