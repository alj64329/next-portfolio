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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.Black_Dark}
          position={[0.965, 0.059, -0.679]}
          rotation={[-2.172, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.Black_Dark}
          position={[0.965, 0.979, -1.309]}
          rotation={[-2.172, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.Black_Dark}
          position={[-0.953, 0.979, -1.309]}
          rotation={[-2.172, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.Black_Dark}
          position={[-0.953, 0.059, -0.679]}
          rotation={[-2.172, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Yellow}
        position={[-0.478, 0.199, 0.025]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.Orange}
        position={[0.95, 0.359, 0.12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.Yellow}
        position={[-1.416, 1.818, -0.044]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.Yellow}
        position={[1.56, 1.659, 0.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.Orange}
        position={[-0.821, 3.268, -0.184]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials.Yellow}
        position={[1.132, 0.86, -0.029]}
        rotation={[1.859, 0.664, 2.679]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.Orange}
        position={[0.743, 3.099, -0.007]}
        rotation={[1.11, -1.109, 2.871]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials.Orange}
        position={[-1.377, 0.227, 0.059]}
        rotation={[-0.156, 1.191, 1.785]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.Yellow}
        position={[-1.364, 2.73, 0.076]}
        rotation={[-2.997, 0.815, -0.465]}
      />
    </Float>
  )
}

useGLTF.preload('/models/laptop.glb')

export default Laptop