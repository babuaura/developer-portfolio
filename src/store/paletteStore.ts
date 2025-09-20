import { create } from 'zustand';
import { useTheme } from 'next-themes';

interface PaletteState {
  isPaletteOpen: boolean;
  openPalette: () => void;
  closePalette: () => void;
  togglePalette: () => void;
}
export const usePaletteStore = create<PaletteState>((set) => ({
  isPaletteOpen: false,
  
  openPalette: () => set({ isPaletteOpen: true }),
  
  closePalette: () => set({ isPaletteOpen: false }),
  
  togglePalette: () => set((state) => ({ isPaletteOpen: !state.isPaletteOpen })),
}));

export const useThemeActions = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return { toggleTheme };
};