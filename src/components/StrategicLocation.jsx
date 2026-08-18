import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Navigation,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Share2,
  Layers,
  Printer,
  Compass,
  Sparkles,
  Volume2,
  VolumeX,
  ArrowUpRight
} from 'lucide-react';

import bgHillsMist from '../assets/images/bg_hills_mist_1787030002163.jpg';
import highwayCorridorImg from '../assets/images/highway_corridor_1787030102755.jpg';
import techParkImg from '../assets/images/tech_park_itir_1787030043954.jpg';
import templeGhatiImg from '../assets/images/temple_ghati_1787030017244.jpg';
import checkDamImg from '../assets/images/checkdam_lake_1787030117089.jpg';
import goshalaImg from '../assets/images/goshala_cows_1787030030277.jpg';
import hillsNandiImg from '../assets/images/hills_nandi_1787030131434.jpg';
import farmhouseImg from '../assets/images/farmhouse_land_1787030061317.jpg';

// DATA DEFINITIONS
const LOCATIONS_DATA = [
  // LEFT SIDE (Top to Bottom)
  {
    id: 'doddaballapura-corridor',
    index: 0,
    side: 'left',
    title: 'Doddaballapura Growth Corridor',
    description: 'Located in the fast-developing North Bangalore corridor with strong connectivity and long-term growth potential.',
    category: 'growth',
    categoryLabel: 'Infrastructure & Growth',
    image: highwayCorridorImg,
    fallbackImage: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=600&auto=format&fit=crop&q=80',
    distanceKm: 8,
    travelTimeMins: 12,
    highlightTag: 'Primary Growth Axis',
    keyPoints: [
      'Strategically connected via SH-09 (State Highway 9)',
      'Direct link to Satellite Town Ring Road (STRR)',
      'Rapid infrastructure expansion with 4-lane & 6-lane expressways',
      'High capital appreciation corridor in North Bangalore'
    ],
    connectivityRoute: 'Directly on SH-09 & Doddaballapura Bypass',
    mapCoordinates: { x: 32, y: 28 },
    anchorAngle: 145
  },
  {
    id: 'itir-sez-kiadb-khir',
    index: 1,
    side: 'left',
    title: 'ITIR / SEZ, KIADB, KHIR & KWIN City Projects',
    description: 'Major upcoming commercial, industrial, and technology developments are located within the surrounding growth belt.',
    category: 'industrial',
    categoryLabel: 'Tech & Industrial Hubs',
    image: techParkImg,
    fallbackImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    distanceKm: 14,
    travelTimeMins: 18,
    highlightTag: 'Economic Catalyst',
    keyPoints: [
      'Foxconn Mega Manufacturing Facility (300+ Acres)',
      'KIADB Industrial Area & Hardware Aerospace Park',
      'KHIR (Knowledge, Healthcare, Innovation & Research) City',
      'KWIN City mega development generating 100,000+ jobs'
    ],
    connectivityRoute: 'Via Doddaballapura Industrial Area & Devanahalli Link Rd',
    mapCoordinates: { x: 26, y: 48 },
    anchorAngle: 175
  },
  {
    id: 'ghati-subramanya-temple',
    index: 2,
    side: 'left',
    title: 'Ghati Subramanya Temple',
    description: 'A prominent spiritual and cultural landmark located close to the project.',
    category: 'spiritual',
    categoryLabel: 'Spiritual & Heritage',
    image: templeGhatiImg,
    fallbackImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&auto=format&fit=crop&q=80',
    distanceKm: 9,
    travelTimeMins: 14,
    highlightTag: 'Historic Landmark',
    keyPoints: [
      '600+ years old celebrated Dravidian heritage temple',
      'Attracts thousands of visitors & pilgrims weekly',
      'Preserved cultural sanctuary with peaceful green foothills',
      'Renowned for annual cattle fair and cultural festivals'
    ],
    connectivityRoute: 'Via Tubagere Main Road & Ghati Temple Link',
    mapCoordinates: { x: 28, y: 70 },
    anchorAngle: 205
  },
  {
    id: 'visvesvaraya-check-dam',
    index: 3,
    side: 'left',
    title: 'Sir M. Visvesvaraya Check Dam',
    description: 'A notable nearby water resource adding ecological and scenic value to the surrounding region.',
    category: 'ecology',
    categoryLabel: 'Ecological & Water Body',
    image: checkDamImg,
    fallbackImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80',
    distanceKm: 6,
    travelTimeMins: 10,
    highlightTag: 'Scenic Waterbody',
    keyPoints: [
      'Engineered water conservation reservoir named after Bharat Ratna Sir M.V.',
      'Ensures abundant groundwater table & pristine local ecology',
      'Scenic green haven with migratory bird habitat',
      'Provides serene countryside views and cool microclimate'
    ],
    connectivityRoute: 'Direct rural arterial access via scenic lakeside lane',
    mapCoordinates: { x: 38, y: 88 },
    anchorAngle: 240
  },

  // RIGHT SIDE (Top to Bottom)
  {
    id: 'rashtrothana-go-shala',
    index: 4,
    side: 'right',
    title: 'Rashtrothana Go Shala',
    description: 'A nearby cultural and heritage destination associated with traditional cattle conservation.',
    category: 'heritage',
    categoryLabel: 'Cultural & Eco-Sanctuary',
    image: goshalaImg,
    fallbackImage: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=600&auto=format&fit=crop&q=80',
    distanceKm: 7,
    travelTimeMins: 11,
    highlightTag: 'Heritage Sanctuary',
    keyPoints: [
      'Spread across sprawling green acres preserving native Desi breeds',
      'Promotes organic farming, sustainability, and educational tours',
      'Wholesome pastoral environment and quiet natural ambiance',
      'Hub for traditional Vedic and sustainable living practices'
    ],
    connectivityRoute: 'Via Ghati - Doddaballapura connecting road',
    mapCoordinates: { x: 68, y: 28 },
    anchorAngle: 35
  },
  {
    id: 'makali-durga-nandi-hills',
    index: 5,
    side: 'right',
    title: 'Makali Durga Hill & Nandi Hills',
    description: 'Popular trekking and weekend destinations conveniently accessible from the project location.',
    category: 'tourism',
    categoryLabel: 'Adventure & Eco-Tourism',
    image: hillsNandiImg,
    fallbackImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=80',
    distanceKm: 12,
    travelTimeMins: 18,
    highlightTag: 'Tourism & Trekking',
    keyPoints: [
      'Makalidurga Fort & Trekking Peak (1,350 meters above sea level)',
      'Panoramic 360-degree views of lakes and railway track curving below',
      'Proximity to Nandi Hills sunrise viewpoint & historical fortresses',
      'High-demand ecotourism hotspot for weekend outdoor escapes'
    ],
    connectivityRoute: 'Via Makalidurga Railway Station Rd & SH-09',
    mapCoordinates: { x: 74, y: 48 },
    anchorAngle: 5
  },
  {
    id: 'regional-connectivity',
    index: 6,
    side: 'right',
    title: 'Excellent Regional Connectivity',
    description: 'Convenient access to SH-09, STRR, Doddaballapura town, North Bangalore employment hubs, and Kempegowda International Airport.',
    category: 'connectivity',
    categoryLabel: 'Multi-Modal Corridors',
    image: highwayCorridorImg,
    fallbackImage: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=600&auto=format&fit=crop&q=80',
    distanceKm: 28,
    travelTimeMins: 32,
    highlightTag: 'Airport & STRR Access',
    keyPoints: [
      '30-35 mins smooth drive to Kempegowda International Airport (BLR)',
      'Signal-free access via Satellite Town Ring Road (STRR - NH 948A)',
      'Direct arterial connection to Hebbal, Yelahanka, and Manyata Tech Park',
      'Active Doddaballapura suburban railway connectivity to Bangalore City'
    ],
    connectivityRoute: 'SH-09 -> STRR -> Devanahalli Airport Corridor',
    mapCoordinates: { x: 72, y: 70 },
    anchorAngle: 335
  },
  {
    id: 'long-term-farmhouse-potential',
    index: 7,
    side: 'right',
    title: 'Long-Term Farmhouse Investment Potential',
    description: 'With comparatively larger land availability and expanding infrastructure, Doddaballapura is emerging as a preferred farmhouse and managed farmland destination.',
    category: 'investment',
    categoryLabel: 'Farmland & Investment',
    image: farmhouseImg,
    fallbackImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80',
    distanceKm: 2,
    travelTimeMins: 4,
    highlightTag: 'High ROI & Lifestyle',
    keyPoints: [
      'Substantial parcel sizes with fertile soil and year-round green cover',
      'Booming trend for luxury weekend farmhouses & agro-retreats',
      'Rapid appreciation catalyzed by tech corridor expansion',
      'Safe, tranquil countryside living within easy reach of the metropolis'
    ],
    connectivityRoute: 'Encompasses Doddaballapura agricultural micro-belt',
    mapCoordinates: { x: 62, y: 88 },
    anchorAngle: 300
  }
];

const NORTH_BANGALORE_STATS = [
  { label: 'To BLR International Airport', value: '30-35 Mins', detail: 'Via STRR / SH-09' },
  { label: 'To Foxconn / KIADB SEZ', value: '15-18 Mins', detail: 'Rapid Industrial Belt' },
  { label: 'To Makalidurga & Nandi Hills', value: '18-25 Mins', detail: 'Scenic Trekking' },
  { label: 'To Doddaballapura Junction', value: '10 Mins', detail: 'Town & Commercial Centre' },
];

export default function App() {
  const [activeId, setActiveId] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [viewMode, setViewMode] = useState('infographic');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showDistanceRings, setShowDistanceRings] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [connectorPaths, setConnectorPaths] = useState([]);
  const [containerDim, setContainerDim] = useState({ width: 0, height: 0 });

  const containerRef = useRef(null);

  // Filter locations
  const filteredLocations = LOCATIONS_DATA.filter((loc) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'infrastructure') {
      return loc.category === 'growth' || loc.category === 'industrial' || loc.category === 'connectivity';
    }
    if (selectedCategory === 'heritage') {
      return loc.category === 'spiritual' || loc.category === 'heritage';
    }
    if (selectedCategory === 'nature') {
      return loc.category === 'ecology' || loc.category === 'tourism' || loc.category === 'investment';
    }
    return true;
  });

  const leftLocations = LOCATIONS_DATA.filter((loc) => loc.side === 'left');
  const rightLocations = LOCATIONS_DATA.filter((loc) => loc.side === 'right');

  // Handle location selection
  const handleSelectLocation = (id) => {
    setActiveId(id);
    const item = LOCATIONS_DATA.find((l) => l.id === id);
    if (item) {
      setSelectedLocation(item);
      if (isPlayingAudio) {
        speakLocation(item);
      }
    }
  };

  const handleCardClick = (item) => {
    setActiveId(item.id);
    setSelectedLocation(item);
    if (isPlayingAudio) {
      speakLocation(item);
    }
  };

  // Audio Tour implementation via SpeechSynthesis
  const speakLocation = (item) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = `${item.title}. ${item.description}. Located ${item.distanceKm} kilometers away, approximately ${item.travelTimeMins} minutes drive.`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleAudioTour = () => {
    if (isPlayingAudio) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const introText =
          'Welcome to the North Bangalore Strategic Location Showcase. Perfectly positioned for connectivity, convenience, and long-term growth.';
        const utterance = new SpeechSynthesisUtterance(introText);
        utterance.rate = 0.95;
        utterance.onend = () => {
          if (LOCATIONS_DATA[0]) {
            speakLocation(LOCATIONS_DATA[0]);
          }
        };
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  // Modal navigation
  const handlePrevLocation = () => {
    if (!selectedLocation) return;
    const currentIndex = LOCATIONS_DATA.findIndex((l) => l.id === selectedLocation.id);
    const prevIndex = (currentIndex - 1 + LOCATIONS_DATA.length) % LOCATIONS_DATA.length;
    setSelectedLocation(LOCATIONS_DATA[prevIndex]);
    setActiveId(LOCATIONS_DATA[prevIndex].id);
  };

  const handleNextLocation = () => {
    if (!selectedLocation) return;
    const currentIndex = LOCATIONS_DATA.findIndex((l) => l.id === selectedLocation.id);
    const nextIndex = (currentIndex + 1) % LOCATIONS_DATA.length;
    setSelectedLocation(LOCATIONS_DATA[nextIndex]);
    setActiveId(LOCATIONS_DATA[nextIndex].id);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'North Bangalore Strategic Location',
        text: 'Explore North Bangalore Strategic Location Infographic — Doddaballapura Growth Corridor, ITIR, Ghati Temple & connectivity.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Showcase link copied to clipboard!');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Connector lines calculation
  const updateConnectorPaths = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    if (containerRect.width < 1024) {
      setConnectorPaths([]);
      return;
    }

    setContainerDim({
      width: containerRect.width,
      height: containerRect.height,
    });

    const newPaths = [];

    LOCATIONS_DATA.forEach((loc) => {
      const nodeEl = document.getElementById(`map-node-${loc.id}`);
      const cardEl = document.getElementById(`location-card-${loc.id}`);

      if (nodeEl && cardEl) {
        const nodeRect = nodeEl.getBoundingClientRect();
        const cardRect = cardEl.getBoundingClientRect();

        const startX = nodeRect.left + nodeRect.width / 2 - containerRect.left;
        const startY = nodeRect.top + nodeRect.height / 2 - containerRect.top;

        let endX;
        const endY = cardRect.top + cardRect.height / 2 - containerRect.top;

        if (loc.side === 'left') {
          endX = cardRect.right - 10 - containerRect.left;
        } else {
          endX = cardRect.left + 10 - containerRect.left;
        }

        const midX = (startX + endX) / 2;
        const d = `M ${startX} ${startY} L ${midX} ${(startY + endY) / 2} L ${endX} ${endY}`;

        newPaths.push({
          id: loc.id,
          d,
          isActive: activeId === loc.id,
          startX,
          startY,
          endX,
          endY,
        });
      }
    });

    setConnectorPaths(newPaths);
  };

  useEffect(() => {
    updateConnectorPaths();

    const handleResize = () => {
      updateConnectorPaths();
    };

    window.addEventListener('resize', handleResize);
    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const t1 = setTimeout(updateConnectorPaths, 300);
    const t2 = setTimeout(updateConnectorPaths, 1000);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [activeId]);

  return (
    <div className="min-h-screen bg-[#faf8f2] text-[#1c2e26] flex flex-col justify-between selection:bg-[#c5a46d]/30 relative overflow-hidden font-body">
      
      {/* Background Subtle Paper Texture & Ambient Light */}
      <div className="absolute inset-0 bg-[radial-gradient(#d5cbb4_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-[#ebdcc0]/35 via-transparent to-transparent pointer-events-none blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 w-full flex-1 flex flex-col">
        
        {/* HEADER */}
        <header className="relative w-full text-center pt-8 pb-4 md:pt-10 md:pb-6 px-4 z-20">
          <div className="flex items-center justify-center gap-3 mb-1.5">
            <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent via-[#c5a46d] to-[#c5a46d]/80" />
            <div className="flex flex-col items-center">
              <span className="text-[11px] md:text-xs tracking-[0.35em] uppercase font-semibold text-[#a88243]">
                S T R A T E G I C
              </span>
              <div className="flex items-center justify-center text-[#b89352] mt-0.5">
                <svg className="w-4 h-3.5 fill-current opacity-90" viewBox="0 0 24 24">
                  <path d="M12 2C12 2 10.5 7 6 8.5C1.5 10 2 16 6 18C10 20 12 22 12 22C12 22 14 20 18 18C22 16 22.5 10 18 8.5C13.5 7 12 2 12 2Z" />
                </svg>
              </div>
            </div>
            <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent via-[#c5a46d] to-[#c5a46d]/80" />
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#0e3b2e] tracking-tight leading-[1.12] drop-shadow-xs">
            North Bangalore Location
          </h1>

          <div className="flex items-center justify-center gap-2 mt-2 md:mt-2.5 mb-2 md:mb-2.5">
            <div className="h-[1px] w-6 md:w-12 bg-gradient-to-r from-transparent to-[#c5a46d]" />
            <div className="w-2 h-2 rotate-45 border-[1.5px] border-[#c5a46d] bg-[#faf8f2]" />
            <div className="h-[1px] w-6 md:w-12 bg-gradient-to-l from-transparent to-[#c5a46d]" />
          </div>

          <p className="font-body text-sm sm:text-base md:text-[17px] text-[#2c443b] font-medium max-w-2xl mx-auto tracking-normal">
            Perfectly positioned for connectivity, convenience & long-term growth
          </p>
        </header>

        {/* TOOLBAR */}
        <div className="w-full max-w-6xl mx-auto px-4 py-2 mb-2 flex flex-wrap items-center justify-between gap-3 text-xs z-30 print:hidden">
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#8d6a2f] mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#c5a46d]" /> Filter:
            </span>
            {[
              { id: 'all', label: 'All Highlights (8)' },
              { id: 'infrastructure', label: 'Infrastructure & Tech' },
              { id: 'heritage', label: 'Spiritual & Heritage' },
              { id: 'nature', label: 'Nature & Farmlands' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full font-medium transition-all whitespace-nowrap border ${
                  selectedCategory === cat.id
                    ? 'bg-[#0e3b2e] text-[#f7e0a8] border-[#0e3b2e] shadow-xs'
                    : 'bg-[#faf8f2]/90 text-[#30483d] border-[#d8cdb4] hover:bg-[#eee8d7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* <div className="flex items-center p-0.5 rounded-xl bg-[#ece6d5] border border-[#d6cbaf]">
              <button
                onClick={() => setViewMode('infographic')}
                className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1 transition-all ${
                  viewMode === 'infographic'
                    ? 'bg-white text-[#0e3b2e] shadow-xs'
                    : 'text-[#50685b] hover:text-[#0e3b2e]'
                }`}
                title="Exact Infographic Visual"
              >
                <Compass className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Infographic</span>
              </button>
              <button
                onClick={() => setViewMode('interactive_matrix')}
                className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1 transition-all ${
                  viewMode === 'interactive_matrix'
                    ? 'bg-white text-[#0e3b2e] shadow-xs'
                    : 'text-[#50685b] hover:text-[#0e3b2e]'
                }`}
                title="Travel Times & Distances Table"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Distance Matrix</span>
              </button>
            </div> */}

            {/* <button
              onClick={toggleAudioTour}
              className={`p-1.5 rounded-xl border transition-colors flex items-center gap-1 font-medium ${
                isPlayingAudio
                  ? 'bg-[#0e3b2e] text-[#ffeaab] border-[#0e3b2e]'
                  : 'bg-[#faf8f2] text-[#30483d] border-[#d8cdb4] hover:bg-[#eee8d7]'
              }`}
              title={isPlayingAudio ? 'Stop Audio Tour' : 'Listen to Location Audio Tour'}
            >
              {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5 text-[#ffeaab]" /> : <Volume2 className="w-3.5 h-3.5 text-[#30483d]" />}
              <span className="hidden md:inline">{isPlayingAudio ? 'Mute' : 'Audio Tour'}</span>
            </button> */}

            {/* <button
              onClick={() => setShowDistanceRings(!showDistanceRings)}
              className={`p-1.5 rounded-xl border transition-colors hidden sm:flex items-center gap-1 font-medium ${
                showDistanceRings
                  ? 'bg-[#faf8f2] text-[#0e3b2e] border-[#c5a46d]'
                  : 'bg-[#faf8f2]/60 text-[#88988e] border-[#d8cdb4]'
              }`}
              title="Toggle Map Distance Reference Rings"
            >
              <Layers className="w-3.5 h-3.5 text-[#8a6a2d]" />
              <span className="hidden lg:inline">Rings</span>
            </button> */}

            <button
              onClick={handleShare}
              className="p-1.5 rounded-xl bg-[#faf8f2] hover:bg-[#eee8d7] text-[#30483d] border border-[#d8cdb4] transition-colors"
              title="Share Showcase"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>

            {/* <button
              onClick={handlePrint}
              className="p-1.5 rounded-xl bg-[#faf8f2] hover:bg-[#eee8d7] text-[#30483d] border border-[#d8cdb4] transition-colors"
              title="Print / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
            </button> */}
          </div>
        </div>

        {/* VIEW 1: INFOGRAPHIC POSTER VIEW */}
        {viewMode === 'infographic' && (
          <main className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-2 md:py-4 flex-1">
            
            {/* Desktop 3-Column Layout */}
            <div
              ref={containerRef}
              className="relative hidden lg:grid lg:grid-cols-12 gap-2 xl:gap-4 items-center min-h-[580px] xl:min-h-[640px]"
            >
              {/* Dynamic SVG Connector Lines */}
              {connectorPaths.length > 0 && (
                <svg
                  className="absolute inset-0 pointer-events-none z-10 w-full h-full"
                  viewBox={`0 0 ${containerDim.width} ${containerDim.height}`}
                  style={{ width: containerDim.width, height: containerDim.height }}
                >
                  <defs>
                    <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0e3b2e" />
                      <stop offset="50%" stopColor="#c5a46d" />
                      <stop offset="100%" stopColor="#0e3b2e" />
                    </linearGradient>
                  </defs>
                  {connectorPaths.map((p) => (
                    <g key={`path-group-${p.id}`}>
                      <path
                        d={p.d}
                        stroke={p.isActive ? '#0e3b2e' : '#c5a46d'}
                        strokeWidth={p.isActive ? 2.5 : 1.5}
                        strokeDasharray={p.isActive ? '5 3' : '4 4'}
                        strokeOpacity={p.isActive ? 1 : 0.75}
                        fill="none"
                        className="transition-all duration-300"
                      />
                      <circle
                        cx={p.endX}
                        cy={p.endY}
                        r={p.isActive ? 4 : 2.5}
                        fill={p.isActive ? '#0e3b2e' : '#c5a46d'}
                        stroke="#faf8f2"
                        strokeWidth="1.5"
                      />
                      {p.isActive && (
                        <circle r="3" fill="#ffdb8e" stroke="#0e3b2e" strokeWidth="1">
                          <animateMotion path={p.d} dur="1.8s" repeatCount="indefinite" rotate="auto" />
                        </circle>
                      )}
                    </g>
                  ))}
                </svg>
              )}

              {/* LEFT COLUMN: 4 Locations */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4 xl:space-y-6 z-20">
                {leftLocations.map((item) => {
                  const isFilteredOut =
                    selectedCategory !== 'all' &&
                    !filteredLocations.some((fl) => fl.id === item.id);

                  return (
                    <div
                      key={item.id}
                      id={`location-card-${item.id}`}
                      onClick={() => handleCardClick(item)}
                      className={`group relative flex items-start gap-3.5 sm:gap-4.5 p-2 sm:p-2.5 rounded-2xl cursor-pointer transition-all duration-300 ${
                        activeId === item.id
                          ? 'bg-[#f1ede2]/90 ring-1 ring-[#c5a46d] shadow-[0_8px_24px_rgba(14,56,43,0.1)] scale-[1.02]'
                          : 'hover:bg-[#f6f2e8]/80 hover:scale-[1.01]'
                      } ${isFilteredOut ? 'opacity-35 hover:opacity-100' : 'opacity-100'}`}
                    >
                      <div className="relative shrink-0">
                        <div
                          className={`w-[74px] h-[74px] sm:w-[84px] sm:h-[84px] md:w-[94px] md:h-[94px] lg:w-[102px] lg:h-[102px] rounded-full p-[2px] sm:p-[2.5px] transition-all duration-300 ${
                            activeId === item.id
                              ? 'bg-gradient-to-tr from-[#98783d] via-[#f7e0a8] to-[#c5a46d] shadow-[0_6px_20px_rgba(197,164,109,0.45)] scale-105'
                              : 'bg-gradient-to-tr from-[#a38244] via-[#e2c78f] to-[#bda26f] shadow-[0_4px_12px_rgba(0,0,0,0.12)]'
                          }`}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden bg-[#e6ede1] relative">
                            <img
                              src={item.image}
                              alt={item.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/15 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0 pt-0.5">
                        <h3 className="font-serif-luxury text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20.5px] font-bold text-[#0e3b2e] leading-snug tracking-tight group-hover:text-[#06241b] transition-colors">
                          {item.title}
                        </h3>
                        <p className="font-body text-[12.5px] sm:text-[13.5px] md:text-[14px] lg:text-[14.5px] text-[#334b3f] leading-[1.48] mt-1 font-normal">
                          {item.description}
                        </p>
                        {/* <div className="flex items-center gap-2 mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity text-[11px] font-medium text-[#7d602b]">
                          <span className="inline-flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a46d]" />
                            {item.distanceKm} km from site
                          </span>
                          <span>•</span>
                          <span className="text-[#3b5949] font-normal">{item.highlightTag}</span>
                        </div> */}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CENTER COLUMN: Circular Map */}
              <div className="lg:col-span-4 flex items-center justify-center z-20 py-2">
                <div className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] xl:max-w-[520px] aspect-square mx-auto flex items-center justify-center select-none">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#e8eedd]/40 via-[#f5f8f0]/20 to-[#dfebd4]/30 blur-xl pointer-events-none" />

                  <div className="relative w-full h-full rounded-full p-2 md:p-3 bg-gradient-to-br from-[#d4bc8b]/40 via-[#c5a46d]/20 to-[#a38349]/40 shadow-[0_12px_36px_rgba(30,55,40,0.12),inset_0_2px_8px_rgba(255,255,255,0.8)] border border-[#c5a46d]/60">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-[#eef4ea] border-2 border-[#bfa068]/80 shadow-[inset_0_4px_16px_rgba(0,0,0,0.06)]">
                      <svg className="w-full h-full absolute inset-0" viewBox="0 0 500 500">
                        <defs>
                          <radialGradient id="mapBg" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#f3f7ee" />
                            <stop offset="60%" stopColor="#eaf1e3" />
                            <stop offset="100%" stopColor="#dce8d2" />
                          </radialGradient>
                          <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#48a06f" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#81c784" stopOpacity="0" />
                          </radialGradient>
                        </defs>

                        <circle cx="250" cy="250" r="250" fill="url(#mapBg)" />

                        {/* Top Right Makalidurga Area */}
                        <path d="M 330,60 Q 380,50 420,90 Q 450,130 430,170 Q 380,180 340,140 Z" fill="#cce0c2" opacity="0.8" />
                        {/* East Nandi Hills Area */}
                        <path d="M 400,200 Q 470,220 460,300 Q 420,330 380,280 Q 370,230 400,200 Z" fill="#c5ddba" opacity="0.85" />
                        {/* West Green Belts */}
                        <path d="M 60,140 Q 110,110 150,160 Q 130,220 80,230 Q 40,190 60,140 Z" fill="#d3e6cb" opacity="0.75" />
                        {/* Water bodies */}
                        <path d="M 120,370 Q 150,350 180,380 Q 160,420 110,430 Q 90,400 120,370 Z" fill="#a8cde0" opacity="0.85" />
                        <path d="M 280,410 Q 310,395 330,425 Q 310,455 270,440 Z" fill="#b5d6e6" opacity="0.75" />

                        {/* Concentric rings */}
                        {showDistanceRings && (
                          <g stroke="#9ab890" strokeWidth="1" strokeDasharray="3 4" fill="none" opacity="0.65">
                            <circle cx="250" cy="250" r="60" />
                            <circle cx="250" cy="250" r="120" />
                            <circle cx="250" cy="250" r="180" />
                            <circle cx="250" cy="250" r="235" stroke="#bda26f" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.8" />
                          </g>
                        )}

                        {/* SH-09 Spine */}
                        <path d="M 240,0 L 246,160 L 250,250 L 254,340 L 260,500" stroke="#2c7a4d" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.85" />
                        <path d="M 240,0 L 246,160 L 250,250 L 254,340 L 260,500" stroke="#f6e8b8" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="4 3" fill="none" />

                        {/* STRR Ring Road */}
                        <path d="M 10,210 Q 140,240 250,250 Q 360,260 490,290" stroke="#358557" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.8" />
                        <path d="M 10,210 Q 140,240 250,250 Q 360,260 490,290" stroke="#ffffff" strokeWidth="1.4" strokeDasharray="3 3" fill="none" />

                        {/* Airport link */}
                        <path d="M 250,250 Q 330,310 440,370" stroke="#2e8052" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8" />
                        <path d="M 250,250 Q 330,310 440,370" stroke="#ffe89e" strokeWidth="1.4" strokeDasharray="3 3" fill="none" />

                        {/* Secondary roads */}
                        <g stroke="#67a77e" strokeWidth="1.6" fill="none" opacity="0.6">
                          <path d="M 250,250 L 160,150 L 130,120" />
                          <path d="M 250,250 L 350,160 L 410,120" />
                          <path d="M 250,250 L 170,330 L 120,400" />
                          <path d="M 130,220 L 170,120 L 246,160" />
                          <path d="M 320,256 L 390,190 L 440,220" />
                          <path d="M 254,340 L 330,380 L 390,440" />
                        </g>

                        {/* Landmark Labels */}
                        <g className="font-body text-[8px] sm:text-[9.5px] font-semibold fill-[#1e4835] opacity-90 select-none">
                          <rect x="200" y="145" width="85" height="14" rx="3" fill="#ffffff" fillOpacity="0.8" />
                          <text x="242" y="155" textAnchor="middle" fontSize="9" fontWeight="700" fill="#143e2c">
                            Doddaballapura
                          </text>
                          <text x="380" y="95" textAnchor="middle" fontSize="8" fill="#2d573f">
                            Makalidurga
                          </text>
                          <text x="425" y="240" textAnchor="middle" fontSize="8" fill="#2d573f">
                            Nandi Hills
                          </text>
                          <text x="120" y="140" textAnchor="middle" fontSize="8" fill="#2d573f">
                            Ghati Temple
                          </text>
                          <text x="110" y="235" textAnchor="middle" fontSize="8" fill="#2b533c">
                            KIADB / ITIR
                          </text>
                          <text x="410" y="380" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#143e2c">
                            BLR Int. Airport ✈
                          </text>
                        </g>

                        {/* Radar sweep */}
                        <g className="animate-radar origin-[250px_250px] pointer-events-none opacity-40">
                          <path d="M 250,250 L 250,15 A 235,235 0 0,1 485,250 Z" fill="url(#radarGradient)" opacity="0.25" />
                        </g>
                      </svg>

                      {/* Central Emerald Teardrop Location Pin */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center group cursor-pointer pointer-events-auto">
                        <div className="absolute -inset-4 rounded-full bg-[#1b6b45]/20 animate-ping pointer-events-none" />
                        <div className="absolute -inset-2.5 rounded-full bg-[#c5a46d]/30 animate-pulse pointer-events-none" />

                        <div className="relative transform hover:scale-115 transition-transform duration-300 drop-shadow-[0_8px_12px_rgba(10,40,25,0.4)]">
                          <svg className="w-10 h-12 sm:w-11 sm:h-13 md:w-12 md:h-14 fill-[#0a3827] stroke-[#e5d4a8] stroke-[1.2]" viewBox="0 0 384 512">
                            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z" />
                          </svg>
                          <div className="absolute top-[18%] left-1/2 -translate-x-1/2 text-white">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-white drop-shadow-xs" viewBox="0 0 24 24">
                              <path d="M12 2C12 2 10.5 7 6 8.5C1.5 10 2 16 6 18C10 20 12 22 12 22C12 22 14 20 18 18C22 16 22.5 10 18 8.5C13.5 7 12 2 12 2Z" />
                            </svg>
                          </div>
                        </div>

                        <div className="mt-1 px-2.5 py-0.5 rounded-full bg-[#0a3827]/90 text-[#f5ecd5] border border-[#c5a46d]/70 text-[9px] sm:text-[10px] font-semibold tracking-wide shadow-md whitespace-nowrap backdrop-blur-xs">
                          Project Location
                        </div>
                      </div>

                      {/* Compass */}
                      <div className="absolute top-3 right-3 flex flex-col items-center opacity-75 pointer-events-none">
                        <div className="w-6 h-6 rounded-full border border-[#a88243]/50 flex items-center justify-center bg-white/60 backdrop-blur-xs">
                          <span className="text-[9px] font-bold text-[#8d6928]">N</span>
                        </div>
                      </div>
                    </div>

                    {/* 8 Golden Anchor Nodes on circumference */}
                    {LOCATIONS_DATA.map((loc) => {
                      const rad = ((loc.anchorAngle - 90) * Math.PI) / 180;
                      const radiusPercent = 50;
                      const leftPercent = 50 + radiusPercent * Math.cos(rad);
                      const topPercent = 50 + radiusPercent * Math.sin(rad);

                      const isActive = activeId === loc.id;
                      const isHovered = hoveredNode === loc.id;

                      return (
                        <button
                          key={`node-${loc.id}`}
                          id={`map-node-${loc.id}`}
                          onClick={() => handleSelectLocation(loc.id)}
                          onMouseEnter={() => setHoveredNode(loc.id)}
                          onMouseLeave={() => setHoveredNode(null)}
                          style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
                          title={`${loc.title} (${loc.distanceKm} km)`}
                          className={`absolute -translate-x-1/2 -translate-y-1/2 z-40 rounded-full transition-all duration-300 focus:outline-hidden ${
                            isActive || isHovered
                              ? 'w-6 h-6 bg-[#0a3827] border-2 border-[#ffdb8e] shadow-[0_0_12px_#c5a46d] scale-125'
                              : 'w-4 h-4 sm:w-4.5 sm:h-4.5 bg-[#fbf9f4] border-2 border-[#b89352] shadow-xs hover:scale-115 hover:border-[#0a3827]'
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full mx-auto my-auto ${
                              isActive || isHovered ? 'bg-[#ffeaab]' : 'bg-[#a37f3e]'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: 4 Locations */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4 xl:space-y-6 z-20">
                {rightLocations.map((item) => {
                  const isFilteredOut =
                    selectedCategory !== 'all' &&
                    !filteredLocations.some((fl) => fl.id === item.id);

                  return (
                    <div
                      key={item.id}
                      id={`location-card-${item.id}`}
                      onClick={() => handleCardClick(item)}
                      className={`group relative flex items-start gap-3.5 sm:gap-4.5 p-2 sm:p-2.5 rounded-2xl cursor-pointer transition-all duration-300 ${
                        activeId === item.id
                          ? 'bg-[#f1ede2]/90 ring-1 ring-[#c5a46d] shadow-[0_8px_24px_rgba(14,56,43,0.1)] scale-[1.02]'
                          : 'hover:bg-[#f6f2e8]/80 hover:scale-[1.01]'
                      } ${isFilteredOut ? 'opacity-35 hover:opacity-100' : 'opacity-100'}`}
                    >
                      <div className="relative shrink-0">
                        <div
                          className={`w-[74px] h-[74px] sm:w-[84px] sm:h-[84px] md:w-[94px] md:h-[94px] lg:w-[102px] lg:h-[102px] rounded-full p-[2px] sm:p-[2.5px] transition-all duration-300 ${
                            activeId === item.id
                              ? 'bg-gradient-to-tr from-[#98783d] via-[#f7e0a8] to-[#c5a46d] shadow-[0_6px_20px_rgba(197,164,109,0.45)] scale-105'
                              : 'bg-gradient-to-tr from-[#a38244] via-[#e2c78f] to-[#bda26f] shadow-[0_4px_12px_rgba(0,0,0,0.12)]'
                          }`}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden bg-[#e6ede1] relative">
                            <img
                              src={item.image}
                              alt={item.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/15 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0 pt-0.5">
                        <h3 className="font-serif-luxury text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20.5px] font-bold text-[#0e3b2e] leading-snug tracking-tight group-hover:text-[#06241b] transition-colors">
                          {item.title}
                        </h3>
                        <p className="font-body text-[12.5px] sm:text-[13.5px] md:text-[14px] lg:text-[14.5px] text-[#334b3f] leading-[1.48] mt-1 font-normal">
                          {item.description}
                        </p>
                        {/* <div className="flex items-center gap-2 mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity text-[11px] font-medium text-[#7d602b]">
                          <span className="inline-flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a46d]" />
                            {item.distanceKm} km from site
                          </span>
                          <span>•</span>
                          <span className="text-[#3b5949] font-normal">{item.highlightTag}</span>
                        </div> */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile View */}
            <div className="w-full px-3 py-2 space-y-6 lg:hidden">
              <div className="relative pl-3 space-y-4">
                <div className="absolute left-[34px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#c5a46d] via-[#a38244] to-[#c5a46d]/40" />

                {filteredLocations.map((loc) => {
                  const isActive = activeId === loc.id;
                  return (
                    <div key={loc.id} className="relative z-10">
                      <div
                        className={`absolute left-[16px] top-7 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all ${
                          isActive ? 'bg-[#0e3b2e] border-[#ffdb8e] scale-125 shadow-[0_0_8px_#c5a46d]' : 'bg-[#faf8f2] border-[#c5a46d]'
                        }`}
                      />
                      <div className="pl-6">
                        <div
                          onClick={() => {
                            handleSelectLocation(loc.id);
                            setSelectedLocation(loc);
                          }}
                          className="p-3 rounded-2xl bg-[#faf8f2]/95 border border-[#e4dccb] shadow-xs flex items-start gap-3 cursor-pointer"
                        >
                          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#c5a46d]">
                            <img src={loc.image} alt={loc.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h3 className="font-serif-luxury text-base font-bold text-[#0e3b2e] leading-snug">
                              {loc.title}
                            </h3>
                            <p className="font-body text-xs text-[#334b3f] mt-1 line-clamp-2">
                              {loc.description}
                            </p>
                            <span className="inline-block mt-1 text-[11px] font-semibold text-[#8d6a2f]">
                              {loc.distanceKm} km • ~{loc.travelTimeMins} mins
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </main>
        )}

        {/* VIEW 2: DISTANCE MATRIX */}
        {viewMode === 'interactive_matrix' && (
          <div className="w-full max-w-6xl mx-auto px-4 py-6 animate-fade-in">
            <div className="bg-[#faf8f2] rounded-3xl border border-[#c5a46d]/60 shadow-[0_12px_36px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-[#0e3b2e] to-[#184e3e] text-white flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#d8be87] font-semibold">
                    North Bangalore Connectivity Matrix
                  </span>
                  <h2 className="font-serif-luxury text-2xl md:text-3xl font-bold mt-1 text-[#fdfbf6]">
                    Strategic Distance & Travel Times
                  </h2>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-4 py-2 rounded-2xl border border-white/20">
                  <Clock className="w-5 h-5 text-[#f7e0a8]" />
                  <div className="text-left">
                    <p className="text-[10px] text-[#e0ede6] uppercase tracking-wider font-semibold">Average Commute</p>
                    <p className="text-sm font-bold text-white">10 - 30 Mins</p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f0ebd9] text-[#6b501d] text-[11px] uppercase tracking-wider font-bold border-b border-[#dfd5bf]">
                      <th className="py-3.5 px-4 sm:px-6">Destination Landmark</th>
                      <th className="py-3.5 px-4">Category</th>
                      <th className="py-3.5 px-4 text-center">Distance</th>
                      <th className="py-3.5 px-4 text-center">Travel Time</th>
                      <th className="py-3.5 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ece5d4] text-[13.5px] text-[#223d32]">
                    {filteredLocations.map((loc) => (
                      <tr
                        key={loc.id}
                        onClick={() => setSelectedLocation(loc)}
                        className="hover:bg-[#f3eee2] transition-colors cursor-pointer group"
                      >
                        <td className="py-3.5 px-4 sm:px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-[#98783d] to-[#e2c78f] shrink-0">
                              <img src={loc.image} alt={loc.title} referrerPolicy="no-referrer" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <div>
                              <p className="font-serif-luxury font-bold text-[15px] sm:text-base text-[#0e3b2e]">
                                {loc.title}
                              </p>
                              <p className="text-xs text-[#556e62] line-clamp-1 max-w-sm">
                                {loc.description}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2.5 py-1 rounded-full bg-[#ebdcb9] text-[#5e4315] text-[11px] font-semibold">
                            {loc.categoryLabel}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center font-bold text-[#0e3b2e]">
                          {loc.distanceKm} km
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span className="px-2.5 py-1 rounded-lg bg-[#0e3b2e] text-[#f7e0a8] text-xs font-bold">
                            {loc.travelTimeMins} mins
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button className="p-1.5 rounded-lg bg-white group-hover:bg-[#0e3b2e] group-hover:text-white text-[#0e3b2e] border border-[#d8ccb1] transition-all inline-flex items-center gap-1 text-xs font-semibold">
                            <span>Explore</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Quick Stats Strip */}
        {/* <div className="w-full max-w-6xl mx-auto px-4 mt-6 mb-4 z-20 print:hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {NORTH_BANGALORE_STATS.map((stat, i) => (
              <div
                key={i}
                className="p-3 sm:p-3.5 rounded-2xl bg-[#faf8f2]/90 border border-[#d9ccb0] shadow-xs hover:border-[#c5a46d] transition-all backdrop-blur-xs flex flex-col justify-between"
              >
                <div className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-wider font-semibold text-[#86672c]">
                  <MapPin className="w-3 h-3 text-[#c5a46d]" />
                  <span>{stat.detail}</span>
                </div>
                <div className="mt-1">
                  <p className="text-base sm:text-lg font-bold text-[#0e3b2e] font-serif-luxury">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#3d594b] font-medium leading-tight mt-0.5">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

      </div>

      {/* FOOTER */}
      <footer className="relative w-full overflow-hidden mt-6 pt-12 pb-6 z-10">
        <div className="absolute inset-0 z-0">
          <img
            src={bgHillsMist}
            alt="Misty Nandi Hills landscape"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-bottom opacity-60 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f2] via-[#faf8f2]/60 to-[#faf8f2]/20" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-2 text-xs text-[#2b4438]">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-12 bg-[#c5a46d]/60" />
            <span className="font-serif-luxury text-sm font-bold text-[#0e3b2e] uppercase tracking-widest">
              North Bangalore Growth Belt
            </span>
            <div className="h-[1px] w-12 bg-[#c5a46d]/60" />
          </div>
          <p className="text-[11.5px] text-[#4d665a] max-w-xl mx-auto">
            A master-planned location offering high-speed connectivity via SH-09, STRR, proximity to Kempegowda International Airport, and prime farmland tranquility.
          </p>
        </div>
      </footer>

      {/* DETAIL MODAL */}
      {/* {selectedLocation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#091b14]/70 backdrop-blur-md animate-fade-in">
          <div
            className="relative w-full max-w-2xl bg-[#faf8f2] rounded-3xl border border-[#c5a46d]/60 shadow-[0_24px_60px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col max-h-[92vh] animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#0d382b]">
              <img
                src={selectedLocation.image}
                alt={selectedLocation.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e382b] via-[#0e382b]/40 to-transparent" />

              <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/60 flex items-center justify-center backdrop-blur-xs transition-colors z-20 border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#c5a46d] text-[#0a2e22] text-xs font-bold uppercase tracking-wider shadow-sm">
                  {selectedLocation.categoryLabel}
                </span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold leading-tight drop-shadow-md text-[#fbf8ee]">
                  {selectedLocation.title}
                </h2>
              </div>
            </div>

            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-[#1b3329]">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 p-3 rounded-2xl bg-[#f0ebd9] border border-[#d9ccb0]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#0e382b] text-[#f7e0a8] flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10.5px] uppercase tracking-wider text-[#637d71] font-semibold">Distance</p>
                    <p className="text-sm font-bold text-[#0e382b]">{selectedLocation.distanceKm} km</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#0e382b] text-[#f7e0a8] flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10.5px] uppercase tracking-wider text-[#637d71] font-semibold">Travel Time</p>
                    <p className="text-sm font-bold text-[#0e382b]">~{selectedLocation.travelTimeMins} mins</p>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#0e382b] text-[#f7e0a8] flex items-center justify-center shrink-0 shadow-xs">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10.5px] uppercase tracking-wider text-[#637d71] font-semibold">Access Route</p>
                    <p className="text-xs font-semibold text-[#0e382b] truncate">{selectedLocation.connectivityRoute}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-[#e5decb] shadow-xs">
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#8a682c] mb-1">
                  Overview & Location Value
                </h4>
                <p className="font-body text-[15px] text-[#223d32] leading-relaxed">
                  {selectedLocation.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-[#8a682c] mb-2">
                  Strategic Advantages & Key Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedLocation.keyPoints.map((pt, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-white/50 border border-[#e8e2d4] text-[13px] text-[#2a4539]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2c7a4d] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 bg-[#f3efe4] border-t border-[#dfd7c2] flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevLocation}
                  className="p-2 rounded-xl bg-white hover:bg-[#eae3d2] text-[#0e382b] border border-[#d3c8b0] flex items-center gap-1 text-xs font-semibold transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous</span>
                </button>
                <button
                  onClick={handleNextLocation}
                  className="p-2 rounded-xl bg-white hover:bg-[#eae3d2] text-[#0e382b] border border-[#d3c8b0] flex items-center gap-1 text-xs font-semibold transition-colors"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`${selectedLocation.title}: ${selectedLocation.description}`);
                    alert('Location details copied!');
                  }}
                  className="px-3 py-2 rounded-xl bg-white hover:bg-[#eae3d2] text-[#0e382b] border border-[#d3c8b0] flex items-center gap-1.5 text-xs font-semibold transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="px-4 py-2 rounded-xl bg-[#0e382b] hover:bg-[#07241b] text-[#fbf6ea] text-xs font-semibold transition-colors shadow-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
