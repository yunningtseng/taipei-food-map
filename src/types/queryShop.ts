type LocationRestrictionProps = {
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

export type GetLocationsProps = {
  textQuery: string;
  locationRestriction: LocationRestrictionProps;
  rating: number;
};

type LocationCenter = {
  longitude: number;
  latitude: number;
};

export type QueryShopState = GetLocationsProps & {
  locationCenter: LocationCenter;
  distance: number;
  orderType: string;
};

export type QueryShopAction = {
  setTextQuery: (queryText: string) => void;
  setLocationCenter: (locationCenter: LocationCenter) => void;
  setDistance: (distance: number) => void;
  setRating: (rating: number) => void;
  setOrderType: (orderType: string) => void;
  rating: number;
};
