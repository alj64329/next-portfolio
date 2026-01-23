'use client'

import { ChildType, locations } from '@/app/constants'
import { clImages } from '@/app/constants/cloudinary'
import useLocationStore from '@/app/store/locations'
import useWindowStore from '@/app/store/window'
import { CldImage } from 'next-cloudinary'
import React, { useState } from 'react'

type Props = {
    setFinderOpen:()=>void
}
const projects = locations.work.children ?? []

const PhoneDock = ({setFinderOpen}: Props) => {
    const {setActiveLocation} = useLocationStore()
    const {openWindow} = useWindowStore()
    // const [isMounted, setIsMounted] = useState(false);

    const handleOpenProjectFinder = (project:ChildType)=>{
        console.log(project)
        setFinderOpen()
        setActiveLocation(project)
        // openWindow(project)
        openWindow("finder")
    }
  return (
    <div className='w-full h-[10%] z-10'>
        <div>
            <div className='w-[90%] mx-auto bg-[rgba(60,60,60,0.5)] rounded-4xl'>
            <ul
            className='px-2 flex gap-4'>
            {projects.map((project)=>(
                <li key={project.id}
                onClick={()=>handleOpenProjectFinder(project)}>
                    <div className='flex flex-col w-fit p-2 items-center lg:p-3'>
                        <CldImage 
                        src={clImages.folder}
                        width={30}
                        height={40}
                        className='w-[30px] md:w-[45px] lg:w-[65px] cursor-pointer'
                        alt={project.name}/>
                    </div>
                </li>
            ))}
        </ul>
            </div>
        </div>
    </div>
  )
}

export default PhoneDock