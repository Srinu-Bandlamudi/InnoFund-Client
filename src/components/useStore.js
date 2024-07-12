import create from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(persist(
  (set) => ({
    token: null,
    setToken: (token) => set({ token }),
    clearToken: () => set({ token: null }),
  }),
  {
    name: 'auth-storage', // unique name
    getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
  }
));

export default useAuthStore;
