import { create } from "zustand";

interface TabsProps {
    readonly type: 'Home' | 'Profile' | 'CoverLetter' | 'GuestBook' | 'Project';
    readonly setType: (newType: "Home" | "Profile" | 'CoverLetter' | 'GuestBook' |'Project') => void;
}

const useTabStore = create<TabsProps>((set) => ({
    type : 'Home',
    setType : (newType) => set({type: newType})
  }));

export default useTabStore
