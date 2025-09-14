'use client';
import { useEffect, useState } from 'react';
import React from 'react'
import Image from 'next/image'



const Hero = () => {
    const [position, setPosition] = useState<number | null>(null)
    useEffect(()=>{
            const element = document.querySelector('.heading-text')
            const rect = element?.getBoundingClientRect()
    setPosition(rect?.bottom ?? null)

    
    },[])

  return (
    <>
    <div className='max-w-[2000px]'>
        <div className='py-[10rem] w-full h-full relative flex flex-col justify-center'>
            <div className='heading-text text-[90px] text-center relative z-10 md:text-[110px]'>
                Web
            <br/>
            <span className='uppercase'>Developer</span>
            </div>

            <div className='flex justify-center w-full absolute top-87 md:top-[42%]'>
                <Image
                src="/laptop-3d.svg"
                alt='Loptop img'
                width={350}
                height={350}
                priority = {false}
                className='rotate-20 z-15'
                />
            </div>

            <div className='text-3xl pt-[220px] flex justify-center '>
                <div className='rounded-border z-22'>
                    <div className='text-xl font-red font-bold'>...</div>
                    <a href="/"
                    className='text-xl font-bold '>Let's Connect</a>
                </div>
            </div>

            <Image 
            src="/blue-circle.svg"
            alt="blue string image"
            fill
            className='opacity-25 absolute top-[2rem] -z-10 object-cover md:hidden'
            />
            {/* Medium to Large screen */}
            <Image 
            src="/blue-circle.svg"
            alt="blue string image"
            width={700}
            height={700}
            className='opacity-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 object-cover hidden md:object-none md:block'
            />
            <Image 
            src="/blue-string.svg"
            alt="blue string image"
            fill
            className='opacity-50 absolute top-0 z-20 object-cover hidden md:block'
            />
            
        </div>
    </div>
    </>
  )
}

export default Hero