import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations, type LocationType } from "../constants";

const DEFAULT_LOCATION = locations.work

interface StateType{
    activeLocation:LocationType | null 
}

interface LocationStoreTye{
    activeLocation:LocationType
    setActiveLocation:(location:LocationType|null|any)=>void
    resetActiveLocation:()=>void
}

const useLocationStore= create<LocationStoreTye>()(
    immer((set)=>({
    activeLocation:DEFAULT_LOCATION,

    setActiveLocation :(location=null)=>
        set((state:StateType)=>{
            state.activeLocation = location
        }),
    resetActiveLocation:()=>
        set((state:StateType)=>{
            state.activeLocation=DEFAULT_LOCATION
        })

}))
)

export default useLocationStore