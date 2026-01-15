'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = ()=>{
    setIsOpen((prev)=>!prev)
  }

  return (
    <div className='max-w-[2000px]'>
    <header className='w-full fixed bg-transparent p-5 flex flex-row justify-between z-25 max-w-[2000px]'>
        <Link href="/"><Image 
        src="/logo_name.svg"
        alt="Logo"
        width={100}
        height={100}
        className='self-start cursor-pointer'
        /></Link>
        {isOpen &&
        <div className='fixed md:static inset-0 top-right-md bg-myRed flex pl-[2rem] pb-[4rem] rounded-2xl w-full md:w-auto'>
          <div className='pt-[5rem] flex justify-center items-center w-full'>
            <ul className='nav-text flex flex-col gap-5'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
            </ul>
          </div>

          <div>
          <Image
          src='/close-icon.svg'
          alt='Close icon'
          width={150}
          height={150}
          onClick={handleClick}
          className='-rotate-10 cursor-pointer'
          />
          </div>
        </div>
        }

        {!isOpen&&
        <Image 
        src="/menu-burger.svg"
        alt ="Burger Menu"
        width={100}
        height={100}
        onClick={handleClick}
        className='hamburger-menu cursor-pointer'/>
        }

    </header>
    </div>
  )
}

export default Header