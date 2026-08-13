import React, { useState } from 'react';
import { Calculator, ShieldCheck, Sprout, ArrowRight } from 'lucide-react';

export const InteractivePlotCalculator = ({ onOpenEnquiry }) => {
  const [sizeGuntas, setSizeGuntas] = useState(20); // 20 Guntas default (0.5 Acre)
  const [managedFarming, setManagedFarming] = useState(true);

  // Rate calculations
  const pricePerGuntaLakhs = 2.4; // Approx ₹2.4 Lakhs per Gunta => 20 Guntas = ₹48-50 Lakhs
  const baseLandCostLakhs = Math.round(sizeGuntas * pricePerGuntaLakhs);
  const estimatedAnnualYieldLakhs = Math.round(sizeGuntas * 0.28 * (managedFarming ? 1.25 : 1));
  const acres = (sizeGuntas / 40).toFixed(2);
  const sqft = (sizeGuntas * 1089).toLocaleString('en-IN');

  return (
    <section className="py-16 bg-[#0a2214] text-white border-y border-[#e6c278]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-8 bg-[#e6c278]"></span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#e6c278] tracking-wide uppercase">
              FARMLAND COST & ESTIMATOR
            </h2>
            <span className="h-[1px] w-8 bg-[#e6c278]"></span>
          </div>
          <p className="text-stone-300 text-sm max-w-xl mx-auto font-light">
            Customize your farmland plot area to view budget estimates, sq. ft. conversion, and organic crop yield potential.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-[#0e2d1c] border border-[#e6c278]/40 rounded-2xl p-6 sm:p-8 shadow-2xl max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Controls (Left 7 Cols) */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Plot Size Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-stone-200">
                  Select Plot Size:
                </label>
                <span className="text-base font-serif font-bold text-[#e6c278]">
                  {sizeGuntas} Guntas ({acres} Acres)
                </span>
              </div>

              <input
                type="range"
                min={20}
                max={120}
                step={5}
                value={sizeGuntas}
                onChange={(e) => setSizeGuntas(Number(e.target.value))}
                className="w-full h-2 bg-[#081a0e] rounded-lg appearance-none cursor-pointer accent-[#e6c278]"
              />

              <div className="flex justify-between text-[11px] text-stone-400 mt-1.5 font-medium">
                <span>20 Guntas (0.5 Acre)</span>
                <span>40 Guntas (1 Acre)</span>
                <span>80 Guntas (2 Acres)</span>
                <span>120 Guntas (3 Acres)</span>
              </div>
            </div>

            {/* Quick Preset Buttons */}
            <div>
              <span className="text-xs font-semibold text-stone-300 block mb-2">
                Popular Plot Size Options:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { guntas: 20, label: '20 Guntas (Half Acre)' },
                  { guntas: 40, label: '40 Guntas (1 Acre)' },
                  { guntas: 80, label: '80 Guntas (2 Acres)' },
                ].map((btn) => (
                  <button
                    key={btn.guntas}
                    onClick={() => setSizeGuntas(btn.guntas)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      sizeGuntas === btn.guntas
                        ? 'bg-[#e6c278] text-[#0a2214] border-[#e6c278] font-bold shadow'
                        : 'bg-[#081a0e] text-stone-300 border-stone-700/80 hover:border-[#e6c278]/50'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Managed Farming Toggle */}
            <div className="bg-[#081a0e] p-4 rounded-xl border border-[#e6c278]/25 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sprout className="w-5 h-5 text-[#e6c278] shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">
                    Samrudhi Managed Organic Farming
                  </span>
                  <span className="text-[11px] text-stone-400">
                    Includes drip irrigation, mango orchard care, & harvested yield sharing
                  </span>
                </div>
              </div>

              <input
                type="checkbox"
                checked={managedFarming}
                onChange={(e) => setManagedFarming(e.target.checked)}
                className="w-5 h-5 text-[#e6c278] rounded cursor-pointer accent-[#e6c278]"
              />
            </div>

          </div>

          {/* Results Summary Box (Right 5 Cols) */}
          <div className="md:col-span-5 bg-[#081a0e] p-6 rounded-xl border border-[#e6c278]/40 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#e6c278] tracking-wider mb-4 pb-2 border-b border-[#e6c278]/20">
                <Calculator className="w-4 h-4" />
                <span>ESTIMATED SUMMARY</span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-stone-400">Total Plot Area:</span>
                  <span className="text-sm font-semibold text-white">
                    {sqft} Sq. Ft.
                  </span>
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-stone-400">Guntas / Acreage:</span>
                  <span className="text-sm font-semibold text-white">
                    {sizeGuntas} Guntas ({acres} Acres)
                  </span>
                </div>

                <div className="flex justify-between items-baseline pt-2 border-t border-stone-800">
                  <span className="text-xs text-stone-300 font-medium">Est. Land Budget:</span>
                  <span className="text-2xl font-serif font-bold text-[#e6c278]">
                    ~₹{baseLandCostLakhs} Lakhs*
                  </span>
                </div>

                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-[11px] text-emerald-400 font-medium">
                    Est. Annual Crop Yield:
                  </span>
                  <span className="text-sm font-bold text-emerald-400">
                    ~₹{estimatedAnnualYieldLakhs} L/Yr*
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() =>window.location.href='#contact'}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#e6c278] to-[#cba153] hover:from-[#f0d08a] hover:to-[#dbb060] text-[#0a2214] font-bold text-xs uppercase tracking-wider rounded-lg shadow flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>GET EXACT PLOT AVAILABILITY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
