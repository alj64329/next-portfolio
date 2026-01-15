'use client'
import { navIcons } from '@/app/constants'
import useWindowStore from '@/app/store/window'
import dayjs from 'dayjs'
import React from 'react'
import { IoPartlySunnyOutline } from 'react-icons/io5'
import { div } from 'three/tsl'

type Props = {}

const Navbar = (props: Props) => {
    const {openWindow}= useWindowStore()
  return (
    <div 
    className='py-1 lg:py-2 px-4 bg-gray-700 flex justify-between items-center'>
        <div>
            <IoPartlySunnyOutline
            className='text-md lg:text-2xl'/>
        </div>

        <div className='flex items-center gap-2 lg:gap-3'>
            {navIcons.map(item=>(
                <item.icon  className="text-sm lg:text-lg" key={item.id}/>
            ))}


            <div className='flex flex-col text-[10px] lg:text-sm'>
                <time>{dayjs().format("h:mm A")}</time>
                <time>{dayjs().format("YYYY-MM-DD")}</time>
            </div>
        </div>
    </div>
  )
}

export default Navbar