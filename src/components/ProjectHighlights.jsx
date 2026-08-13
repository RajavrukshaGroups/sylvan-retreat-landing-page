import React from 'react';
import {
  Trees,
  Home,
  Sun,
  Droplet,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { HIGHLIGHTS } from '../data/projectData';
import { IMAGES } from '../data/images';

export const ProjectHighlights = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trees':
        return <Trees className="w-5 h-5 text-[#9b7328]" />;
      case 'Home':
        return <Home className="w-5 h-5 text-[#9b7328]" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#9b7328]" />;
      case 'Droplet':
        return <Droplet className="w-5 h-5 text-[#9b7328]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#9b7328]" />;
      default:
        return <Trees className="w-5 h-5 text-[#9b7328]" />;
    }
  };

  return (
    <section id="highlights" className="py-16 bg-[#fbf9f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-8 bg-[#9b7328]"></span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0a2214] tracking-wider uppercase">
              PROJECT HIGHLIGHTS
            </h2>
            <span className="h-[1px] w-8 bg-[#9b7328]"></span>
          </div>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Designed for those who seek peace, clean air, high agricultural yield, and a weekend retreat close to Bangalore city.
          </p>
        </div>

        {/* Grid: 7 Feature Cards + 3 Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          
          {/* Highlights Cards (Mapped) */}
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-6 border border-[#e6c278]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
                index === HIGHLIGHTS.length - 1 && HIGHLIGHTS.length % 3 === 1 ? 'lg:col-start-2' : ''
              } ${
                index === HIGHLIGHTS.length - 1 && HIGHLIGHTS.length % 2 === 1 ? 'md:col-span-2 md:w-1/2 md:mx-auto lg:col-span-1 lg:w-auto lg:mx-0' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f4ebd9] border border-[#e6c278]/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-serif font-bold text-[#0a2214] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#9b7328]">
                <span>Feature Included</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}

          {/* Photo Card 1: Coconut & Mango Grove */}
         
        </div>

      </div>
    </section>
  );
};
