import React from "react";
import Logo from "../assets/images/samrudhi-logo.png";

export const SamrudhiLogo = ({
  className = "h-10",
  textColor = "#ffffff",
  showTagline = true,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={Logo} alt="samrudhi logo" className="h-16 w-auto" />
      <div className="flex flex-col justify-center text-left">
        <span className="font-serif font-extrabold tracking-widest text-lg sm:text-xl uppercase drop-shadow-sm text-[#0e2108ff] leading-none">
          SAMRUDHI
        </span>

        <span className="font-kepler font-semibold tracking-[0.03em] text-base sm:text-lg text-[#bb7e05ff] leading-none mt-0.5">
          Sylvan Retreat
        </span>
      </div>
    </div>
  );
};
