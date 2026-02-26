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
    visitor: {
      today: string;
      total: string;
    };
    visitorLoaded: boolean;
    visitorLoading: boolean;
    setGuestBookData: (updater: GuestBookUpdater) => void;
    setGuestBookLoaded: (loaded: boolean) => void;
    setVisitor: (visitor: { today: string; total: string }) => void;
    setVisitorLoaded: (loaded: boolean) => void;
    setVisitorLoading: (loading: boolean) => void;
  }

export const useGuestBookStore = create<GuestBookStore>((set) => ({
    guestBookData: [],
    guestBookLoaded: false,
    visitor: {
      today: "",
      total: "",
    },
    visitorLoaded: false,
    visitorLoading: false,
    setGuestBookData: (updater) =>
    set((state) => ({
      guestBookData:
        typeof updater === "function" ? updater(state.guestBookData) : updater,
    })),
    setGuestBookLoaded: (loaded) => set({ guestBookLoaded: loaded }),
    setVisitor: (visitor) => set({ visitor }),
    setVisitorLoaded: (loaded) => set({ visitorLoaded: loaded }),
    setVisitorLoading: (loading) => set({ visitorLoading: loading }),
}))


