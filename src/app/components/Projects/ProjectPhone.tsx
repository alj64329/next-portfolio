'use client'
import React, { useRef, useState } from 'react'

type Props = {}

const ProjectPhone = (props: Props) => {
      const containerRef = useRef<HTMLDivElement>(null)
      const [isFinderOpen, setIsFinderOpen] = useState(false)
    
      const handleOpen =()=>{
        setIsFinderOpen(prev => !prev)
      }
  return (
    <section className='max-w-[1500px] w-[95%] md:w-[70%] mx-auto mb-5'>
      <div className='px-3 pt-8 pb-12 bg-white rounded-2xl w-fit mx-auto shadow-lg relative'>
        <div
        className='bg-cover bg-black aspect-[9/16] flex flex-col h-[65vh] relative overflow-hidden'>
          <div className='h-full overflow-hidden'
          ref ={containerRef}
           >
        </div>
            <div className='mt-auto w-full'>
            </div>
        </div>

        <div 
        className='w-10 h-10 rounded-[50%] inset-shadow-sm inset-shadow-gray-400/50 absolute bottom-1 left-[50%] -translate-x-[50%]'
        onClick={handleOpen}>
        </div>
      </div>
    </section>
  )
}

export default ProjectPhone