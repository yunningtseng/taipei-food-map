import { create } from 'zustand';
import { createSelectors } from './createSelectors';

type SetLocationRestrictionProps = {
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
  locationRestriction: SetLocationRestrictionProps;
};

type QueryShopState = GetLocationsProps & {
  rating: number;
  orderType: string;
};

type QueryShopAction = {
  setTextQuery: (queryText: string) => void;
  setRating: (rating: number) => void;
  setOrderType: (orderType: string) => void;
};

const useQueryShopStoreBase = create<QueryShopState & QueryShopAction>(
  (set) => ({
    textQuery: '蛋糕',
    locationRestriction: {
      rectangle: {
        low: {
          latitude: 25.033246565971,
          longitude: 121.49860172164702,
        },
        high: {
          latitude: 25.051301423061208,
          longitude: 121.51842027835298,
        },
      },
    },
    rating: 0,
    orderType: '',
    setTextQuery: (textQuery) => set(() => ({ textQuery })),
    setLocationRestriction: (
      locationRestriction: SetLocationRestrictionProps
    ) => set(() => ({ locationRestriction })),
    setRating: (rating) => set(() => ({ rating })),
    setOrderType: (orderType) => set(() => ({ orderType })),
  })
);

const useQueryShopStore = createSelectors(useQueryShopStoreBase);

export default useQueryShopStore;
