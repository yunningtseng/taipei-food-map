import { create } from 'zustand';
import { createSelectors } from './createSelectors';

type CardOpenState = {
  isCardOpen: boolean;
};

type CardOpenAction = {
  setCardOpen: (isCardOpen: boolean) => void;
};

const useCardOpenBase = create<CardOpenState & CardOpenAction>((set) => ({
  isCardOpen: false,
  setCardOpen: (isCardOpen) => set(() => ({ isCardOpen: isCardOpen })),
}));

const useCardOpenStore = createSelectors(useCardOpenBase);

export default useCardOpenStore;
