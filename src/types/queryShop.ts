export type LocationRestriction = {
  rectangle: {
    low: {
      latitude: number;
      longitude: number;
    };
    high: {
      latitude: number;
      longitude: number;
    };
  };
};

export type LocationCenter = {
  longitude: number;
  latitude: number;
};

export type SelectKey =
  | 'foodType'
  | 'line'
  | 'station'
  | 'minRating'
  | 'sortBy';
