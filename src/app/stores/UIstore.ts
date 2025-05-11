
import { create } from "zustand";

interface UIState {
  showBullets: boolean;
  setShowBullets: (v: boolean) => void;

  cometIsVisible: boolean;
  setCometIsVisible: (v: boolean) => void;

  isScrollModeFree: boolean;
  setScrollMode: (v: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  showBullets: false,
  setShowBullets: (v) => set({ showBullets: v }),

  cometIsVisible: true,
  setCometIsVisible: (v) => set({ cometIsVisible: v }),

  isScrollModeFree: false, 
  setScrollMode: (v) => set({ isScrollModeFree: v }),
}));