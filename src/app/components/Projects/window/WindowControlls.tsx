'use client'
import { RiCloseLargeLine } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";

import useWindowStore from '@/app/store/window'
import React from 'react'

type Props = {
    target:string
}

const WindowControlls = ({target}: Props) => {
    const {closeWindow} =useWindowStore()
  return (
    <div className="flex w-full justify-end px-2 py-1 lg:px-4 lg:py-2 bg-[#373737]">
      <div className="flex gap-4 text-[10px] md:text-sm">
        <FiMinus />
        <RiCloseLargeLine
        onClick={()=>closeWindow(target)}
        />
      </div>
    </div>
  )
}

export default WindowControlls