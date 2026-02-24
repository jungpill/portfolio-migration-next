import { create } from "zustand";

export interface GuestBookProps {
    readonly content: string;
    readonly date: string;
    readonly id: number;
    readonly userId: string;
    readonly password: string;
}

type GuestBookUpdater =
  | GuestBookProps[]
  | ((prev: GuestBookProps[]) => GuestBookProps[]);

interface GuestBookStore {
    guestBookData: GuestBookProps[];
    setGuestBookData: (updater: GuestBookUpdater) => void;
  }

export const useGuestBookStore = create<GuestBookStore>((set) => ({
    guestBookData: [],
    setGuestBookData: (updater) =>
    set((state) => ({
      guestBookData:
        typeof updater === "function" ? updater(state.guestBookData) : updater,
    })),
}))


