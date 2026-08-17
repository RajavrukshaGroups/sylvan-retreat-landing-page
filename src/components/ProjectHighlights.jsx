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

import React from "react";
import {
  CheckCircle2,
  TreePine,
  Download,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { IMAGES } from "../data/images";

export const ProjectHighlights = ({ onOpenEnquiry }) => {
  const HIGHLIGHT_GROUPS = [
    {
      title: "Project Infrastructure & Ownership",
      points: [
        {
          title: "5-Acre Gated Masterplan",
          detail:
            "Expansive 5-acre fertile agricultural land, fully fenced and thoughtfully planned for managed farmland ownership.",
        },
        {
          title: "27 Individual Units",
          detail:
            "Spacious individual farmland plots starting from 6000 sqft onwards, designed for privacy and comfortable farmhouse development.",
        },
        {
          title: "100% Clear Titles",
          detail:
            "Complete legal transparency with clear title deeds and direct registration.",
        },
        {
          title: "24x7 Maintenance Staff",
          detail:
            "Dedicated on-site staff ensuring regular upkeep, security, farming support, and hassle-free ownership.",
        },
        {
          title: "Essential Facilities",
          detail:
            "Individual water connectivity, electricity supply, and sewage infrastructure planned for every plot.",
        },
        {
          title: "20 ft Black Top Roads",
          detail:
            "Well-developed internal black-top roads providing easy vehicle access to every individual plot.",
        },
        {
          title: "Farmhouse-Ready Infrastructure",
          detail:
            "No compromise on essential facilities, making the plots ready for your dream farmhouse construction.",
        },
        {
          title: "Abundant Water Infrastructure & Drip Lines",
          detail:
            "Dedicated estate borewells, natural water recharge systems, and underground drip irrigation lines to every plot.",
        },
        // {
        //   title: "24/7 Gated Security & Complete Perimeter Fencing",
        //   detail:
        //     "Round-the-clock guarded entry, perimeter fencing, CCTV surveillance, and permanent maintenance support.",
        // },
        {
          title: "Nutrient-Rich Fertile Red Soil",
          detail:
            "Rich red loam soil suitable for horticulture, fruit plantations, vegetables, and sustainable farming.",
        },
      ],
    },

    {
      title: "Traditional Farming with High-Demand Crops",
      points: [
        {
          title: "Mango",
          detail:
            "High-value fruit crop with strong market demand and naturally rich in Vitamins A and C.",
        },
        {
          title: "Jackfruit",
          detail:
            "A popular nutrient-rich fruit known for its high fiber content and growing consumer demand.",
        },
        {
          title: "Guava",
          detail:
            "A highly productive fruit crop rich in antioxidants and Vitamin C.",
        },
        {
          title: "Papaya",
          detail:
            "Fast-growing fruit crop valued for digestive benefits and consistent market demand.",
        },
        {
          title: "Chiku (Sapota)",
          detail:
            "Sweet tropical fruit rich in vitamins and minerals with good local market demand.",
        },
        {
          title: "Moringa (Drumstick)",
          detail:
            "Known for its nutritional value and rich content of protein, iron, calcium, and essential nutrients.",
        },
        {
          title: "High-Yield Mango & Horticultural Cultivation",
          detail:
            "Plantations including Malgova, Totapuri, Mallika mangoes, coconuts and other suitable horticultural crops.",
        },
        {
          title: "Integrated Farm Activities & Organic Living",
          detail:
            "Opportunities for sustainable farming, community-based agricultural activities, and fresh seasonal harvests.",
        },
      ],
    },

    {
      title: "Strategic North Bangalore Location",
      points: [
        {
          title: "Doddaballapura Growth Corridor",
          detail:
            "Located in the fast-developing North Bangalore corridor with strong connectivity and long-term growth potential.",
        },
        {
          title: "ITIR / SEZ, KIADB, KHIR & KWIN City Projects",
          detail:
            "Major upcoming commercial, industrial, and technology developments are located within the surrounding growth belt.",
        },
        {
          title: "Ghati Subramanya Temple",
          detail:
            "A prominent spiritual and cultural landmark located close to the project.",
        },
        {
          title: "Sir M. Visvesvaraya Check Dam",
          detail:
            "A notable nearby water resource adding ecological and scenic value to the surrounding region.",
        },
        {
          title: "Rashtrothana Go Shala",
          detail:
            "A nearby cultural and heritage destination associated with traditional cattle conservation.",
        },
        {
          title: "Makali Durga Hill & Nandi Hills",
          detail:
            "Popular trekking and weekend destinations conveniently accessible from the project location.",
        },
        {
          title: "Excellent Regional Connectivity",
          detail:
            "Convenient access to SH-09, STRR, Doddaballapura town, North Bangalore employment hubs, and Kempegowda International Airport.",
        },
        {
          title: "Long-Term Farmhouse Investment Potential",
          detail:
            "With comparatively larger land availability and expanding infrastructure, Doddaballapura is emerging as a preferred farmhouse and managed farmland destination.",
        },
      ],
    },
  ];

  return (
    <section
      id="highlights"
      className="py-14 sm:py-18 bg-[#fbf9f4] border-b border-[#e6c278]/30 w-full"
    >
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
          <p className="mt-2.5 text-stone-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            Discover the infrastructure, farming potential, essential amenities,
            and strategic location advantages that make Samrudhi Sylvan Retreat
            a distinctive managed farmland and farmhouse investment opportunity
            in North Bangalore.
          </p>
        </div>

        {/* Balanced Full-Width 2-Column Points List */}
        {/* Project Highlight Groups */}
        <div className="space-y-12">
          {HIGHLIGHT_GROUPS.map((group, groupIndex) => {
            const midpoint = Math.ceil(group.points.length / 2);
            const leftPoints = group.points.slice(0, midpoint);
            const rightPoints = group.points.slice(midpoint);

            return (
              <div key={groupIndex}>
                {/* Group Heading */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0">
                    <TreePine className="w-4 h-4 text-emerald-700" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0a2214]">
                      {group.title}
                    </h3>

                    <div className="w-14 h-[2px] bg-[#cba153] mt-1.5" />
                  </div>
                </div>

                {/* Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
                  {/* Left Column */}
                  <ul className="space-y-4 divide-y divide-stone-200/80">
                    {leftPoints.map((point, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-3.5 ${
                          index > 0 ? "pt-4" : ""
                        }`}
                      >
                        <div className="mt-1 shrink-0">
                          <span className="w-5 h-5 rounded-full bg-emerald-700 text-white text-[11px] font-bold flex items-center justify-center shadow-2xs">
                            ✓
                          </span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base text-stone-900 font-normal leading-relaxed">
                            <strong className="font-bold text-[#0a2214]">
                              {point.title}
                            </strong>

                            <span className="text-stone-700">
                              {" "}
                              — {point.detail}
                            </span>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Right Column */}
                  <ul className="space-y-4 divide-y divide-stone-200/80">
                    {rightPoints.map((point, index) => (
                      <li
                        key={index}
                        className={`flex items-start gap-3.5 ${
                          index > 0 ? "pt-4" : ""
                        }`}
                      >
                        <div className="mt-1 shrink-0">
                          <span className="w-5 h-5 rounded-full bg-emerald-700 text-white text-[11px] font-bold flex items-center justify-center shadow-2xs">
                            ✓
                          </span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base text-stone-900 font-normal leading-relaxed">
                            <strong className="font-bold text-[#0a2214]">
                              {point.title}
                            </strong>

                            <span className="text-stone-700">
                              {" "}
                              — {point.detail}
                            </span>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Actions & Trust Banner */}
      </div>
    </section>
  );
};
