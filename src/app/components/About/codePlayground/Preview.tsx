import { MdArrowForwardIos } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import React from 'react'
import { FnType } from "@/app/constants/codeplayground";

type Props = {
    outputFile:FnType
    isShow:boolean
}

const Preview = ({outputFile, isShow}: Props) => {
    console.log(isShow)

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
            {isShow&& 
            <>
            <div className="pb-4">
                {outputFile.outputHead.toUpperCase()}</div>

                <div className={`${outputFile.id==="techStach-script"&& "flex flex-wrap"}`}>
                    {outputFile.output.map((line, index)=>(
                        <React.Fragment
                        key={`output-${index}`}>
                            {line.head&&<div>{line.head}</div>}
                            {line.subtext&&<div>{line.subtext}</div>}
                            {line.points.map((item,index)=>(
                                <div
                                key={`point-${index}`}
                                className={`${index===line.points.length-1&&"pb-4"}`}> 
                                {/* About me */}
                                    {outputFile.id==="about-script"&&item}
                                {/* Experiences  */}
                                    {outputFile.id==="experience-script"&&
                                <span>
                                <FaCheck
                                className="text-[#23D18B] text-lg pe-1 inline-block"/>
                                {item}
                                </span> 
                                    }

                                {/* TechStack */}
                                {outputFile.id==="techStach-script"&&
                                `${item}${index<line.points.length-1?" | ":""}`
                                }
                            </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </>}
            </div>
        </div>

    </div>
  )
}

export default Preview