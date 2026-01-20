import React from 'react'
import Script from './Script'
import Preview from './Preview'

type Props = {}

const CodePlayGround = (props: Props) => {
  return (
    <div className='flex flex-col lg:flex-row w-[90%] max-w-[1200px] mx-auto gap-3'>
        <Script/>
        <Preview/>
    </div>
  )
}

export default CodePlayGround