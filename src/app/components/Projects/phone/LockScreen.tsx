import dayjs from 'dayjs'
import React from 'react'


const LockScreen = () => {
  return (
    <div
    className='h-full relative'>
            <div className='absolute top-[10%] left-[50%] -translate-x-[50%] text-[8px] lg:text-[12px]'>
                <div className='flex flex-col'>
                <time
                className='text-lg text-center'>{dayjs().format("MMMM DD")}</time>
                <time
                className='text-7xl'>{dayjs().format("h:mm")}</time>
                </div>

            </div>

            <div
            className='absolute bottom-[5%] w-full text-center'>
              Tap Button to Unlock
            </div>

    </div>
  )
}

export default LockScreen