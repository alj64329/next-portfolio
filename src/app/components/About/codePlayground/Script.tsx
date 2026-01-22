import { files, FnType } from '@/app/constants/codeplayground';
import React, { useState } from 'react'
import { IoCodeSlashOutline } from "react-icons/io5";

type Props = {
    handleExcusion:(tabId:string)=>void
}

type TabId ='about-script'|"techStach-script"|"experience-script"

const Script = ({handleExcusion}: Props) => {
    const [lines, setLines] = useState<number>(1)
    const [activeTab, setActiveTab] = useState<TabId>('about-script')

    const activeFn =files.find(item=> item.id === activeTab)


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
            className='bg-green-500 text-white py-0.5 px-5 rounded-lg cursor-pointer font-bold'
            onClick={()=>handleExcusion(activeTab)}>
                Run
            </button>
        </div>
        {/* Tab */}
        <div className='grid grid-cols-3 md:grid-cols-5 text-sm'>
            {files.map(tab =>(
                <button
                key={tab.id}
                onClick={()=>setActiveTab(tab.id as TabId)}
                className={`tab ${activeTab === tab.id ? "border-b-0 border-t-2 border-t-[#0078D4]" : ""} p-2 border border-[#2B2b2b] text-start cursor-pointer`}>
                    {tab.fileName}
                </button>
            ))}
        </div>

        <div className='py-2 px-4'>
            <div className='min-h-[250px] font-sourceCode'>
                <div
                className='text-[#6A9955]'>
                    //{activeFn?.comment}
                </div>
                { activeFn?.fn};
            </div>
        </div>


    </div>
  )
}

export default Script