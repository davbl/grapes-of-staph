import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useStore = create(
  immer((set) => ({
    gram: "",
    mannitol: "",
    catalase: "",
    step: 1,

    updateSelection: (test, value) =>
      set((state) => {
        state[test] = value;
        if (test === "gram") {
          state.mannitol = "";
          state.catalase = "";
          state.step = value === "positive" ? 2 : 1;
        } else if (test === "mannitol") {
          state.catalase = "";
          state.step = value === "no-growth" ? 2 : 3;
        }
      }),
  }))
);

export default useStore;
