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
    <div className="flex w-full justify-end px-4 py-2">
      <div className="flex gap-4">
        <FiMinus />
        <RiCloseLargeLine
        onClick={()=>closeWindow(target)}
        />
      </div>
    </div>
  )
}

export default WindowControlls