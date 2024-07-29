import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useStore = create(
  immer((set) => ({
    gram: "",
    mannitol: "",
    catalase: "",
    step: 1,

    setGram: (value) =>
      set((state) => {
        state.gram = value;
        state.mannitol = "";
        state.catalase = "";
      }),

    setMannitol: (value) =>
      set((state) => {
        state.mannitol = value;
        state.catalase = "";
      }),

    setCatalase: (value) =>
      set((state) => {
        state.catalase = value;
      }),

    setStep: (step) =>
      set((state) => {
        state.step = step;
      }),
  }))
);

export default useStore;
