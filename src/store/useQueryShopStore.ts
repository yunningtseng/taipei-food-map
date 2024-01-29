import { create } from 'zustand';
import { LocationCenter, SelectKey } from '../types/queryShop';
import { createSelectors } from './createSelectors';

type QueryShopState = {
  locationCenter: LocationCenter;
  distance: number;
  foodType: string;
  line: string;
  station: string;
  minRating: string;
  sortBy: string;
};

type QueryShopAction = {
  setLocationCenter: (locationCenter: LocationCenter) => void;
  setDistance: (distance: number) => void;
  setSelectValue: ({
    selectKey,
    value,
  }: {
    selectKey: SelectKey;
    value: string;
  }) => void;
};

const useQueryShopStoreBase = create<QueryShopState & QueryShopAction>(
  (set) => ({
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
    foodType: '蛋糕',
    line: 'BL',
    station: '西門',
    minRating: '不限',
    sortBy: '相關度',
    setSelectValue: ({ selectKey, value }) =>
      set(() => ({ [selectKey]: value })),
    setLocationCenter: (locationCenter) => set(() => ({ locationCenter })),
    setDistance: (distance) => set(() => ({ distance })),
  })
);

const useQueryShopStore = createSelectors(useQueryShopStoreBase);

export default useQueryShopStore;
