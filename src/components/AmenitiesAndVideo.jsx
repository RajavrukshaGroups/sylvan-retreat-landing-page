import React from 'react';
import {
  Footprints,
  Smile,
  Droplet,
  Waves,
  Shield,
  Zap,
  Play,
} from 'lucide-react';
import { AMENITIES } from '../data/projectData';
import { IMAGES } from '../data/images';

export const AmenitiesAndVideo = ({ onOpenVideoModal }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Footprints':
        return <Footprints className="w-6 h-6 text-[#e6c278]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#e6c278]" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6 text-[#e6c278]" />;
      case 'Waves':
        return <Waves className="w-6 h-6 text-[#e6c278]" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#e6c278]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#e6c278]" />;
      default:
        return <Zap className="w-6 h-6 text-[#e6c278]" />;
    }
  };

  return (
    <section id="amenities" className="py-16 bg-[#fbf9f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: AMENITIES (Dark Green Box) */}
          <div className="lg:col-span-6 bg-[#081a0e] rounded-2xl p-6 sm:p-8 border border-[#e6c278]/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center gap-3">
                  <span className="h-[1px] w-6 bg-[#e6c278]"></span>
                  <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#e6c278] tracking-widest uppercase">
                    AMENITIES
                  </h2>
                  <span className="h-[1px] w-6 bg-[#e6c278]"></span>
                </div>
                <p className="text-xs text-stone-300 mt-1">
                  World-class eco infrastructure and modern lifestyle conveniences
                </p>
              </div>

              {/* 6 Amenities Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {AMENITIES.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-[#0b2415] border border-[#e6c278]/25 hover:border-[#e6c278] transition-all group"
                  >
                    <div className="p-2.5 rounded-full bg-[#081a0e] border border-[#e6c278]/30 group-hover:scale-110 transition-transform mb-2">
                      {getIcon(item.iconName)}
                    </div>
                    <span className="text-xs font-semibold text-stone-200 group-hover:text-[#e6c278] transition-colors leading-tight">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#e6c278]/20 text-center">
              <p className="text-xs text-stone-400">
                ⭐ Electricity, 24/7 Gated Security & Drip Irrigation Line included in every plot
              </p>
            </div>
          </div>

          {/* Right Column: EXPLORE THROUGH VIDEO */}
          <div className="lg:col-span-6 bg-[#f4ebd9]/80 rounded-2xl p-6 sm:p-8 border border-[#e6c278]/40 shadow-xl flex flex-col">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center gap-3">
                <span className="h-[1px] w-6 bg-[#9b7328]"></span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0a2214] tracking-wider uppercase">
                  EXPLORE SITE IMAGES
                </h2>
                <span className="h-[1px] w-6 bg-[#9b7328]"></span>
              </div>
              <p className="text-xs text-stone-600 mt-1">
                View 58-Acre Samrudhi Sylvan Retreat
              </p>
            </div>

            {/* Video Thumbnail Box */}
            <div
              onClick={onOpenVideoModal}
              className="relative flex-1 min-h-[260px] rounded-xl overflow-hidden shadow-lg border-2 border-[#e6c278]/50 group cursor-pointer"
            >
              <img
                src={IMAGES.droneThumb}
                alt="Samrudhi Sylvan Retreat Video Tour Thumbnail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center p-4 text-center">
                
                {/* Play Button */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#e6c278] group-hover:border-[#0a2214] transition-all duration-300">
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white group-hover:text-[#0a2214] fill-current ml-1" />
                </div>

                <span className="mt-4 text-xs sm:text-sm font-semibold text-white tracking-widest uppercase bg-[#0a2214]/80 px-4 py-1.5 rounded-full border border-[#e6c278]/50">
                  CLICK TO VIEW
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
