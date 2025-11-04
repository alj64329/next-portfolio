'use client'
import React, { useRef, useState } from 'react'
import { Float, useGLTF, useTexture } from '@react-three/drei'


const Laptop =(props)=> {
  const { nodes, materials } = useGLTF('/models/laptop.glb')

  const screenTexture = useTexture('/texture/screen.png')

  return(
    <Float dispose={1}>
      <group position={[-0.186, 1.099, -0.194]} rotation={[0.837, -0.44, 0.154]} {...props}>
        <group position={[0, 0.504, -1.015]} rotation={[-2.172, 0, 0]}>
          <mesh
            castShadowd
            receiveShadow
            geometry={nodes.Object_33.geometry}
            material={materials.Blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34.geometry}
            material={materials.Black_Dark}
          >
          <meshMatcapMaterial map ={screenTexture}/>
          </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.Yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.Blue_Dark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials['.Example_Sheet_033.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials['.Example_Sheet_033.001']}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/laptop.glb')

export default Laptop