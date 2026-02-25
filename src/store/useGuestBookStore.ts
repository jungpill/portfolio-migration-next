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
    guestBookLoaded: boolean;
    setGuestBookData: (updater: GuestBookUpdater) => void;
    setGuestBookLoaded: (loaded: boolean) => void;
  }

export const useGuestBookStore = create<GuestBookStore>((set) => ({
    guestBookData: [],
    guestBookLoaded: false,
    setGuestBookData: (updater) =>
    set((state) => ({
      guestBookData:
        typeof updater === "function" ? updater(state.guestBookData) : updater,
    })),
    setGuestBookLoaded: (loaded) => set({ guestBookLoaded: loaded }),
}))


