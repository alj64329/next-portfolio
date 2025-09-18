'use client'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Laptop from './Laptop'
import { PerspectiveCamera } from '@react-three/drei'
import { Leva, useControls } from 'leva'

const Skills = () => {
  const x = useControls('Laptop',{
    positionX:{
      value: 2.5,
      min:-10,
      max:10
    },
    positionY:{
      value: 2.5,
      min:-10,
      max:10
    },
    positionZ:{
      value: 2.5,
      min:-10,
      max:10
    },
    rotationX:{
      value:0,
      min:-10,
      max:10
    },
    rotationY:{
      value:0,
      min:-10,
      max:10
    },
    rotationZ:{
      value:0,
      min:-10,
      max:10
    },
    scale:{
      value:1,
      min:0.1,
      max:10
    }
  })
  return (
    <div>
    <div className='flex flex-col justify-center py-[5rem]'>
        <div className='uppercase self-center'>Experience</div>
        <div>
            <ul className='flex gap-[1rem] justify-center'>
                <li>JavaScprip</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </div>

        <div className='py-[5rem] w-full h-[100vh]'>

        <Leva/>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0,0,10]}/>
          <Suspense fallback={null}>
            <Laptop
            position={[x.positionX, x.positionY, x.positionZ]}
            rotation={[x.rotationX, x.rotationY, x.rotationZ]}
            scale={[x.scale, x.scale, x.scale]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10,10,10]} intensity={0.5} />

          </Suspense>
        </Canvas>
        </div>
    </div>
    </div>
  )
}

export default Skills