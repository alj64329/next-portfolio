import React from 'react'

const AboutHero = () => {
  return (
    <div className='max-w-[2000px] 
    bg-[url(/blue-vertical-strings.svg)] bg-contain bg-center bg-no-repeat'>
        <div className='pt-[15rem] pb-[5rem] md:pt-[17rem] md:pb-[10rem] w-full h-full relative flex flex-col justify-center'>
            <div className='text-5xl px-[2.5rem] text-center relative z-10 md:text-[80px]'>
                Hello,
                I’m a passionate and enthusiastic&nbsp;
                <span className='underline font-red'>web developer</span> 
                &nbsp;with a bachelor’s degree of mathematics.
            </div>            
        </div>
    </div>
  )
}

export default AboutHero