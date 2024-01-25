import { create } from 'zustand';
import { MapPlaceInfo } from '../types/mapPlaceInfo';
import { createSelectors } from './createSelectors';

type ShopInfoState = {
  selectedShop: MapPlaceInfo | null;
  hoveredShop: MapPlaceInfo | null;
};

type ShopInfoAction = {
  setSelectedShop: (place: MapPlaceInfo | null) => void;
  setHoveredShop: (place: MapPlaceInfo | null) => void;
};

const useShopInfoStoreBase = create<ShopInfoState & ShopInfoAction>((set) => ({
  selectedShop: null,
  hoveredShop: null,
  setSelectedShop: (place) =>
    set(() => ({
      selectedShop: place,
    })),
  setHoveredShop: (place) => set(() => ({ hoveredShop: place })),
}));

const useShopInfoStore = createSelectors(useShopInfoStoreBase);

export default useShopInfoStore;
