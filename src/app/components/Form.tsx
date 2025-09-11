"use client"
import React, { FormEvent, useRef, useState } from 'react'
import Button from './Button'
import emailjs from '@emailjs/browser'

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?? "")

const Form = () => {
    const formRef = useRef<HTMLFormElement | null>(null)

    const [form, setForm] =useState({
        name:'',
        email:'',
        message:''
    })

    const handleChange = ({target: {name, value}}:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setForm({...form, [name]:value})
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        try{
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: form.name,
                    to_name:'Ayaka',
                    from_email:form.email,
                    message: form.message
                }
            )

            alert('Your message has been sent!')
            //reset the form
            setForm({
                name:'',
                email:'',
                message:''
            })
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <form ref={formRef} onSubmit={handleSubmit} className="py-[3rem] px-[2rem] flex flex-col gap-5 max-w-[700px] md:mx-auto">
            <div className='input-box'>
                <input type="text" 
                name="name" value={form.name} 
                placeholder='Name'
                onChange ={handleChange} required
                className='field-input'/>
            </div>
            <div className='input-box'>
                <input type="email" name="email" 
                value ={form.email} onChange={handleChange} 
                placeholder='abc_123@example.com' required
                className='field-input'/>
            </div>
            <div className='input-box'>
                <textarea name="message" value ={form.message} onChange={handleChange} 
                 placeholder="Hi, I'm intrested in..." rows={7} required
                className='field-input resize-none'></textarea>
            </div>

            <div>
                <Button text="Send" isSubmit={true}/>
            </div>
        </form>

    </div>
  )
}

export default Form