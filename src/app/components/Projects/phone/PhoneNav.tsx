import { phoneNavIcons } from '@/app/constants'
import dayjs from 'dayjs'
import React from 'react'

type Props = {
    color?:string
}

const PhoneNav = ({color}: Props) => {
  return (
        <div 
    className={`relative py-1 lg:py-2 px-4 bg-transparent flex justify-between items-center ${color?color:"text-white"} z-10`}>
            <div className='flex flex-col text-sm'>
                <time>{dayjs().format("h:mm")}</time>
            </div>

            <div className='absolute -top-2 left-[50%] -translate-x-[50%] w-[30%] h-[28px] bg-black rounded-3xl'>
            </div>

        <div className='flex items-center gap-2 lg:gap-3'>
            {phoneNavIcons.map(item=>(
                <item.icon  className="text-sm" key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default PhoneNav