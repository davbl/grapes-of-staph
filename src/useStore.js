import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useStore = create(
  immer((set) => ({
    pcr: "",
    maldi: "",
    gram: "",
    mannitol: "",
    catalase: "",
    step: 1,

    updateTraditionalState: (assay, value) =>
      set((state) => {
        state[assay] = value;
        if (assay === "gram") {
          state.mannitol = "";
          state.catalase = "";
          state.step = value === "positive" ? 2 : 1;
        } else if (assay === "mannitol") {
          state.catalase = "";
          state.step = value === "no-growth" ? 2 : 3;
        }
      }),

    updateMolecularState: (assay, value) =>
      set((state) => {
        state[assay] = value;
      }),

    // for Reset button
    resetSelections: () =>
      set({
        pcr: false,
        maldi: false,
        gram: false,
        mannitol: false,
        catalase: false,
        step: 1,
      }),
  }))
);

export default useStore;
