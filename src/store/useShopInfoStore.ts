import { create } from 'zustand';
import { PlaceInfo } from '../types/placeInfo';

type ShopInfoState = {
  selectedShop: PlaceInfo | null;
  hoveredShop: PlaceInfo | null;
};

type ShopInfoAction = {
  setSelectedShop: (place: PlaceInfo | null) => void;
  setHoveredShop: (place: PlaceInfo | null) => void;
};

const useShopInfoStore = create<ShopInfoState & ShopInfoAction>((set) => ({
  selectedShop: null,
  hoveredShop: null,
  setSelectedShop: (place) => set({ selectedShop: place }),
  setHoveredShop: (place) => set({ hoveredShop: place }),
}));

export default useShopInfoStore;
