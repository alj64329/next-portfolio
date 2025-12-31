'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Button from './Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextPlugin from 'gsap/TextPlugin'

const About = () => {
    const cursorRef = useRef(null)

    useGSAP(()=>{
        gsap.registerPlugin(TextPlugin,ScrollTrigger)
        gsap.set(cursorRef.current,{x:-10})

        const sectionTl = gsap.timeline({
            scrollTrigger:{
                trigger:".about-section",
                start:"top top",
                end:"bottom center",
                pin: true,
            }
        })
        
        sectionTl
        .from('.cursor',{
            autoAlpha: 0, 
            duration:0.5,
            repeat: -1,
            ease:"step(1)"
        })
       .to(".typewriter-text", {
        text: {value: "Passionate web developer with a love of math"}, 
        opacity:1,
        duration: 2, 
        delay: 0, 
        ease: "none"})
    })
  return (
    <div className='max-w-[2000px] about-section h-screen'>
        <div className='py-[5rem] center'>
            <h3 className='heading-text text-center text-6xl py-3'>Ayaka Miyazaki</h3>
            <div className='pt-[4rem] pb-[3rem] mx-auto px-[2rem]'>
                <div className='center-text text-center text-white text-2xl typewriter-text inline-block'>
                </div>
                <span className='cursor text-white text-2xl' ref={cursorRef}>|</span>
            </div>


        {/* Skills */}
            <div className='flex justify-center '>
                <Image
                src="/folder.svg"
                alt ="Folder Image"
                width={30}
                height={30}/>
                <div className='skill-container flex text-white p-8 gap-2 text-xl'>
                    <div>JavaScript</div>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>SQL</div>
                </div>

            </div>

            <Button text="View About" isSubmit={false}/>
        </div>
    </div>
  )
}

export default About