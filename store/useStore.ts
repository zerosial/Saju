import { create } from "zustand";

interface SajuState {
  sajuData: {
    name: string;
    year: string;
    month: string;
    day: string;
    time: string;
  };
  setSajuData: (data: Partial<SajuState["sajuData"]>) => void;
}

export const useStore = create<SajuState>((set) => ({
  sajuData: {
    name: "김로켓",
    year: "1980",
    month: "8",
    day: "27",
    time: "08:10",
  },
  setSajuData: (data) =>
    set((state) => ({
      sajuData: { ...state.sajuData, ...data },
    })),
}));
