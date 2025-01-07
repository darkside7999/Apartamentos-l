export interface Apartment {
  id: number;
  name: string;
  price: number;
  maxGuests: number;
  baseGuests: number;
  floor: string;
  size: number;
  terrace: {
    size: number;
    hasSeaView: boolean;
  };
  bedrooms: number;
  bathrooms: number;
  image: string;
  description: string;
  amenities: string[];
  rules: {
    checkOut: string;
    checkIn: string;
    pets: string;
    cleaning: string;
    smoking: boolean;
  };
}