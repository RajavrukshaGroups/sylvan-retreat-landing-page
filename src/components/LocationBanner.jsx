import React from 'react';
import { Plane, Compass, Sparkles, Navigation } from 'lucide-react';
import { LOCATION_BENEFITS } from '../data/projectData';

export const LocationBanner = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Plane':
        return <Plane className="w-5 h-5 text-[#9b7328]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#9b7328]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#9b7328]" />;
      case 'Navigation':
        return <Navigation className="w-5 h-5 text-[#9b7328]" />;
      default:
        return <Compass className="w-5 h-5 text-[#9b7328]" />;
    }
  };

  return (
    <section className="bg-[#f4ebd9] py-8 sm:py-10 border-b border-[#e6c278]/40 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-4 text-center lg:text-left">
            <span className="text-xs font-serif font-bold text-[#9b7328] uppercase tracking-widest block mb-1">
              LOCATION ADVANTAGE
            </span>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-[#0a2214] leading-snug">
              Connected to North Bangalore Growth Hub
            </h3>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 w-full">
            {LOCATION_BENEFITS.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-white/95 p-3.5 rounded-xl border border-[#e6c278]/50 shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-2.5 rounded-lg bg-[#f4ebd9] shrink-0 text-[#9b7328]">
                  {getIcon(item.iconName)}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-bold text-[#0a2214] block leading-snug">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-[#9b7328] font-semibold block mt-0.5 whitespace-nowrap">
                    {item.time} ({item.distance})
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
