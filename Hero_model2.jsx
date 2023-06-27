/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/hero_model2.glb --k
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/hero_model2.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_model" position={[1.604, -0.251, 0.451]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.054, 0.068, 0.089]}>
        <group name="7a8c18d4c8df4a17afa157df7b994fb2fbx" rotation={[Math.PI / 2, 0, 0]}>
          <group name="keyboard" position={[0, 1.619, -0.017]} rotation={[0.123, 0, 0]}>
            <mesh name="keyboard_Key_0" geometry={nodes.keyboard_Key_0.geometry} material={materials['material.001']} />
            <mesh name="keyboard_Keyboard_0" geometry={nodes.keyboard_Keyboard_0.geometry} material={materials['Keyboard.001']} />
          </group>
          <group name="keys" position={[-15.094, 1.498, 2.822]} rotation={[0.123, 0, 0]}>
            <mesh name="keys_Key_0" geometry={nodes.keys_Key_0.geometry} material={materials['material.001']} />
            <mesh name="keys_Key_1" geometry={nodes.keys_Key_1.geometry} material={materials['material.001']} />
            <mesh name="keys_Key_2" geometry={nodes.keys_Key_2.geometry} material={materials['material.001']} />
          </group>
          <mesh name="emissive_Key_0" geometry={nodes.emissive_Key_0.geometry} material={materials['material.001']} position={[-15.094, 1.671, 2.843]} rotation={[0.123, 0, 0]} />
          <mesh name="legs_Keyboard_0" geometry={nodes.legs_Keyboard_0.geometry} material={materials['Keyboard.001']} position={[0, 0.921, -4.98]} rotation={[2.487, 0, 0]} />
        </group>
      </group>
      <group name="Sketchfab_model001" position={[-0.703, 0.157, -0.302]} rotation={[-Math.PI, 0, 0]} scale={7.283}>
        <mesh name="#LMP0003_Light_Bulb_Low_Poly_#LMP0003_Textures_0" geometry={nodes['#LMP0003_Light_Bulb_Low_Poly_#LMP0003_Textures_0'].geometry} material={materials.LMP0003_Textures} position={[0, -0.031, 0]} />
      </group>
      <group name="Sketchfab_model002" position={[-0.733, 0.157, -0.338]} rotation={[-Math.PI, 0, 0]} scale={7.038}>
        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.LMP0002_Metal} />
          <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.LMP0002_GlassNo_Refraction} />
          <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.LMP0002_Plexiglass} />
          <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.LMP0002_Conductor} />
          <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.LMP0002_Filament} />
          <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.LMP0002_Emitter} />
        </group>
      </group>
      <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['Cube Black']} position={[1.604, -0.395, 0.451]} rotation={[0, 1.571, 0]} scale={[1.15, 0.149, 1.25]} />
      <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials['Cube Black']} position={[-0.883, -0.149, -0.802]} rotation={[0, 1.571, 0]} scale={[1.15, 0.149, 1.25]} />
      <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Cube Black']} position={[1.628, 0.055, -1.544]} rotation={[0, 1.571, 0]} scale={[1.15, 0.149, 1.25]} />
    </group>
  )
}

useGLTF.preload('/hero_model2.glb')
