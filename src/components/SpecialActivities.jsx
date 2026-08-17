import React from "react";
import { SPECIAL_ACTIVITIES } from "../data/projectData";

export const SpecialActivities = () => {
  return (
    <section className="py-14 bg-[#f4ebd9]/60 border-y border-[#e6c278]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SPECIAL_ACTIVITIES.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#e6c278]/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-68 overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#e6c278] bg-[#0a2214]/80 px-2.5 py-0.5 rounded border border-[#e6c278]/30 inline-block mb-1">
                    {act.subtitle}
                  </span>

                  <h3 className="text-xl font-serif font-bold text-white leading-tight">
                    {act.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  {act.description}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#9b7328]">
                  <span>Integrated Farm Feature</span>
                  <span>100% Organic</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
