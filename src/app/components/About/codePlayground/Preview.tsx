import { MdArrowForwardIos } from "react-icons/md";
import React from 'react'
import { FnType } from "@/app/constants/codeplayground";

type Props = {
    outputFile:FnType
}

const Preview = ({outputFile}: Props) => {
    const path ="C:\\Ayaka_Miyazaki\\About"


  return (
    <div
    className='bg-[#1A1B1E] rounded-2xl md:flex-1'>
        <div
        className='bg-[#222327] w-full px-4 py-2 rounded-t-2xl'>
            <span className='text-white flex items-center gap-2'>
                <MdArrowForwardIos />
                Test Result
            </span>
        </div>

        <div
        className="py-2 px-4">
            <div className='min-h-[250px] m-3 font-sourceCode text-sm'> 
                {outputFile.output.map((line, index)=>(
                    <div key={index}>

                    </div>
                ))}
            </div>
        </div>


    </div>
  )
}

export default Preview