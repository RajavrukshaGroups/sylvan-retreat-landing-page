export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message?: string;
  preferredDate?: string;
  pickupRequired?: boolean;
}

export interface Amenity {
  id: string;
  title: string;
  iconName: string;
  description?: string;
}

export interface HighlightItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  iconName: string;
}

export interface LocationAdvantage {
  id: string;
  text: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Farmland' | 'Cottage' | 'Amenities' | 'Aerial';
  imageUrl: string;
  description: string;
}

export interface PlotInfo {
  id: string;
  plotNumber: string;
  sizeGuntas: number;
  sizeSqFt: number;
  status: 'Available' | 'Booked' | 'Reserved';
  facing: 'East' | 'North' | 'North-East' | 'West';
  estimatedPriceLakhs: number;
}
