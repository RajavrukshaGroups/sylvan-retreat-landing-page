import React from 'react';
import { STATS_BANNER_ITEMS } from '../data/projectData';
import {
  Trees,
  Home,
  ShieldCheck,
  Building,
  Sparkles,
  Award,
} from 'lucide-react';

export const StatsBanner = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trees':
        return <Trees className="w-7 h-7 text-[#e6c278]" />;
      case 'Home':
        return <Home className="w-7 h-7 text-[#e6c278]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#e6c278]" />;
      case 'Building':
        return <Building className="w-7 h-7 text-[#e6c278]" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#e6c278]" />;
      case 'Award':
        return <Award className="w-7 h-7 text-[#e6c278]" />;
      default:
        return <Trees className="w-7 h-7 text-[#e6c278]" />;
    }
  };

  return (
    <section className="bg-[#f2f1ebff] text-white py-12 border-b border-[#e6c278]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 6 Grid items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4">
          {STATS_BANNER_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-[#24210bff] border border-[#e6c278]/20 hover:border-[#e6c278]/60 transition-all duration-300 group"
            >
              <div className="p-3 rounded-full bg-[#0a2314] border border-[#e6c278]/30 group-hover:scale-110 transition-transform mb-3">
                {getIcon(item.iconName)}
              </div>
              <span className="text-xl sm:text-2xl font-serif font-extrabold text-[#e6c278] leading-tight">
                {item.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-200 mt-1">
                {item.label}
              </span>
              <span className="text-[11px] text-stone-400 mt-0.5 leading-snug">
                {item.subtext}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
