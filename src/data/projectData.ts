import { Amenity, HighlightItem, LocationAdvantage, GalleryItem, PlotInfo } from '../types';
import { IMAGES } from './images';
import galleryImg1 from "../assets/images/1.webp"
import galleryImg2 from "../assets/images/2.webp"
import galleryImg3 from "../assets/images/3.webp"
import galleryImg4 from "../assets/images/4.webp"

import galImg1 from "../assets/images/gal-1.png"
import galImg2 from "../assets/images/gal-2.png"
import galImg3 from "../assets/images/gal-3.png"
import galImg4 from "../assets/images/gal-4.png"
import galImg5 from "../assets/images/gal-5.png"
import galImg6 from "../assets/images/gal-6.png"
import galImg7 from "../assets/images/gal-7.png"
import galImg8 from "../assets/images/gal-8.png"
import galImg9 from "../assets/images/gal-9.png"
import galImg10 from "../assets/images/gal-10.png"

export const PROJECT_INFO = {
  title: 'SAMRUDHI SYLVAN RETREAT',
  tagline: 'FARM LAND FOR SALE IN DODDABALLAPUR',
  subheading: 'Own your piece of nature in North Bangalore. Peaceful surroundings, rich land, and a sustainable lifestyle – all within your reach for around',
  budget: '₹50 LAKHS*',
  budgetLabel: 'BUDGET AROUND',
  phoneNumber: '+919900009487',
  displayPhone: '+91 99000 09487',
  phone: '+919900009487',
  email: 'info@thesamrudhi.com',
  location: 'Doddaballapur, North Bangalore',
  siteAddress: 'Doddaballapur, North Bangalore (Near SH-09 & STRR)',
  officeAddress: 'Behind Swathi Gardenia Restaurant, E Block, Sahakar Nagar, Bangalore - 560092',
  totalAcres: '58 Acres',
  plotsCount: '30+ Plots',
};

export const HERO_CHIPS = [
  { id: '1', text: 'Peaceful & Green Surroundings', icon: 'Trees' },
  { id: '2', text: 'Located in Doddaballapur', icon: 'MapPin' },
  { id: '3', text: 'Great Investment Opportunity', icon: 'TrendingUp' },
  { id: '4', text: 'Perfect for Nature Lovers & Retreats', icon: 'Home' },
];

export const STATS = [
  { id: '1', value: '50+', label: 'ACRES', icon: 'Sprout' },
  { id: '2', value: '30+', label: 'PLOTS', icon: 'Grid' },
  { id: '3', label: 'CLUB HOUSE', value: 'LUXURY', icon: 'Building' },
  { id: '4', label: 'BEEKEEPING', value: 'ORGANIC', icon: 'Honey' },
  { id: '5', label: 'FRUIT CULTIVATION', value: 'ORCHARD', icon: 'Apple' },
  { id: '6', label: 'ANIMAL HUSBANDRY', value: 'LIVESTOCK', icon: 'Beef' },
];

export const STATS_BANNER_ITEMS = [
  { id: '1', value: '58 ACRES', label: 'VAST PROJECT AREA', subtext: 'Gated Organic Farmland', iconName: 'Trees' },
  { id: '2', value: '30+ PLOTS', label: 'MANAGED FARMLAND', subtext: '20 Guntas & 1 Acre Plots', iconName: 'Home' },
  { id: '3', value: '24/7', label: 'GATED SECURITY', subtext: 'Fencing & Security Guards', iconName: 'ShieldCheck' },
  { id: '4', value: 'LUXURY', label: 'CLUB HOUSE', subtext: 'Swimming Pool & Retreat', iconName: 'Building' },
  { id: '5', value: 'ORGANIC', label: 'MANGO & BEEKEEPING', subtext: 'Ethical Agriculture', iconName: 'Sparkles' },
  { id: '6', value: 'BANK LOAN', label: 'CLEAR TITLES', subtext: '100% Legal Transparency', iconName: 'Award' },
];

export const LOCATION_ADVANTAGES: LocationAdvantage[] = [
  { id: '1', text: 'Located Near State Highway-09', iconName: 'Compass' },
  { id: '2', text: '25-Minute Drive From KIAL', iconName: 'Plane' },
  { id: '3', text: '6 KM From Shri Ghati Subrahmanya Temple', iconName: 'Landmark' },
  { id: '4', text: 'KHIR City Is Only 15 Minutes Away', iconName: 'Building2' },
];

export const LOCATION_BENEFITS = [
  { id: '1', title: 'State Highway-09', time: '1 Min', distance: 'Adjacent', iconName: 'Compass' },
  { id: '2', title: 'KIAL Int Airport', time: '25 Mins', distance: '28 KM', iconName: 'Plane' },
  { id: '3', title: 'Ghati Subramanya', time: '10 Mins', distance: '6 KM', iconName: 'Sparkles' },
  { id: '4', title: 'KHIR City & STRR', time: '15 Mins', distance: '12 KM', iconName: 'Navigation' },
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    id: '1',
    title: 'Vast Project Area: 58 Acres',
    description: 'The project spans an impressive area of 58 acres, providing ample space for diverse development and amenities.',
    iconName: 'Maximize2',
  },
  {
    id: '2',
    title: "Wooden House Retreat: Nature's Escape",
    description: 'Rajavruksha will engage wooden house for rental basis in weekend entertainment program.',
    iconName: 'Home',
  },
  {
    id: '3',
    title: "Enjoy Mango's Natural Richness!",
    description: 'Our vibrant orchard boasts mango varieties like Malgova, Totapuri, Mallika, and Banganapalli, each tree contributing to a rich, flavorful harvest.',
    iconName: 'Sun',
  },
  {
    id: '4',
    title: 'Skillful Passion Fruit Farming Practices',
    description: "Our passion fruit cultivation activities are characterized by innovation, expertise, and a deep appreciation for this exotic fruit's unique flavor and nutritional benefits.",
    iconName: 'Sparkles',
  },
  {
    id: '5',
    title: 'Rich Soil and Fertile Land',
    description: 'Our farmland is renowned for its rich and fertile soil, providing the ideal foundation for a thriving agricultural venture.',
    iconName: 'Layers',
  },
  {
    id: '6',
    title: 'Water Resources',
    description: 'Abundant access to natural water sources, ensuring your crops will flourish year-round.',
    iconName: 'Droplets',
  },
  {
    id: '7',
    title: 'Security',
    description: "We prioritize your investment's safety, providing 24/7 security to protect your agricultural pursuits.",
    iconName: 'ShieldCheck',
  },
];

export const SPECIAL_ACTIVITIES = [
  {
    id: '1',
    title: 'Beekeeping',
    subtitle: 'Sustainable Honey Farming',
    description: 'Ethical honey production supports biodiversity while generating high-value products like raw honey, beeswax, and royal jelly. The global honey market is booming, offering lucrative opportunities for local farmers.',
    image: IMAGES.beekeepingHoney,
  },
  {
    id: '2',
    title: 'Animal Husbandry',
    subtitle: 'Ethical Livestock Care',
    description: 'A well-managed livestock farm ensures quality dairy and wool production, creating sustainable income sources. The demand for organic, ethically raised products is rising, providing economic stability for farmers.',
    image: IMAGES.cattleGrazing,
  },
  {
    id: '3',
    title: 'Mango Farming',
    subtitle: 'Premium Organic Harvest',
    description: 'Organically grown mangoes fetch premium prices in both local and export markets. Value-added products like dried mango, pulp, and juice increase profitability, ensuring long-term financial sustainability.',
    image: IMAGES.mangoHarvest,
  },
];

export const AMENITIES: Amenity[] = [
  { id: '1', title: 'Paver Pathways', iconName: 'Footprints' },
  { id: '2', title: 'Playground', iconName: 'Smile' },
  { id: '3', title: 'Private Water Supply', iconName: 'Droplet' },
  { id: '4', title: 'Water System', iconName: 'Waves' },
  { id: '5', title: 'Security & Fencing', iconName: 'Shield' },
  { id: '6', title: 'Electricity', iconName: 'Zap' },
];

export const WHY_CHOOSE_US = [
  {
    id: '1',
    title: 'Expertise in Agriculture',
    description: 'Our team of agricultural experts is ready to assist and advise you in every step of your farming journey.',
    iconName: 'Sprout',
  },
  {
    id: '2',
    title: 'Investment Potential',
    description: "Farmland is not just a dream; it's a sound financial investment with growing demand in the market.",
    iconName: 'TrendingUp',
  },
  {
    id: '3',
    title: 'Sustainability',
    description: "We're committed to sustainable farming practices and environmental conservation.",
    iconName: 'Globe',
  },
  {
    id: '4',
    title: 'Legal Compliance',
    description: 'Hassle-free process in terms of your documentation that carries from our expert team members.',
    iconName: 'FileCheck',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Panoramic Farmland Vistas',
    category: 'Farmland',
    imageUrl:galleryImg1,
    description: 'Expansive 58-acre rich agricultural land in North Bangalore.',
  },
  {
    id: 'g2',
    title: 'Avenue Plantation Pathway',
    category: 'Amenities',
    imageUrl: galImg1,
    description: 'Tree-lined paved interior roads with coconut palm canopy.',
  },
  {
    id: 'g3',
    title: 'Organic Cultivation Plots',
    category: 'Farmland',
    imageUrl: galImg2,
    description: 'Fertile red soil plots pre-drip irrigated and ready for farming.',
  },
  // {
  //   id: 'g4',
  //   title: 'Wooden Cottage Retreat',
  //   category: 'Cottage',
  //   imageUrl: galleryImg2,
  //   description: 'Luxury wooden retreat house for weekend staycation and rentals.',
  // },
  {
    id: 'g5',
    title: 'Aerial View of Estate',
    category: 'Aerial',
    imageUrl: galleryImg3,
    description: 'Bird eye perspective showcasing the master planned farmland layout.',
  },
  // {
  //   id: 'g6',
  //   title: 'Sunset Over Sylvan Retreat',
  //   category: 'Farmland',
  //   imageUrl: galleryImg4,
  //   description: 'Peaceful sunset views over scenic Doddaballapur countryside.',
  // },
  {
    id: 'g7',
    title: 'Sunset Over Sylvan Retreat',
    category: 'Farmland',
    imageUrl: galImg3,
    description: 'Peaceful sunset views over scenic Doddaballapur countryside.',
  },
   {
    id: 'g8',
    title: 'Sunset Over Sylvan Retreat',
    category: 'Farmland',
    imageUrl: galImg4,
    description: 'Peaceful sunset views over scenic Doddaballapur countryside.',
  },

  {
    id: 'g9',
    title: 'Sunset Over Sylvan Retreat',
    category: 'Farmland',
    imageUrl: galImg5,
    description: 'Peaceful sunset views over scenic Doddaballapur countryside.',
  },

  {
    id: 'g10',
    title: 'Sunset Over Sylvan Retreat',
    category: 'Farmland',
    imageUrl: galImg6,
    description: 'Peaceful sunset views over scenic Doddaballapur countryside.',
  },

  {
    id: 'g11',
    title: 'Sunset Over Sylvan Retreat',
    category: 'Farmland',
    imageUrl: galImg7,
    description: 'Peaceful sunset views over scenic Doddaballapur countryside.',
  },

  {
    id: 'g12',
    title: 'Sunset Over Sylvan Retreat',
    category: 'Farmland',
    imageUrl: galImg8,
    description: 'Peaceful sunset views over scenic Doddaballapur countryside.',
  },

  {
    id: 'g13',
    title: 'Sunset Over Sylvan Retreat',
    category: 'Farmland',
    imageUrl: galImg9,
    description: 'Peaceful sunset views over scenic Doddaballapur countryside.',
  },

  {
    id: 'g14',
    title: 'Sunset Over Sylvan Retreat',
    category: 'Farmland',
    imageUrl: galImg10,
    description: 'Peaceful sunset views over scenic Doddaballapur countryside.',
  },


];

export const PLOTS_INVENTORY: PlotInfo[] = [
  { id: 'p1', plotNumber: 'A-01', sizeGuntas: 20, sizeSqFt: 21780, status: 'Available', facing: 'East', estimatedPriceLakhs: 48 },
  { id: 'p2', plotNumber: 'A-02', sizeGuntas: 20, sizeSqFt: 21780, status: 'Booked', facing: 'East', estimatedPriceLakhs: 48 },
  { id: 'p3', plotNumber: 'A-03', sizeGuntas: 21, sizeSqFt: 22869, status: 'Available', facing: 'North-East', estimatedPriceLakhs: 50 },
  { id: 'p4', plotNumber: 'B-01', sizeGuntas: 30, sizeSqFt: 32670, status: 'Available', facing: 'North', estimatedPriceLakhs: 72 },
  { id: 'p5', plotNumber: 'B-02', sizeGuntas: 30, sizeSqFt: 32670, status: 'Reserved', facing: 'North', estimatedPriceLakhs: 72 },
  { id: 'p6', plotNumber: 'C-01', sizeGuntas: 40, sizeSqFt: 43560, status: 'Available', facing: 'East', estimatedPriceLakhs: 95 },
  { id: 'p7', plotNumber: 'C-02', sizeGuntas: 40, sizeSqFt: 43560, status: 'Booked', facing: 'North', estimatedPriceLakhs: 95 },
  { id: 'p8', plotNumber: 'D-01', sizeGuntas: 80, sizeSqFt: 87120, status: 'Available', facing: 'East', estimatedPriceLakhs: 185 },
];
