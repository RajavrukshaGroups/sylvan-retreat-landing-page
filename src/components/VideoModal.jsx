import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Film } from 'lucide-react';
import { IMAGES } from '../data/images';

export const VideoModal = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeClip, setActiveClip] = useState('drone');

  if (!isOpen) return null;

  const clips = [
    {
      id: 'drone',
      title: '58-Acre Drone Overview',
      duration: '2:15',
      image: IMAGES.droneThumb,
    },
    // {
    //   id: 'cottage',
    //   title: 'Wooden Retreat House Tour',
    //   duration: '1:45',
    //   image: IMAGES.woodenHouse,
    // },
    {
      id: 'mango',
      title: 'Organic Mango Orchards',
      duration: '1:10',
      image: IMAGES.mangoHarvest,
    },
    {
      id: 'cattle',
      title: 'Ethical Beekeeping & Livestock',
      duration: '1:30',
      image: IMAGES.beekeepingHoney,
    },
  ];

  const currentClip = clips.find((c) => c.id === activeClip) || clips[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md overflow-y-auto p-3 sm:p-6 flex flex-col items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      {/* Floating Close Button top right for extra safety */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-50 p-2 text-stone-200 hover:text-white rounded-full bg-black/80 hover:bg-[#e6c278] hover:text-[#081a0e] border border-white/30 shadow-2xl transition-all cursor-pointer"
        aria-label="Close Modal"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="bg-[#081a0e] border border-[#e6c278]/50 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl relative flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-3.5 sm:p-4 bg-[#0a2214] border-b border-[#e6c278]/30 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 pr-4">
            <Film className="w-5 h-5 text-[#e6c278] shrink-0" />
            <span className="text-xs sm:text-sm font-serif font-bold text-white tracking-wider uppercase truncate">
              SAMRUDHI SYLVAN RETREAT
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-300 hover:text-white hover:bg-[#e6c278] hover:text-[#081a0e] rounded-full bg-stone-800 transition-colors cursor-pointer shrink-0"
            aria-label="Close Video Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Simulated Video Player Stage */}
        <div className="relative aspect-video max-h-[55vh] bg-black flex items-center justify-center overflow-hidden group shrink">
          <img
            src={currentClip.image}
            alt={currentClip.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isPlaying ? 'scale-105 filter brightness-105' : 'filter brightness-75'
            }`}
            referrerPolicy="no-referrer"
          />

          {/* Playing indicator */}
          {/* {isPlaying && (
            <div className="absolute top-4 left-4 bg-red-600/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              <span>PLAYING 4K DRONE TOUR</span>
            </div>
          )} */}

          {/* Center Play/Pause button */}
          {/* <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/50 text-white flex items-center justify-center hover:scale-110 hover:bg-[#e6c278] hover:text-[#081a0e] transition-all cursor-pointer shadow-2xl z-10"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-current" />
            ) : (
              <Play className="w-8 h-8 fill-current ml-1" />
            )}
          </button> */}

          {/* Bottom Video Controls Overlay Bar */}
          {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-3">
              <button onClick={() => setIsPlaying(!isPlaying)} className="cursor-pointer">
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button onClick={() => setIsMuted(!isMuted)} className="cursor-pointer">
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-stone-300 font-mono text-[11px]">
                {currentClip.title} ({currentClip.duration})
              </span>
            </div>
            <span className="text-[11px] text-[#e6c278] font-semibold">4K Ultra HD</span>
          </div> */}
        </div>

        {/* Clip Selector Strip */}
        <div className="p-3 sm:p-4 bg-[#0a2214] border-t border-[#e6c278]/20  flex flex-row justify-center overflow-x-auto">
          {clips.map((clip) => (
            <button
              key={clip.id}
              onClick={() => {
                setActiveClip(clip.id);
                setIsPlaying(true);
              }}
              className={`p-2 rounded-medium border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                activeClip === clip.id
                  ? 'bg-[#e6c278]/20 border-[#e6c278] text-white font-bold'
                  : 'bg-[#081a0e] border-stone-800 text-stone-400 hover:border-stone-600'
              }`}
            >
              <div className="w-10 h-8 rounded overflow-hidden shrink-0">
                <img
                  src={clip.image}
                  alt={clip.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* <div className="overflow-hidden">
                <span className="text-[11px] block truncate leading-tight text-stone-200">
                  {clip.title}
                </span>
                <span className="text-[10px] text-[#e6c278]">{clip.duration}</span>
              </div> */}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
