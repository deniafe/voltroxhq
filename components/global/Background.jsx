/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/background.glb
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Background(props) {
  const { nodes, materials } = useGLTF('./models/background.glb');
  return (
    <group {...props} dispose={null}>
      {/* <ambientLight intensity={0.3} /> */}
      <directionalLight color="purple" position={[-12, 10, 10]} />
      <directionalLight color="green" position={[-5, 0, 7]} />
      <pointLight color="aqua" position={[10, 0, 7]} />
      {/* <directionalLight color="#676b7e" position={[-5, 5, 7]} /> */}
      <directionalLight color="#757a94" position={[-1.5, -3, 7]} />
      {/* <pointLight color="purple" position={[5, 0, 5]} /> */}
      <directionalLight color="#757a94" position={[8, 8, 10]} />
      {/* <directionalLight color="aqua" position={[9, -16, 12]} /> */}
      <mesh 
        geometry={nodes.Cube002.geometry} 
        material={materials['Cube Black']} 
        // rotation={[0, 0, Math.PI / 2]} 
        rotation={[0, Math.PI / 2, 0]}
        position={[0, 1, 0]} 
        scale={[2, 2, 2]} 
      />
    </group>
  );
}

useGLTF.preload('./models/background.glb');
