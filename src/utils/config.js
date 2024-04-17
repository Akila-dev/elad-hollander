import { create } from 'zustand';

export const useStore = create((set) => ({
  translated: false,
  toggleTranslated: () => set((state) => ({ translated: !state.translated })),
}));
