import { User } from '@supabase/supabase-js';
import { create } from 'zustand';

type AuthStoreType = {
  user: User | null;
  saveUser: (userInfo: User | null) => void;
  initial: boolean;
}

export const authStore = create<AuthStoreType>((set) => ({
  user: null,
  initial: false,
  saveUser: (userInfo) => set({user: userInfo, initial: true})
}))