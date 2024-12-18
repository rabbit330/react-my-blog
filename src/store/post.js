import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const usePostStore = create(
  persist(
    (set) => ({
      posts:[],
      setPosts: (posts) => set({ posts },),
      comments:[],
      setComments:(comments) => set({ comments }),
    }),
    {
      name: 'post'
    }
  )
)