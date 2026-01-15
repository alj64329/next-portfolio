'use client'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import React, { useRef } from 'react'
import Navbar from './window/Navbar'
import Finder from './window/Finder'
import WindowHome from './window/WindowHome'


gsap.registerPlugin(Draggable)
type Props = {}

const ProjectWindow = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  return (
    <section className='max-w-[1500px] w-[80%] md:w-[70%] mx-auto'>
        <div
        className='bg-[url(/images/wallpaper.svg)] bg-cover bg-white aspect-[16/10] flex flex-col h-full relative overflow-hidden'>
          <div className='h-full overflow-hidden'
          ref ={containerRef}
           >
          <Finder/>
          <WindowHome boundsRef={containerRef}/>
        </div>
            <div className='mt-auto w-full'>
                <Navbar/>
            </div>
        </div>
    </section>
  )
}

export default ProjectWindow