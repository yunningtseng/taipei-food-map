import { create } from 'zustand';
import { createSelectors } from './createSelectors';

type ListOpenState = {
  isShopListOpen: boolean;
};

type ListOpenAction = {
  setShopListOpen: (isOpen: boolean) => void;
};

const useListOpenBase = create<ListOpenState & ListOpenAction>(
  (set) => ({
    isShopListOpen: true,
    setShopListOpen: (isOpen) => set({ isShopListOpen: isOpen }),
  })
);

const useListOpenStore = createSelectors(useListOpenBase);

export default useListOpenStore;
