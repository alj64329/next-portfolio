import { locations } from '@/app/constants'
import useLocationStore from '@/app/store/locations'
import useWindowStore from '@/app/store/window'
import { CldImage } from 'next-cloudinary'
import React, { useEffect } from 'react'
import PhoneNav from './PhoneNav'

type Props = {
    handleTxtOpen:()=>void
}

const PhoneFinder = ({handleTxtOpen}: Props) => {
    const {openWindow} = useWindowStore()
    const {activeLocation, setActiveLocation} = useLocationStore()

    const openItem =(item:any)=>{
        
        if(item.fileType === 'pdf') return openWindow('resume')

        if(item.kind === 'folder') return setActiveLocation(item)

        if(['fig','url'].includes(item.fileType) && item.href){
        return window.open(item.href,"_blank")
        }

        handleTxtOpen()
        openWindow(`${item.fileType}${item.kind}`, item)
    }

    useEffect(()=>{
    },[activeLocation])
  return (
    <div
    className='h-full w-full bg-white border'>
        <PhoneNav color='text-black'/>
            <div className='w-full p-5 h-full '> 
                <ul className='content w-full flex gap-5'>
                    {activeLocation?.children?.map((item)=>(
                    <li
                    key={item.id}
                    className='text-black'
                    onClick={()=>openItem(item)}
                    >
                        <CldImage
                        width={55}
                        height={55} 
                        src={item.iconImg} 
                        alt={item.name}
                        className='cursor-pointer'
                        />
                        <p className='text-[8px] w-[50px] overwrap-none'>
                            {item.name}
                        </p>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
  )
}

export default PhoneFinder