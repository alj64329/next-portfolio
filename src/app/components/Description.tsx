'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Description = () => {

    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)
        
        const tl1 = gsap.timeline({
            scrollTrigger:{
                trigger: '.descreption-sec',
                scrub: true,
                start:'top top',
                pin: true
            }
        })

        tl1.from('.content div',{
            y:'100vh',
            opacity:0,
            stagger: 2,
        })
    })
  return (
    <div className='bg-[url(/bg-grey-wave.svg)] bg-cover py-[10rem] md:pt-[15rem] descreption-sec'>
        <div className='flex flex-col md:flex-row px-[3rem] md:px-[5rem] gap-[2rem]'>
            <div className='flex flex-col'>
                <Image
                src="/pixeltrue-web-development.svg"
                alt="Programmer image"
                width={500}
                height={500}
                className='self-center min-w-[500px]'
                />
                <div className='self-center'>
                    Illustration by Pixeltrue Ouch!</div>

            </div>

            <div className='flex justify-center md:justify-start w-full'>
                <div className='content center gap-5 md:gap-[2rem] md:max-w-[900px] md:text-2xl overflow-hidden'>
                    <div >
                        I’m a beginner web developer with a Bachelor’s degree in Mathematics 
                        and a love for turning ideas into working code
                    </div>

                    <div>
                        I may not have official tech job experience yet, 
                        but I’ve built practical tools —like project allocation apps and admin task automations by JavaScript and Google Apps Script.
                    </div>

                    <div>
                        I’m curious by nature, enjoy figuring out how things work, 
                        and love solving problems, learning new things and making something 
                        that’s both useful and user friendly. 
                        My goal is to bring fresh ideas, problem-solving skills, and dedication to every project I work on.
                    </div>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Description