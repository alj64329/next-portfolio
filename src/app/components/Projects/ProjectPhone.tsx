'use client'
import { clImages } from '@/app/constants/cloudinary'
import { CldImage } from 'next-cloudinary'
import React, { useRef, useState } from 'react'
import LockScreen from './phone/LockScreen'

import PhoneFinder from './phone/PhoneFinder'
import HomeScreen from './phone/HomeScreen'
import PhoneText from './phone/PhoneText'

type Props = {}

const ProjectPhone = (props: Props) => {
      const containerRef = useRef<HTMLDivElement>(null)
      const [isOn, setIsOn]= useState(false)
      const [isFinderOpen, setIsFinderOpen]= useState(false)
      const [isTextOpen, setIsTextOpen]= useState(false)
    
      const handleOn =()=>{
        if(isTextOpen){
          setIsTextOpen(prev=>!prev)
          return
        }
        if(!isOn){
        setIsOn(prev => !prev)
        return
        }
        if(isFinderOpen){
        setIsFinderOpen(prev=>!prev)
        }
      }

      const handleFinderOpen =()=>{
        setIsFinderOpen(prev=>!prev)
      }

      const handleTxtOpen=()=>{
        setIsTextOpen(prev=>!prev)
      }

  return (
    <section className='max-w-[1500px] w-[95%] md:w-[70%] mx-auto mb-5'>
      <div className='px-2 pt-2 pb-12 bg-white rounded-3xl w-fit mx-auto shadow-lg relative'>
        <div
        className='bg-black p-2 rounded-2xl'>
        <div
        className='aspect-[9/16] flex flex-col h-[65vh] relative overflow-hidden rounded-2xl'>
          <div className='h-full overflow-hidden relative'
          ref ={containerRef}
           >
            {isFinderOpen?
            <>
              <PhoneFinder handleTxtOpen={handleTxtOpen}/>
              {isTextOpen&&<PhoneText/>}
            </>
            :<CldImage
            src={clImages.phoneWallpaper}
            alt="Wallpaper moon"
            fill
            className='w-full h-full'
            />}

            {isOn?
            <HomeScreen setFinderOpen={handleFinderOpen} isFinderOpen={isFinderOpen}/>
            :<LockScreen/>}
            
        </div>
        </div>

        <div 
        className='cursor-pointer w-10 h-10 rounded-[50%] inset-shadow-sm inset-shadow-gray-400/50 absolute bottom-1 left-[50%] -translate-x-[50%]'
        onClick={handleOn}>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ProjectPhone