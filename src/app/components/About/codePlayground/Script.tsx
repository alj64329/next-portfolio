import React from 'react'
import { IoCodeSlashOutline } from "react-icons/io5";

type Props = {}

const Script = (props: Props) => {
  return (
    <div
    className='bg-[#262626]'>
        <div
        className='bg-[#333333] w-full flex'>
            <span className='text-white'>
                <IoCodeSlashOutline
                className='text-green-500'/>
                Code
            </span>
        </div>


    </div>
  )
}

export default Script