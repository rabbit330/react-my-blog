import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const usePostStore = create(
  persist(
    (set) => ({
      posts:[],
      setPosts: (posts) => set({ posts },),
    }),
    {
      name: 'post'
    }
  )
)