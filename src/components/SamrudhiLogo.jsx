import React from 'react';
import Logo from "../assets/images/samrudhi-logo.png"

export const SamrudhiLogo = ({
  className = 'h-10',
  textColor = '#ffffff',
  showTagline = true,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      
      <img src={Logo} alt="samrudhi logo" className="h-16 w-auto" />
      <div className="flex flex-col justify-center text-left leading-tight">
        <span
          className="font-serif font-extrabold tracking-widest text-lg sm:text-xl uppercase drop-shadow-sm"
          style={{ color: textColor }}
        >
          SAMRUDHI
        </span>
        <span className="font-serif font-medium tracking-[0.2em] text-xs sm:text-sm text-[#e6c278] uppercase">
          SYLVAN RETREAT
        </span>
        {showTagline && (
          <span className="text-[9px] sm:text-[10px] text-stone-300 tracking-wider font-light uppercase mt-0.5 opacity-90">
            58-Acre Organic Farmland
          </span>
        )}
      </div>
    </div>
  );
};

