/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 public/models/laptop.glb --k
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Laptop(props) {
  const { nodes, materials } = useGLTF('./models/laptop.glb')
  return (
    <group {...props} dispose={null} position={[-0.5, -3.2, 0]} scale={3} rotation={[0, -0.6, 0]}>
      <group name="Laptop" position={[-0.31, 1.228, 0.107]} rotation={[-Math.PI / 2, 0, 0]} scale={0.429}>
        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
          <group name="case_0" position={[0.498, 0.016, 0.416]} rotation={[-0.027, 0, 0]} scale={0.281}>
            <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.speaker} />
            <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.body} />
            <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.black_plastic} />
            <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.touchpad} />
            <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.holes} />
            <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.ports} />
            <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.metal} />
          </group>
          <group name="lid_3" position={[0.498, 0.037, 0.667]} rotation={[1.806, 0, 0]} scale={0.281}>
            <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.body} />
            <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.display} />
            <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.touchscreen_bezel} />
            <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.black_plastic} />
          </group>
          <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.body} position={[0.496, 0, 0.454]} rotation={[1.544, 0, 0]} scale={[0.983, 0.941, 0.983]} />
        </group>
      </group>
      <mesh name="Logo" geometry={nodes.Logo.geometry} material={materials.LogoImage} position={[-0.1, 1.334, 0.437]} rotation={[1.817, 0, 0]} scale={[0.05, 0.053, 0.045]} />
    </group>
  )
}

useGLTF.preload('./models/laptop.glb')
