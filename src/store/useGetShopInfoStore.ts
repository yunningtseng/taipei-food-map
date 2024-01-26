import { create } from 'zustand';
import { MapPlace } from '../types/place';
import { createSelectors } from './createSelectors';

type ShopInfoState = {
  selectedShop: MapPlace | null;
  hoveredShop: MapPlace | null;
};

type ShopInfoAction = {
  setSelectedShop: (place: MapPlace | null) => void;
  setHoveredShop: (place: MapPlace | null) => void;
};

const useGetShopInfoBase = create<ShopInfoState & ShopInfoAction>((set) => ({
  selectedShop: null,
  hoveredShop: null,
  setSelectedShop: (place) =>
    set(() => ({
      selectedShop: place,
    })),
  setHoveredShop: (place) => set(() => ({ hoveredShop: place })),
}));

const useGetShopInfoStore = createSelectors(useGetShopInfoBase);

export default useGetShopInfoStore;
