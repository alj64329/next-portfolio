import Image from 'next/image'
import React from 'react'

// Prop, text, mode, href
type ButtonProps ={
    text: string;
}

const Button = ({text}:ButtonProps) => {
  return (
    <div className='w-fit rounded-bourder flex m-auto gap-2 mb-6'>
        <div>
        <div className='font-red'>...</div>
        <a href="/" className='w-fit font-bold'>{text}</a>
        </div>
        
        <Image
        src="/red-arrow.svg"
        alt="Arrow"
        width={30}
        height={30}/>
    </div>
  )
}

export default Button