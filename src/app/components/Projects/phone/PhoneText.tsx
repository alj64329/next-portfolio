'use client'

import { ChildType, GrandChildType } from '@/app/constants'
import useLocationStore from '@/app/store/locations'
import React, { useEffect, useState } from 'react'


const PhoneText = () => {
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
    console.log(txt)

    if(!txt) return

    setData(txt)
    },[activeLocation])
  return (
    <div 
    className="absolute z-20 top-[5%] h-full">
        <div className="p-5 space-y-6 bg-white h-full">
            {data.image &&(
                <div className="w-full">
                    <img src={data.image} alt={data.name}
                    className="w-full h-auto rounded"/>
                </div>
            )}

            {data.subtitle&&
            <h3 className="space-y-5 leading-relaxed text-md text-center text-gray-800">
                {data.subtitle}
            </h3>}

            {(data.description&& data.description.length>0)&&(
                <div className="space-y-3 leading-relaxed text-[12px] text-gray-800">
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

export default PhoneText