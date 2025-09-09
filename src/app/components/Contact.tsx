import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <div className='pt-[5rem] px-[2rem] max-w-[2000px]'>
        <div className='relative flex justify-center'>
            <div className='w-fit text-4xl'>
            <h2>Got questions?</h2>
            <h2>Drop me a line at the email below!</h2>
            </div>
        </div>

        <Form />

    </div>
  )
}

export default Contact