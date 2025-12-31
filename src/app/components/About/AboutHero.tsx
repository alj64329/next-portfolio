'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import React, { useRef } from 'react'



const AboutHero = () => {

  useGSAP(()=>{

    gsap.registerPlugin(SplitText)

    let split = SplitText.create(".about-text", {
      type: "words"
    });

    const tl =gsap.timeline();    

    tl.from(split.words,{
    y: -100,
    rotation: "random(-80, 80)",
    opacity:0,
    duration: 0.7, 
    ease: "back",
    delay:0.5,
    stagger: 0.3
    }).to(split.words, {
      opacity:1
    })
    .from('.font-red',{
      opacity:0,
      y:-100,
      scale:5,
      duration:2,
      ease: 'power2.out'
    })

  })

  return (
    <div className="max-w-[2000px] py-[5rem] hero-container overflow-hidden">
    <div className='bg-string'>
        <div className='pt-[15rem] pb-[5rem] md:pt-[17rem] md:pb-[10rem] w-full h-full relative flex flex-col justify-center'>
            <div className='text-5xl px-[2.5rem] text-center relative z-10 md:text-[80px] about-text'>
                Hello,
                I’m a passionate and enthusiastic&nbsp;
                <span className='font-red inline-block'>web developer</span> 
                &nbsp;with a bachelor’s degree of mathematics.
            </div>    
        </div>
    </div>
    </div>
  )
}

export default AboutHero