import React, { useState } from 'react'
import Script from './Script'
import Preview from './Preview'
import { files, FnType } from '@/app/constants/codeplayground'

type Props = {}


const CodePlayGround = (props: Props) => {
    const [activeFile, setActiveTab] = useState<FnType>(files[0])

    const handleExcusion =(tabId:string)=>{

      const active = files.find(item=> item.id === tabId)

      if(!active){
        console.log("Tab not exist")
        return
      }

      setActiveTab(active)
    }


  return (
    <div className='flex flex-col lg:flex-row w-[90%] max-w-[1200px] mx-auto gap-3'>
        <Script handleExcusion={handleExcusion}/>
        <Preview outputFile={activeFile}/>
    </div>
  )
}

export default CodePlayGround