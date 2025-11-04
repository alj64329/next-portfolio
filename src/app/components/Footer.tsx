'use client'
import React from 'react'

// Prop, 
type FooterProps ={
    isDark: boolean;
}

const Footer = ({isDark}:FooterProps) => {
  return (
    <div className='max-w-[2000px]'>
        <footer className={isDark?'footer-bg-white py-5':'footer-bg-pink py-5'}>
          <div className='p-5 md:py-3 flex justify-end text-2xl z-5'>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="">Project</a></li>
              </ul>
          </div>

        </footer>
    </div>
  )
}

export default Footer