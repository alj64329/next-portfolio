'use client'
import useLocationStore from '@/app/store/locations'
import useWindowStore from '@/app/store/window'
import React, { useEffect } from 'react'
import WindowControlls from './WindowControlls'
import { locations } from '@/app/constants'
import WindowWrapper from '@/app/hoc/WindowWrapper'
import { clImages } from '@/app/constants/cloudinary'
import { CldImage } from 'next-cloudinary'

type Props = {}

const Finder = (props: Props) => {
    const {openWindow} = useWindowStore()
    const {activeLocation, setActiveLocation} = useLocationStore()

    const openItem =(item:any)=>{
        if(item.fileType === 'pdf') return openWindow('resume')

        if(item.kind === 'folder') return setActiveLocation(item)

        if(['fig','url'].includes(item.fileType) && item.href){
        return window.open(item.href,"_blank")
        }

        openWindow(`${item.fileType}${item.kind}`, item)
    }

    useEffect(()=>{
        console.log(activeLocation)
    },[activeLocation])
  return (
    <div
    className='h-[60%] finder'>
        <div className='window-header'>
            <WindowControlls target="finder"/>
        </div>

        <div className='bg-white flex h-full'>
            <div className='sidebar'>
                <h3>Favorites</h3>
                <ul>
                    {Object.values(locations).map((item)=>(
                    <li key={item.id} onClick={()=>setActiveLocation(item)}
                    className={`${activeLocation&&item.id === activeLocation.id?"active":"not-active"}`}>
                        <item.icon className='text-[7px] lg:text-xs'
                        />
                        <p className='text-[5px] lg:text-[10px] font-medium truncate'>
                        {item.name}
                        </p>
                    </li>
                    ))}
                </ul>
            </div>


            <div className='w-full'>
                <ul className='content h-full w-full'>
                    {activeLocation?.children?.map((item)=>(
                    <li
                    key={item.id}
                    className={`${item.position} text-black`}
                    onClick={()=>openItem(item)}
                    >
                        <CldImage
                        width={64}
                        height={64} 
                        src={item.iconImg} 
                        alt={item.name}
                        />
                        <p className='text-black max-w-40'>
                        {item.name}
                        </p>
                    </li>
                    ))}
                </ul>
            </div>
        </div>

    </div>
  )
}

const FinderWindow = WindowWrapper(Finder, 'finder')
export default FinderWindow