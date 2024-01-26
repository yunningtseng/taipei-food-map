import { create } from 'zustand';
import { createSelectors } from './createSelectors';
import { QueryShopAction, QueryShopState } from '../types/queryShop';

const useQueryShopStoreBase = create<QueryShopState & QueryShopAction>(
  (set) => ({
    textQuery: '蛋糕',
    locationCenter: {
      longitude: 121.508511,
      latitude: 25.042274,
    },
    distance: 1,
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
    setLocationCenter: (locationCenter) => set(() => ({ locationCenter })),
    setDistance: (distance) => set(() => ({ distance })),
    setRating: (rating) => set(() => ({ rating })),
    setOrderType: (orderType) => set(() => ({ orderType })),
  })
);

const useQueryShopStore = createSelectors(useQueryShopStoreBase);

export default useQueryShopStore;
