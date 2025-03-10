import { create } from "zustand"
import type { Item, User } from "../interfaces/global"


type ItemStoreState = { items: Item[] }

type ItemStoreActions = {
  setItems: (items: Item[]) => void
}

export const useItemStore = create<ItemStoreState & ItemStoreActions>((set) => ({
  items: [],
  setItems: (set_items: Item[]) => set({items: set_items}),
}))

type UserStoreState = { user: User }

type UserStoreActions = {
  setUser: (user: User) => void
}

type UserStore = UserStoreState & UserStoreActions

export const useUserStore = create<UserStore>((set) => ({
  user: { login: '', avatar_url: '' },
  setUser: (user: User) => set({ user }),
}))