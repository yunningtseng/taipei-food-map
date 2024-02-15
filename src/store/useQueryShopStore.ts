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
      longitude: 121.517415,
      latitude: 25.04631,
    },
    distance: 1,
    locationRestriction: {
      rectangle: {
        low: {
          latitude: 25.037282570874147,
          longitude: 121.50750539728473,
        },
        high: {
          latitude: 25.055337418156775,
          longitude: 121.52732460271527,
        },
      },
    },
    foodType: '蛋糕',
    line: 'BL',
    station: '台北車站',
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
