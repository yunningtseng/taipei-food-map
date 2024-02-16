export type RawPlace = {
  id: string;
  displayName: {
    text: string;
  };
  addressComponents: {
    longText: string;
    types: string[];
  }[];
  location: {
    longitude: number;
    latitude: number;
  };
  primaryType?: string;
  dineIn?: boolean;
  takeout?: boolean;
  delivery?: boolean;
  googleMapsUri?: string;
  rating: number;
  userRatingCount: number;
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
  | 'location'
  | 'addressComponents'
  | 'reviews'
  | 'photos'
  | 'editorialSummary'
> & {
  name: string;
  address: string;
  distance: number;
  longitude: number;
  latitude: number;
  rating: number;
  userRatingCount: number;
  editorialSummary?: string;
  photoNames?: string[];
  imgUrls?: Record<string, string>;
};

export type MapPlaceProperties = {
  id: string;
  name: string;
  address: string;
  distance: number;
  rating: number;
  userRatingCount: number;
  photoNames: string;
};

export type MapMrtProperties = {
  type: FeatureCollection;
  features: {
    type: Feature;
    properties: {
      station: string;
      longitude: number;
      latitude: number;
    };
    geometry: {
      type: Point;
      coordinates: [number, number];
    };
  }[];
};
