'use client'
import { loadingLines } from '@/app/constants/loading'
import React, { useEffect, useState } from 'react'
import { FaRegSquare, FaWindowMinimize } from 'react-icons/fa6'
import { FiMinus } from 'react-icons/fi'
import { IoCloseOutline } from 'react-icons/io5'


const TerminalLoading = () => {
    const [visibleLines, setVisibleLines] =useState<string[]>([])

    useEffect(()=>{
        let i =0
        const interval = setInterval(()=>{
            setVisibleLines(prev => [...prev,loadingLines[i]])
            i++
            if(i >= loadingLines.length) clearInterval(interval)
        },200)

        return ()=> clearInterval(interval)
    },[])
  return (
    <div className='w-screen h-screen bg-black'>
        <div className='bg-[#202020] flex justify-between items-center text-white h-fit px-4 py-1'>
            <div>
                :/C/User/AyakaMiyazaki
            </div>

            <div className='flex items-center text-md gap-2'>
                <FiMinus/>
                <FaRegSquare/>
                <IoCloseOutline/>
            </div>
        </div>
        <div className='p-[24px] terminal-text'>
            {visibleLines.map((line, index)=>(
                <div key={index}>
                    {line}
                </div>
            ))}
            <span className='cursor'>▍</span>
        </div>

    </div>
  )
}

export default TerminalLoading