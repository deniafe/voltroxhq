import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TextureLoader, AdditiveBlending, BackSide } from 'three';
import vertexShader from '../../shaders/vertex.glsl';
import fragmentShader from '../../shaders/fragment.glsl';
import atmosphereVertexShader from '../../shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from '../../shaders/atmosphereFragment.glsl';

export const Earth = () => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      const points = groupRef.current;
      points.rotation.x -= 0.0017;
      points.rotation.y -= 0.001;
      points.children[0].rotation.y += 0.002;
    }
  });

  return (
    <group style={{ width: '100vw', height: '100vh' }}>
        <ambientLight color={0xffffff} intensity={0.5} />
        <directionalLight color={0xffffff} intensity={0.5} position={[5, 5, 5]} />
        {/* <OrbitControls /> */}
        <group ref={groupRef}>
          <mesh>
            <sphereGeometry args={[2, 50, 50]} />
            <shaderMaterial
              vertexShader={vertexShader}
              fragmentShader={fragmentShader}
              uniforms={{
                globeTexture: {
                  value: new TextureLoader().load('./img/globe.jpg'),
                },
              }}
            />
          </mesh>
          <mesh>
            <sphereGeometry args={[2.3, 53, 53]} />
            <shaderMaterial
              vertexShader={atmosphereVertexShader}
              fragmentShader={atmosphereFragmentShader}
              blending={AdditiveBlending}
              side={BackSide}
            />
          </mesh>
        </group>
      {/* </Canvas> */}
    </group>
  );
}

export default Earth;
