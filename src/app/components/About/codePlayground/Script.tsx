import React, { useState } from 'react'
import { IoCodeSlashOutline } from "react-icons/io5";

type Props = {}

const Script = (props: Props) => {
    const [lines, setLines] = useState<number>(1)
  return (
    <div
    className='bg-[#1A1B1E] rounded-2xl md:flex-1'>
        <div
        className='bg-[#222327] w-full px-4 py-2 rounded-t-2xl flex justify-between'>
            <span className='text-white flex items-center gap-2'>
                <IoCodeSlashOutline
                className='text-green-500'/>
                Code
            </span>

            <button
            className='bg-green-500 text-white py-1 px-5 rounded-lg'>
                Run
            </button>
        </div>

        <div>
            <div className='min-h-[250px] font-sourceCode'>

            </div>
        </div>


    </div>
  )
}

export default Script