import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/projectData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Farmland', 'Cottage', 'Amenities', 'Aerial'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedItem(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedItem(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <section id="gallery" className="py-16 bg-[#f5f1e8] border-t border-[#e6c278]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-8 bg-[#9b7328]"></span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0a2214] tracking-wider uppercase">
              GALLERY
            </h2>
            <span className="h-[1px] w-8 bg-[#9b7328]"></span>
          </div>
          <p className="text-stone-600 text-sm max-w-xl mx-auto">
            Take a visual tour through our lush coconut groves, organic plots, wooden cottages, and serene environment.
          </p>
        </div>

        {/* Category Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0a2214] text-[#e6c278] shadow-md border border-[#e6c278]/40'
                  : 'bg-white/80 text-stone-700 hover:bg-white border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div> */}

        {/* 6 Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="relative group rounded-2xl overflow-hidden border border-[#e6c278]/40 shadow-md bg-stone-900 h-64 cursor-pointer"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2214]/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* <div>
                  <span className="text-[10px] font-semibold text-[#e6c278] uppercase tracking-wider bg-[#0a2214]/80 px-2 py-0.5 rounded border border-[#e6c278]/30">
                    {item.category}
                  </span>
                  <h3 className="text-base font-serif font-bold text-white mt-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-light line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div> */}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-5 right-5 p-2 bg-stone-800 text-stone-200 rounded-full hover:text-white cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 bg-stone-800/80 hover:bg-stone-800 text-stone-200 rounded-full cursor-pointer z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 bg-stone-800/80 hover:bg-stone-800 text-stone-200 rounded-full cursor-pointer z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-[#0a2214] rounded-2xl overflow-hidden border border-[#e6c278]/50 shadow-2xl">
            <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* <div className="p-5 text-center">
              <span className="text-xs font-semibold text-[#e6c278] uppercase tracking-widest">
                {selectedItem.category}
              </span>
              <h3 className="text-xl font-serif font-bold text-white mt-1">
                {selectedItem.title}
              </h3>
              <p className="text-xs text-stone-300 max-w-lg mx-auto mt-1">
                {selectedItem.description}
              </p>
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
};
