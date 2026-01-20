import React, { useState } from 'react'
import PhoneNav from './PhoneNav'
import PhoneDock from './PhoneDock'

type Props = {
  setFinderOpen:()=>void,
  isFinderOpen:boolean
}

const HomeScreen = ({setFinderOpen,isFinderOpen}: Props) => {

  if(isFinderOpen)
    return null

  return (
    <div className='h-full flex flex-col justify-between'>
        <PhoneNav/>
        <PhoneDock setFinderOpen={setFinderOpen}/>
    </div>
  )
}

export default HomeScreen