import { MdArrowForwardIos } from "react-icons/md";
import React from 'react'

type Props = {}

const Preview = (props: Props) => {
        const path ="C:\\Ayaka_Miyazaki\\About"

  return (
    <div
    className='bg-[#1A1B1E] rounded-2xl md:flex-1'>
        <div
        className='bg-[#222327] w-full px-4 py-2 rounded-t-2xl'>
            <span className='text-white flex items-center gap-2'>
                <MdArrowForwardIos />
                Preview
            </span>
        </div>

        <div>
            <div className='min-h-[250px] m-3 font-sourceCode text-sm'> 
                {path} 
            </div>
        </div>


    </div>
  )
}

export default Preview