import { create } from 'zustand';

interface UIStore {
  isLoading: boolean;
  isNavScrolled: boolean;
  mobileMenuOpen: boolean;
  setLoading: (v: boolean) => void;
  setNavScrolled: (v: boolean) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isLoading: true,
  isNavScrolled: false,
  mobileMenuOpen: false,

  setLoading: (v: boolean) => set({ isLoading: v }),
  setNavScrolled: (v: boolean) => set({ isNavScrolled: v }),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
}));
