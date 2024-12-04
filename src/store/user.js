import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set) => ({
      language: 'zh_TW',
      setLanguage: (language) => set({ language },),
      darkMode: false,
      setDarkMode: (mode) => set({ darkMode: mode }),
    }),
    {
      name: 'user'
    }
  )
)