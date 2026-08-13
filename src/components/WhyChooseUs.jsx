import React from 'react';
import { Sprout, TrendingUp, Globe, FileCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/projectData';

export const WhyChooseUs = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sprout':
        return <Sprout className="w-8 h-8 text-[#9b7328]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8 text-[#9b7328]" />;
      case 'Globe':
        return <Globe className="w-8 h-8 text-[#9b7328]" />;
      case 'FileCheck':
        return <FileCheck className="w-8 h-8 text-[#9b7328]" />;
      default:
        return <Sprout className="w-8 h-8 text-[#9b7328]" />;
    }
  };

  return (
    <section className="py-16 bg-[#f5f1e8] border-t border-[#e6c278]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-8 bg-[#9b7328]"></span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0a2214] tracking-wide uppercase">
              WHY CHOOSE US
            </h2>
            <span className="h-[1px] w-8 bg-[#9b7328]"></span>
          </div>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
            Your trusted partner in securing high-yield, clear-title agricultural farmland in North Bangalore.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-6 border border-[#e6c278]/40 shadow-sm hover:shadow-xl hover:border-[#9b7328] transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-[#f4ebd9] border border-[#e6c278]/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getIcon(card.iconName)}
              </div>
              <h3 className="text-base font-serif font-bold text-[#0a2214] mb-2">
                {card.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
