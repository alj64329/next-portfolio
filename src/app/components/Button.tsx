import Image from 'next/image'
import React from 'react'

// Prop, text, mode, href
type ButtonProps ={
    text: string;
    isSubmit:boolean;
}

const Button = ({text,isSubmit}:ButtonProps) => {
  return (
    <button type={isSubmit? "submit":"button"} className='w-fit rounded-border flex m-auto gap-2 mb-6 cursor-pointer'>
        <div>
        <div className='font-red'>...</div>
        {!isSubmit?<a href="/" className='w-fit font-bold'>{text}</a>:<span className='w-fit font-bold'>{text}</span>}
        </div>
        
        <Image
        src="/red-arrow.svg"
        alt="Arrow"
        width={30}
        height={30}/>
    </button>
  )
}

export default Button