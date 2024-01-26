export type RawPlace = {
  id: string;
  addressComponents: {
    longText: string;
    types: string[];
  }[];
  location: {
    latitude: number;
    longitude: number;
  };
  rating: number;
  userRatingCount: number;
  googleMapsUri: string;
  displayName: {
    text: string;
  };
  takeout?: boolean;
  dineIn?: boolean;
  delivery?: boolean;
  primaryType: string;
  reviews?: {
    name: string;
    relativePublishTimeDescription: string;
    rating: number;
    text: {
      text: string;
      languageCode: string;
    };
    originalText: {
      text: string;
      languageCode: string;
    };
    authorAttribution: {
      displayName: string;
      uri: string;
      photoUri: string;
    };
    publishTime: string;
  }[];
  photos?: {
    name: string;
    widthPx: number;
    heightPx: number;
  }[];
  editorialSummary?: {
    text: string;
  };
};

export type Place = Omit<
  RawPlace,
  | 'displayName'
  | 'addressComponents'
  | 'reviews'
  | 'dineIn'
  | 'takeout'
  | 'delivery'
  | 'photos'
  | 'editorialSummary'
> & {
  displayName: string;
  formattedAddress: string;
  orderType: string[];
  ratingStar: number;
  photoNames: string[];
  imgUrls: Record<string, string>;
  editorialSummary: string;
};

export type MapPlace = {
  id: string;
  name: string;
  description: string;
  longitude: number;
  latitude: number;
};
