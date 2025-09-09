import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[2000px]'>
        <footer
        className='bg-translucent bg-[url(/footer-bg-img.svg)] bg-no-repeat bg-cover'>

            <div className='p-5 md:py-3 flex justify-end'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Project</a></li>
                </ul>
            </div>

        </footer>
    </div>
  )
}

export default Footer