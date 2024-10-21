import { create } from 'zustand';

export const useStore = create((set, get) => ({

    //for shoping cart management
    canvas: null,
    setcanvas: (can) => set({ canvas: can })


}));