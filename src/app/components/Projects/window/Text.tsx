import useWindowStore from "@/app/store/window"
import WindowControlls from "./WindowControlls"
import { ChildType, GrandChildType } from "@/app/constants"
import WindowWrapper from "@/app/hoc/WindowWrapper"
import { useEffect, useState } from "react"
import useLocationStore from "@/app/store/locations"

const Text = () => {
    const {activeLocation, setActiveLocation} = useLocationStore()
    const [data, setData] =useState<GrandChildType>({
        id:0,
        name:"",
        iconImg:"",
        kind:"",
        fileType:""
    })

    useEffect(()=>{
    const children = (activeLocation as ChildType).children as GrandChildType[]

    const txt = children.find(item => item.fileType === "txt")?? null

    if(!txt) return

    setData(txt)
    },[])
    
  return (
    <div className="h-[20%]">
        <div className='window-header'>
            <WindowControlls target="txtfile"/>
        </div>

        <div className="p-5 space-y-6 bg-white">
            {data.image &&(
                <div className="w-full">
                    <img src={data.image} alt={data.name}
                    className="w-full h-auto rounded"/>
                </div>
            )}

            {data.subtitle&&
            <h3 className="space-y-5 leading-relaxed text-base text-gray-800">
                {data.subtitle}
            </h3>}

            {(data.description&& data.description.length>0)&&(
                <div className="space-y-3 leading-relaxed text-base text-gray-800">
                    {data.description.map((p,i)=>(
                        <p key={i}>
                            {p}
                        </p>
                    ))}
                </div>   
            )}

        </div>
    </div>
  )
}

const TextWindow = WindowWrapper(Text, 'txtfile')
export default TextWindow