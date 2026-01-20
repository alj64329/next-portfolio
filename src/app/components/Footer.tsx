'use client'
import Link from 'next/link';
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
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/projects">Project</Link></li>
              </ul>
          </div>

        </footer>
    </div>
  )
}

export default Footer