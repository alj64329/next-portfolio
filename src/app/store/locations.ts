import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ChildType, GrandChildType, locations, type LocationType } from "../constants";

const DEFAULT_LOCATION = locations.work

interface StateType{
    activeLocation:LocationType | null |ChildType |GrandChildType
}

interface LocationStoreTye{
    activeLocation:LocationType|ChildType|GrandChildType
    setActiveLocation:(location:LocationType|null|ChildType|GrandChildType)=>void
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