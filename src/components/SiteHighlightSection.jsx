import React, { useState } from 'react';
import { Camera, MapPin, Maximize2, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import aerialSiteOverview from '../assets/images/aerial_site_overview_1786602562808.jpg';
import aerialSiteSylvan from '../assets/images/aerial_site_sylvan_1786602579774.webp';

export const SiteHighlightSection = ({ onOpenEnquiry }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const HIGHLIGHT_IMAGES = [
    {
      id: 'aerial-1',
      title: 'Actual Site Drone Overview',
      subtitle: 'Shot On Location • Doddaballapur, North Bangalore',
      description: 'Expansive 58-acre fertile farmland surrounded by rich green tree canopy, organic cultivation beds, polyhouses, and natural water catchment ponds.',
      src: aerialSiteOverview,
      badge: 'Actual Drone Photo',
    },
    {
      id: 'aerial-2',
      title: 'Sylvan Retreat Panorama',
      subtitle: 'Experience Nature\'s Embrace',
      description: 'Authentic site view capturing the serene rural charm, rich red soil, clear skies, and peaceful environment ideal for your weekend retreat.',
      src: aerialSiteSylvan,
      badge: 'Shot On Location',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#081a0e] text-white relative overflow-hidden border-t border-b border-[#e6c278]/30">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e6c278]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13351d] border border-[#e6c278]/40 text-[#e6c278] text-xs font-semibold tracking-wider uppercase mb-3 shadow-md">
            <Camera className="w-3.5 h-3.5 text-amber-300" />
            <span>AUTHENTIC SITE HIGHLIGHTS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-100 tracking-tight">
            Actual Site Views – <span className="text-[#e6c278]">Shot On Location</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
            Take a real look at Samrudhi Sylvan Retreat in Doddaballapur, North Bangalore. Our 58-acre managed farmland features rich fertile red soil, dense natural green cover, and existing agricultural infrastructure.
          </p>
        </div>

        {/* 2 Featured High-Impact Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {HIGHLIGHT_IMAGES.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#0d2616] border border-[#e6c278]/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#e6c278] hover:shadow-[0_10px_30px_rgba(230,194,120,0.15)] flex flex-col"
            >
              {/* Image Frame with Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900 cursor-pointer" onClick={() => setSelectedImage(item)}>
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#081a0e] via-transparent to-black/30 opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#081a0e]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#e6c278]/50 text-xs font-bold text-[#e6c278] shadow-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.badge}</span>
                </div>

                {/* Zoom Icon Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(item);
                  }}
                  className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-[#e6c278] text-white hover:text-[#081a0e] rounded-full backdrop-blur-sm transition-colors border border-white/20"
                  title="Expand Image"
                  aria-label="Expand Image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Bottom Watermark Overlay on Image */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-stone-300">
                  <span className="flex items-center gap-1.5 text-amber-300 font-semibold bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Doddaballapur, North Bangalore</span>
                  </span>
                  <span className="bg-black/60 text-stone-300 text-[11px] px-2 py-1 rounded backdrop-blur-sm">
                    100% Verified Site
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#e6c278] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Features Checklist Pill */}
                <div className="mt-5 pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-300">
                  <div className="flex items-center gap-1.5 text-amber-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>58 Acres Managed Land</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-amber-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Fertile Red Soil</span>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry('Free Site Visit')}
                    className="ml-auto text-xs font-bold text-[#e6c278] hover:text-white underline underline-offset-4 flex items-center gap-1"
                  >
                    <span>Schedule Visit</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="mt-10 p-6 bg-gradient-to-r from-[#123820] via-[#0d2a18] to-[#123820] border border-[#e6c278]/40 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#e6c278]/20 text-[#e6c278] rounded-xl hidden sm:block">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Want to experience this land in person?</h4>
              <p className="text-xs text-stone-300">We arrange free cab pick-up & site visits every weekend for prospective buyers.</p>
            </div>
          </div>

          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('Free Weekend Site Visit')}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#e6c278] to-[#cba153] hover:from-[#f0d08a] hover:to-[#dbb060] text-[#081a0e] font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            BOOK A FREE SITE VISIT
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#081a0e] border border-[#e6c278]/40 rounded-2xl overflow-hidden shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 hover:bg-[#e6c278] text-white hover:text-[#081a0e] rounded-full flex items-center justify-center transition-colors font-bold text-lg"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-5 bg-[#081a0e] text-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-serif font-bold text-[#e6c278]">
                  {selectedImage.title}
                </h3>
                <span className="text-xs px-3 py-1 bg-[#13351d] text-amber-300 border border-[#e6c278]/30 rounded-full">
                  {selectedImage.badge}
                </span>
              </div>
              <p className="text-xs text-stone-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
