import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { message } from "antd";


export const useUserStore = create(
  persist(
    (set) => ({
      language: 'zh_TW',
      setLanguage: (language) => set({ language }),
      darkMode: false,
      setDarkMode: (mode) => set({ darkMode: mode }),
      token:'',
      setToken:(token) => set({ token }),
      username:'',
      setUsername:(username) => set({ username }),
      logout: () => set(() => {
        message.success('登出成功')
        return
      }),
    })
  ),
    {
      name: 'user'
    }
)
