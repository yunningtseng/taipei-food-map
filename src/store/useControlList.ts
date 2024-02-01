import { create } from 'zustand';
import { createSelectors } from './createSelectors';

type OpenListState = {
  isShopOpenList: boolean;
};

type OpenListAction = {
  setShopOpenList: (isOpen: boolean) => void;
};

const useControlOpenListBase = create<OpenListState & OpenListAction>(
  (set) => ({
    isShopOpenList: false,
    setShopOpenList: (isOpen: boolean) => set({ isShopOpenList: !isOpen }),
  })
);

const useControlOpenListStore = createSelectors(useControlOpenListBase);

export default useControlOpenListStore;
