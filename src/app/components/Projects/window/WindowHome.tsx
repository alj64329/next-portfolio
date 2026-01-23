'use client'
import { ChildType, locations } from '@/app/constants'
import { clImages } from '@/app/constants/cloudinary'
import useLocationStore from '@/app/store/locations'
import useWindowStore from '@/app/store/window'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { CldImage } from 'next-cloudinary'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
    boundsRef:React.RefObject<HTMLDivElement|null>
    setFinderOpen:()=>void
}

const projects = locations.work.children ?? []
const WindowHome = ({boundsRef, setFinderOpen}: Props) => {
    const {setActiveLocation} = useLocationStore()
    const {openWindow} = useWindowStore()
    const [isMounted, setIsMounted] = useState(false);

    const handleOpenProjectFinder = (project:ChildType)=>{
        setFinderOpen()
        setActiveLocation(project)
        // openWindow(project)
        openWindow("finder")
    }


    useEffect(() => {
        setIsMounted(true);
    }, []);

    useGSAP(() => {
        console.log(boundsRef.current)
        if (!boundsRef.current) return;

        Draggable.create(".folder", {
            type: 'x,y',
            bounds: boundsRef.current,
            inertia: true,
            zIndexBoost: false,
            onPress() {
                gsap.set(this.target, { zIndex: 50 });
            }
        });
    },
    {
        scope: boundsRef,
        dependencies: [isMounted]
    }
    );


  return (
    <section id='window-home'>
        <ul>
            {projects.map((project)=>(
                <li key={project.id}
                className={`group folder absolute ${project.windowPosition?project.windowPosition:""}`}
                onClick={()=>handleOpenProjectFinder(project)}>
                    <div className='flex flex-col w-fit p-2 items-center lg:p-3'>
                        <CldImage 
                        src={clImages.folder}
                        width={30}
                        height={40}
                        className='w-[30px] md:w-[45px] lg:w-[65px]'
                        alt={project.name}/>
                        <p className='text-white text-shadow-lg/20 text-[12px] text-center px-1 rounded-md group-hover:bg-blue-500 transition-colors max-w-20 o'>
                            {project.name}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default WindowHome