import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <div>
        <form action="" className="py-[3rem] px-[2rem] flex flex-col gap-5 max-w-[700px] md:mx-auto">
            <div className='input-box'>
                <input type="text" name="name" id="name" placeholder='Name'
                className='text-white'/>
            </div>
            <div className='input-box'>
                <input type="email" name="email" id="email" placeholder='abc_123@example.com'
                className='text-white'/>
            </div>
            <div className='input-box'>
                <textarea name="message" id="message" placeholder="Hi, I would like to talk about..." rows={7}
                className='text-white resize-none w-[100%]'></textarea>
            </div>

            <div>
                <Button text="Send"/>
            </div>
        </form>

    </div>
  )
}

export default Form