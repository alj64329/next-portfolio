'use client'
import React, { useState } from 'react'
import Script from './Script'
import Preview from './Preview'
import { files, FnType } from '@/app/constants/codeplayground'


const CodePlayGround = () => {
    const [activeFile, setActiveTab] = useState<FnType>(files[0])
    const [isExcuted, setIsExcuted] = useState<boolean>(false)

    const handleExcusion =(tabId:string)=>{

      const active = files.find(item=> item.id === tabId)

      if(!active){
        console.log("Tab not exist")
        return
      }

      setActiveTab(active)
      setIsExcuted(true)
    }


  return (
    <div className='flex flex-col lg:flex-row w-[90%] max-w-[1200px] mx-auto gap-3'>
        <Script handleExcusion={handleExcusion}/>
        <Preview outputFile={activeFile} isShow={isExcuted} />
    </div>
  )
}

export default CodePlayGround