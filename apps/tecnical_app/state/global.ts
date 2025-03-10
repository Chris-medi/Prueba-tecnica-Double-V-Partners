import { create } from "zustand"
import { persist } from "zustand/middleware";

import type { Item, User } from "../interfaces/global"


type ItemStoreState = { items: Item[] }

type ItemStoreActions = {
  setItems: (items: Item[]) => void
}

export const useItemStore = create(
  persist(
    (set: any, get: any) => ({
      items: [],
      setItems: (set_items: Item[]) => set({items: set_items}),
    }),
    {
      name: "items-storage", // name of the item in the storage (must be unique)// (optional) by default, 'localStorage' is used
    }
  )
)

type UserStoreState = { user: User }

type UserStoreActions = {
  setUser: (user: User) => void
}

type UserStore = UserStoreState & UserStoreActions

export const useUserStore = create<UserStore>((set) => ({
  user: { login: '', avatar_url: '' },
  setUser: (user: User) => set({ user }),
}))