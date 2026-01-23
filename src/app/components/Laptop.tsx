'use client'
import React, { JSX, useRef, useState } from 'react'
import * as THREE from 'three'
import { Float, useGLTF, useTexture } from '@react-three/drei'

type LaptopProps = JSX.IntrinsicElements['group']

const Laptop =(props:LaptopProps)=> {
  const { nodes, materials } = useGLTF('/models/laptop.glb')
  const screenTexture = useTexture('/texture/screen.png')

  return(
    <Float>
      <group position={[-0.186, 1.099, -0.194]} rotation={[0.837, -0.44, 0.154]} {...props}>
        <group position={[0, 0.504, -1.015]} rotation={[-2.172, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_33 as THREE.Mesh).geometry}
            material={materials.Blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Object_34 as THREE.Mesh).geometry}
            material={materials.Black_Dark}
          >
          <meshStandardMaterial  map ={screenTexture}/>
          </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_23 as THREE.Mesh).geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_24 as THREE.Mesh).geometry}
          material={materials.Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_25 as THREE.Mesh).geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_26 as THREE.Mesh).geometry}
          material={materials.Yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_27 as THREE.Mesh).geometry}
          material={materials.Blue_Dark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_29 as THREE.Mesh).geometry}
          material={materials['.Example_Sheet_033.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Object_31 as THREE.Mesh).geometry}
          material={materials['.Example_Sheet_033.001']}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/laptop.glb')

export default Laptop