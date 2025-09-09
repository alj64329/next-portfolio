import Image from 'next/image'
import React from 'react'
import Project from './Project'
import Button from './Button'

const About = () => {
  return (
    <div className='max-w-[2000px]'>
        <div className='py-[5rem] center'>
            <h3 className='heading-text text-center text-6xl py-3'>Ayaka Miyazaki</h3>
            <div className='text-center text-white pt-[4rem] pb-[3rem] px-[2rem] text-2xl'>
                Hello, I'm a passionate and enthusiastic web develoer with a Bachelor's degree of mathematics.
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
                </div>

            </div>

            <Button text="View About"/>
        </div>
    </div>
  )
}

export default About