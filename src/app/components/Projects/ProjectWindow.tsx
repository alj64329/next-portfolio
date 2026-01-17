'use client'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import React, { useRef, useState } from 'react'
import Navbar from './window/Navbar'
import Finder from './window/Finder'
import Text from './window/Text'
import WindowHome from './window/WindowHome'


gsap.registerPlugin(Draggable)
type Props = {}

const ProjectWindow = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isFinderOpen, setIsFinderOpen] = useState(false)

  const handleOpen =()=>{
    setIsFinderOpen(prev => !prev)
  }
  return (
    <section className='max-w-[1500px] w-[90%] md:w-[70%] mx-auto mb-5'>
      <div className='px-2 py-4 bg-black rounded-2xl border-4 border-white'>
        <div
        className='bg-[url(/images/wallpaper.svg)] bg-cover bg-[#DFDFDF] aspect-[16/10] flex flex-col h-full relative overflow-hidden'>
          <div className='h-full overflow-hidden'
          ref ={containerRef}
           >
          <WindowHome boundsRef={containerRef} setFinderOpen={handleOpen}/>
          {isFinderOpen&&(
            <>
              <Finder/>
              <Text/>
            </>
            )}
        </div>
            <div className='mt-auto w-full'>
                <Navbar/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectWindow