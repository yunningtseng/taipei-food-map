import { Hit } from 'instantsearch.js';

export type Shop = {
  name: string;
  nationalPhoneNumber: string;
  formattedAddress: string;
  orderType: string[];
  paymentType: string[];
  priceLevel: string;
  primaryType: string;
  rating: number;
  location: { [key: string]: number };
  googleMapsUri: string;
  otherType: string[];
  photoNames: string[];
  imgUrls: Record<string, string>;
};

export type ShopHit = Shop & Hit;
