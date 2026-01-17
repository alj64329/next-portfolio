import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants";


export type WindowKey = string
export interface WindowState{
    isOpen:boolean,
    zIndex:number,
    data:unknown |null
}

export interface WindowStore{
  windows: Record<WindowKey, WindowState>;
  nextZIndex: number;

  openWindow: (windowKey: WindowKey, data?: unknown | null) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
}

export interface StateType{
    windows:Record<WindowKey, WindowState>
    nextZIndex: number;
}
const useWindowStore = create<WindowStore>()(
    immer((set)=>({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX+1,
    openWindow:(windowKey:WindowKey, data)=>
        set((state:StateType)=>{
            const win = state.windows[windowKey]
            if(!win) return
            win.isOpen = true
            win.zIndex = state.nextZIndex
            win.data = data ?? win.data
            state.nextZIndex++;
        }),
    closeWindow:(windowKey:WindowKey)=> set((state:StateType)=>{
        const win = state.windows[windowKey]
        if(!win) return
        win.isOpen = false
        win.zIndex = INITIAL_Z_INDEX
        win.data = null
    }),
    focusWindow:(windowKey:WindowKey)=> set((state:StateType)=>{
        const win = state.windows[windowKey]
        if(!win) return
        win.zIndex = state.nextZIndex++
    }),

    }))
)

export default useWindowStore