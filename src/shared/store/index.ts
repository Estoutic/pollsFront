import { create } from "zustand";

const useStore = create((set, get) => ({
  polls: [],
  loading: false,
  error: null,
  
}));
