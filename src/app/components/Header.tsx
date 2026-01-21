'use client'
import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { clImages, cloudinaryBase } from '../constants/cloudinary'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  const menu=[
    {
      id:1,
      href:"/",
      name:"Home"
    },
    {
      id:2,
      href:"/about",
      name:"About"
    },
    {
      id:3,
      href:"/projects",
      name:"Projects"
    },
  ]

  const handleClick = ()=>{
    setIsOpen((prev)=>!prev)
  }

  return (
    <div className='max-w-[2000px] w-full'>
      <header className='fixed z-25 top-0 w-full'>
        <div
        className={`max-w-[2000px] w-full p-5 flex ${!isOpen&&"items-center"} justify-between`}>
          <Link href="/">
            <CldImage 
            src={`${cloudinaryBase}/logo_rcidjw.png`}
            alt="Logo"
            width={100}
            height={100}
            className='self-start cursor-pointer'
            />
          </Link>
          {isOpen ?
          <div className='fixed md:static inset-0 top-right-md bg-myRed flex pl-[2rem] pb-[4rem] rounded-2xl w-full md:w-auto'>
            <div className='pt-[5rem] flex justify-center items-center w-full'>
              <ul className='nav-text flex flex-col gap-5'>
                {
                  menu.map(item=>(
                    <li 
                    key={item.id}
                    onClick={handleClick}>
                      <Link
                      href ={item.href}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div>
            <CldImage
            src={clImages.closeIcon}
            alt='Close icon'
            width={150}
            height={150}
            onClick={handleClick}
            className='-rotate-10 cursor-pointer'
            />
            </div>
          </div>:
          <CldImage 
          src={clImages.openIcon}
          alt ="Burger Menu"
          width={100}
          height={100}
          onClick={handleClick}
          className='hamburger-menu cursor-pointer'/>
          }
        </div>
      </header>
    </div>
  )
}

export default Header