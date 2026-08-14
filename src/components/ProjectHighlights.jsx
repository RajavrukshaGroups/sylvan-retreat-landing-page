// import React from 'react';
// import {
//   Trees,
//   Home,
//   Sun,
//   Droplet,
//   ShieldCheck,
//   CheckCircle2,
// } from 'lucide-react';
// import { HIGHLIGHTS } from '../data/projectData';
// import { IMAGES } from '../data/images';

// export const ProjectHighlights = () => {
//   const getIcon = (iconName) => {
//     switch (iconName) {
//       case 'Trees':
//         return <Trees className="w-5 h-5 text-[#9b7328]" />;
//       case 'Home':
//         return <Home className="w-5 h-5 text-[#9b7328]" />;
//       case 'Sun':
//         return <Sun className="w-5 h-5 text-[#9b7328]" />;
//       case 'Droplet':
//         return <Droplet className="w-5 h-5 text-[#9b7328]" />;
//       case 'ShieldCheck':
//         return <ShieldCheck className="w-5 h-5 text-[#9b7328]" />;
//       default:
//         return <Trees className="w-5 h-5 text-[#9b7328]" />;
//     }
//   };

//   return (
//     <section id="highlights" className="py-16 bg-[#fbf9f4]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center gap-3 mb-2">
//             <span className="h-[1px] w-8 bg-[#9b7328]"></span>
//             <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0a2214] tracking-wider uppercase">
//               PROJECT HIGHLIGHTS
//             </h2>
//             <span className="h-[1px] w-8 bg-[#9b7328]"></span>
//           </div>
//           <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto font-normal">
//             Designed for those who seek peace, clean air, high agricultural yield, and a weekend retreat close to Bangalore city.
//           </p>
//         </div>

//         {/* Grid: 7 Feature Cards + 3 Photo Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          
//           {/* Highlights Cards (Mapped) */}
//           {HIGHLIGHTS.map((item, index) => (
//             <div
//               key={item.id}
//               className={`bg-white rounded-2xl p-6 border border-[#e6c278]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
//                 index === HIGHLIGHTS.length - 1 && HIGHLIGHTS.length % 3 === 1 ? 'lg:col-start-2' : ''
//               } ${
//                 index === HIGHLIGHTS.length - 1 && HIGHLIGHTS.length % 2 === 1 ? 'md:col-span-2 md:w-1/2 md:mx-auto lg:col-span-1 lg:w-auto lg:mx-0' : ''
//               }`}
//             >
//               <div>
//                 <div className="w-12 h-12 rounded-xl bg-[#f4ebd9] border border-[#e6c278]/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                   {getIcon(item.iconName)}
//                 </div>
//                 <h3 className="text-lg font-serif font-bold text-[#0a2214] mb-2 leading-snug">
//                   {item.title}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
//                   {item.description}
//                 </p>
//               </div>

//               <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#9b7328]">
//                 <span>Feature Included</span>
//                 <CheckCircle2 className="w-4 h-4 text-emerald-600" />
//               </div>
//             </div>
//           ))}

//           {/* Photo Card 1: Coconut & Mango Grove */}
         
//         </div>

//       </div>
//     </section>
//   );
// };

import React from 'react';
import {
  CheckCircle2,
  TreePine,
  Download,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { IMAGES } from '../data/images';

export const ProjectHighlights = ({ onOpenEnquiry }) => {
  const HIGHLIGHT_POINTS = [
    {
      title: '5\-Acre Gated Masterplan',
      detail: 'Expansive 5-acre fertile agricultural land, fully fenced and offering flexible plot options for investment or farming.',
    },
    {
      title: '100% Clear Titles & Individual Survey Numbers',
      detail: 'Complete legal transparency with clear title deeds, individual survey numbers, and direct registration.',
    },
    // {
    //   title: 'Bank Loan Assistance',
    //   detail: 'Pre-approved loan options and financial processing support available from leading nationalized banks.',
    // },
    // {
    //   title: 'Managed Wooden House & Weekend Cottage Option',
    //   detail: 'Custom eco-friendly wooden retreat construction with complete post-handover maintenance and hospitality management.',
    // },
    {
      title: 'High-Yield Mango & Horticultural Cultivation',
      detail: 'Thriving plantations of Malgova, Totapuri, Mallika mangoes, coconuts, and organic passion fruit supervised by agronomists.',
    },
    {
      title: 'Nutrient-Rich Fertile Red Soil',
      detail: 'Superior red loam soil composition ideal for organic horticulture, timber trees, and vegetable gardening.',
    },
    {
      title: 'Abundant Water Infrastructure & Automated Drip Lines',
      detail: 'Dedicated estate borewells, natural water recharge ponds, and underground automated drip irrigation lines to every plot.',
    },
    {
      title: '24/7 Gated Security & Complete Perimeter Fencing',
      detail: 'Round-the-clock guarded entry gates, perimeter solar/chain-link fencing, CCTV surveillance, and permanent maintenance staff.',
    },
    {
      title: 'Integrated Farm Activities & Organic Living',
      detail: 'Community beekeeping apiaries, indigenous cattle dairy farming, and fresh seasonal harvests delivered to owners.',
    },
    {
      title: 'Strategic North Bangalore Location',
      detail: 'Situated on Doddaballapur main arterial corridor — just 1 min from SH-09, 15 mins to STRR/KHIR City, and 25-30 mins to KIAL Airport.',
    },
  ];

  // Split evenly into 2 columns (5 each)
  const col1 = HIGHLIGHT_POINTS.slice(0, 3);
  const col2 = HIGHLIGHT_POINTS.slice(5);

  return (
    <section id="highlights" className="py-14 sm:py-18 bg-[#fbf9f4] border-b border-[#e6c278]/30 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>KEY ADVANTAGES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0a2214] tracking-tight">
            Project Highlights & Key Features
          </h2>
          <p className="mt-2.5 text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Essential facts and infrastructural benefits that make Samrudhi Sylvan Retreat North Bangalore’s premier managed farmland community.
          </p>
        </div>

        {/* Balanced Full-Width 2-Column Points List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 w-full">
          
          {/* Column 1 */}
          <ul className="space-y-4 divide-y divide-stone-200/80">
            {col1.map((point, index) => (
              <li
                key={index}
                className={`flex items-start gap-3.5 ${index > 0 ? 'pt-4' : ''}`}
              >
                <div className="mt-1 shrink-0">
                  <span className="w-5 h-5 rounded-full bg-emerald-700 text-white text-[11px] font-bold flex items-center justify-center shadow-2xs">
                    ✓
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base text-stone-900 font-normal leading-relaxed">
                    <strong className="font-bold text-[#0a2214]">{point.title}</strong>
                    <span className="text-stone-700"> — {point.detail}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Column 2 */}
          <ul className="space-y-4 divide-y divide-stone-200/80">
            {col2.map((point, index) => (
              <li
                key={index}
                className={`flex items-start gap-3.5 ${index > 0 ? 'pt-4' : ''}`}
              >
                <div className="mt-1 shrink-0">
                  <span className="w-5 h-5 rounded-full bg-emerald-700 text-white text-[11px] font-bold flex items-center justify-center shadow-2xs">
                    ✓
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base text-stone-900 font-normal leading-relaxed">
                    <strong className="font-bold text-[#0a2214]">{point.title}</strong>
                    <span className="text-stone-700"> — {point.detail}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>

        </div>

        {/* Bottom Actions & Trust Banner */}
      

      </div>
    </section>
  );
};


