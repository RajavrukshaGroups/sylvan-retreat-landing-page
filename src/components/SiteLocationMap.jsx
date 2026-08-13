import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  Compass,
  Plane,
  Building,
  GraduationCap,
  Hospital,
  ShoppingBag,
  Sparkles,
  Maximize2,
  X,
  PhoneCall,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';
import sitema from "../assets/images/sitema.jpeg"

export const SiteLocationMap = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const landmarks = [
    { name: 'Ghati Subramanya Temple', distance: '6 KM', time: '10 Mins', category: 'Spiritual', icon: Compass, color: 'border-amber-500 text-amber-700 bg-amber-50' },
    { name: 'Nandhi Hills', distance: '18 KM', time: '25 Mins', category: 'Spiritual', icon: Sparkles, color: 'border-emerald-500 text-emerald-700 bg-emerald-50' },
    { name: 'ISHA Foundation (Adiyogi)', distance: '22 KM', time: '30 Mins', category: 'Spiritual', icon: Compass, color: 'border-purple-500 text-purple-700 bg-purple-50' },
    { name: 'Kempegowda Int. Airport (KIAL)', distance: '28 KM', time: '25 Mins', category: 'Transit', icon: Plane, color: 'border-blue-500 text-blue-700 bg-blue-50' },
    { name: 'Doddaballapura Town', distance: '5 KM', time: '8 Mins', category: 'Transit', icon: MapPin, color: 'border-green-500 text-green-700 bg-green-50' },
    { name: 'Devanahalli Town & Fort', distance: '24 KM', time: '25 Mins', category: 'Transit', icon: Navigation, color: 'border-sky-500 text-sky-700 bg-sky-50' },
    { name: 'Aerospace SEZ & Boeing Plant', distance: '22 KM', time: '22 Mins', category: 'IT & Hubs', icon: Building, color: 'border-indigo-500 text-indigo-700 bg-indigo-50' },
    { name: 'Manyata Tech Park', distance: '35 KM', time: '40 Mins', category: 'IT & Hubs', icon: Building, color: 'border-blue-600 text-blue-800 bg-blue-50' },
    { name: 'Stonehill International School', distance: '16 KM', time: '18 Mins', category: 'Education & Health', icon: GraduationCap, color: 'border-teal-500 text-teal-700 bg-teal-50' },
    { name: 'Aster CMI & Manipal Hospitals', distance: '32 KM', time: '35 Mins', category: 'Education & Health', icon: Hospital, color: 'border-rose-500 text-rose-700 bg-rose-50' },
    { name: 'Phoenix Mall of Asia & RMZ Mall', distance: '30 KM', time: '32 Mins', category: 'Education & Health', icon: ShoppingBag, color: 'border-fuchsia-500 text-fuchsia-700 bg-fuchsia-50' },
    { name: 'Hebbal Flyover Junction', distance: '36 KM', time: '40 Mins', category: 'Transit', icon: Navigation, color: 'border-stone-600 text-stone-800 bg-stone-100' },
  ];

  const filteredLandmarks =
    selectedCategory === 'All'
      ? landmarks
      : landmarks.filter((item) => item.category === selectedCategory);

  return (
    <section id="location" className="py-16 bg-[#081a0e] text-white border-y border-[#e6c278]/30 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e6c278]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0a2314]/50 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-8 bg-[#e6c278]"></span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#e6c278] tracking-wider uppercase">
              LOCATION & SITE MAP
            </h2>
            <span className="h-[1px] w-8 bg-[#e6c278]"></span>
          </div>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Strategically located in Doddaballapura, North Bangalore — seamless connection to KIAL Airport, Highway SH-09, Nandi Hills, and ISHA Foundation.
          </p>
        </div>

        {/* Main Grid: Interactive Map Graphic + Connectivity Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left 7 Columns: Stylized Graphic Site Map Card */}
          <div className="lg:col-span-7 bg-[#0b2415] border border-[#e6c278]/40 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col justify-between relative group">
            
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#e6c278]/20">
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[#e6c278]" />
                <span className="text-sm font-serif font-bold text-white uppercase tracking-wider">
                  MASTER CONNECTIVITY & SITE MAP
                </span>
              </div>
              <button
                onClick={() => setIsMapModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1 bg-[#081a0e] hover:bg-[#123822] text-[#e6c278] border border-[#e6c278]/40 rounded-lg text-xs font-semibold transition-all cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Enlarge Map</span>
              </button>
            </div>

            {/* Custom Interactive Illustrated Site Map View */}
            <div
              onClick={() => setIsMapModalOpen(true)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#e6c278]/30 bg-[#112d1b] cursor-pointer group-hover:border-[#e6c278] transition-all shadow-inner flex items-center justify-center"
            >
              {/* Map SVG / Route Illustration Layer */}
              <img src={sitema} alt="Site Map" />
              {/* Hover Badge */}
              <div className="absolute bottom-3 right-3 bg-[#081a0e]/90 border border-[#e6c278]/50 text-[#e6c278] text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Click to View Full Map & Route Details</span>
              </div>
            </div>

            <p className="text-[11px] text-stone-400 mt-3 text-center">
              📍 Directly accessible via State Highway-09 & Satellite Town Ring Road (STRR).
            </p>
          </div>

          {/* Right 5 Columns: Categorized Nearby Connectivity List */}
          <div className="lg:col-span-5 bg-[#0b2415] border border-[#e6c278]/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#e6c278]/20">
                <h3 className="text-base font-serif font-bold text-[#e6c278] uppercase tracking-wider">
                  KEY CONNECTIVITY TIMES
                </h3>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  STRR 6-Lane Access
                </span>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['All', 'Transit', 'Spiritual', 'IT & Hubs', 'Education & Health'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#e6c278] text-[#081a0e] shadow'
                        : 'bg-[#081a0e] text-stone-300 border border-stone-800 hover:border-[#e6c278]/40'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Scrollable Landmark Items List */}
              <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1 scrollbar-thin">
                {filteredLandmarks.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 bg-[#07190e] border border-stone-800 rounded-xl hover:border-[#e6c278]/50 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg border ${item.color} shrink-0`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white group-hover:text-[#e6c278] transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-[10px] text-stone-400">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-serif font-bold text-[#e6c278] block">
                          {item.time}
                        </span>
                        <span className="text-[10px] text-stone-400 font-medium">
                          ({item.distance})
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Site Visit Action Bar */}
            <div className="pt-4 border-t border-[#e6c278]/20 flex flex-col gap-2">
              <button
                onClick={() =>window.location.href='#contact'}
                className="w-full py-3 bg-gradient-to-r from-[#e6c278] to-[#cba153] hover:from-[#f0d08a] hover:to-[#dbb060] text-[#081a0e] font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK SITE VISIT & CAB PICKUP</span>
              </button>
              
              <div className="text-center text-[10px] text-stone-400">
                🚗 Free pick-up & drop from Hebbal, Yelahanka & Bangalore Airport Road
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Full Screen Enlarged Map Lightbox Modal */}
      {isMapModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#081a0e] border border-[#e6c278]/60 rounded-2xl max-w-5xl w-full p-6 relative shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e6c278]/30">
              <div className="flex items-center gap-2">
                <Navigation className="w-6 h-6 text-[#e6c278]" />
                <h3 className="text-lg font-serif font-bold text-white uppercase tracking-wider">
                  SAMRUDHI SYLVAN RETREAT — LOCATION & ROUTE MAP
                </h3>
              </div>
              <button
                onClick={() => setIsMapModalOpen(false)}
                className="p-2 text-stone-300 hover:text-white rounded-full bg-stone-800 border border-stone-700 cursor-pointer"
                aria-label="Close Site Map"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Enlarged Map Canvas Container */}
            <div className="flex-1 overflow-auto rounded-xl border border-[#e6c278]/30 bg-[#e8f1f5] p-2 flex items-center justify-center">
             <img src={sitema} className='object-cover h-full w-full'/>
            </div>

            {/* Modal Bottom CTAs */}
            <div className="pt-4 mt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-stone-300">
                📞 Need help with live directions? Call site manager at{' '}
                <strong className="text-[#e6c278]">{PROJECT_INFO.displayPhone}</strong>
              </span>
              {/* <button
                onClick={() => }
                className="px-6 py-2.5 bg-[#e6c278] text-[#081a0e] font-bold text-xs uppercase rounded-lg shadow cursor-pointer hover:bg-[#f0d08a]"
              >
                REQUEST DIRECTION LINK ON WHATSAPP
              </button> */}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
