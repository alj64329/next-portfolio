'use client'

import React, { useRef } from 'react'
import Button from './Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextPlugin from 'gsap/TextPlugin'
import { BiLogoTypescript, BiLogoCss3,BiLogoTailwindCss,BiLogoMongodb   } from "react-icons/bi";
import { RiJavascriptFill,RiNextjsFill } from "react-icons/ri";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IconType } from 'react-icons'
import { TbSql } from "react-icons/tb";
import { DiSenchatouch } from "react-icons/di";


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

    interface SkillType{
        id:number,
        name:string,
        icon:IconType
        color?:string
    }

    const skills:SkillType[]=[
        {
            id:1,
            name:"JavaScript",
            icon:RiJavascriptFill,
            color:'text-yellow-300'
        },
        {
            id:2,
            name:"TypeScript",
            icon:BiLogoTypescript,
            color:'text-blue-400'
        },
        {
            id:3,
            name:"HTML",
            icon:FaHtml5,
            color:'text-red-600'
        },
        {
            id:4,
            name:"CSS",
            icon:BiLogoCss3,
            color:'text-blue-800'
        },
        {
            id:5,
            name:"Tailwindcss",
            icon:BiLogoTailwindCss, 
            color:'text-blue-400'
        },
        {
            id:6,
            name:"React",
            icon:FaReact,
            color:'text-blue-400'
        },
        {
            id:7,
            name:"Next js",
            icon:RiNextjsFill,
        },
        {
            id:8,
            name:"mongoDB",
            icon:BiLogoMongodb,
            color:'text-green-700'
        },
        {
            id:9,
            name:"SQL",
            icon:TbSql,
        },
        {
            id:10,
            name:"Ext JS",
            icon:DiSenchatouch,
            color:"text-green-300"
        },
    ]
  return (
    <div className='max-w-[2000px] about-section h-screen'>
        <div className='py-[5rem] center'>
            <h3 className='heading-text text-center text-6xl lg:text-8xl py-3'>Ayaka Miyazaki</h3>
            <div className='pt-[4rem] pb-[3rem] mx-auto px-[2rem]'>
                <div className='center-text text-center text-white text-2xl md:text-4xl typewriter-text inline-block'>
                </div>
                <span className='cursor text-white text-2xl' ref={cursorRef}>|</span>
            </div>


        {/* Skills */}
            <div className='flex justify-center pb-8'>
                <div className='skill-container flex text-white p-8 gap-2 text-3xl lg:text-5xl'>
                    {
                        skills.map((item,index)=>(
                            <item.icon
                            className={`${item.color}`}
                            key={index}
                            />
                        ))
                    }
                </div>

            </div>

            <Button text="View About" isSubmit={false}/>
        </div>
    </div>
  )
}

export default About