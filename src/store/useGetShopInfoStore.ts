import { create } from 'zustand';
import { Place } from '../types/place';
import { createSelectors } from './createSelectors';

type ShopInfoState = {
  selectedShop: Place | null;
  hoveredShop: Place | null;
};

type ShopInfoAction = {
  setSelectedShop: (place: Place | null) => void;
  setHoveredShop: (place: Place | null) => void;
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
