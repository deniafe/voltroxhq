import { useMemo, useEffect } from 'react'
import { Canvas } from '@react-three/fiber';
import { ScrollControls, useProgress } from '@react-three/drei';
import { EffectComposer, Noise } from "@react-three/postprocessing";


import { Experience } from '@/components/home/loading/Experience';
import { Overlay } from '@/components/home/loading/Overlay';
import { usePlay } from '@/contexts/Play';

export const LoadingScreen = ({ started, onStarted }) => {
  const { play, end } = usePlay();
  const { progress } = useProgress();

  useEffect(() => {
    if(progress >= 100) {
      onStarted();
    }
  }, [progress])

  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.2} />
      </EffectComposer>
    ),
    []
  );


  return (
    <>
      <div id="root" >
        <Canvas>
          <color attach="background" args={["#ececec"]} />
          <ScrollControls
            pages={play && !end ? 20 : 0}
            damping={0.5}
            style={{
              top: "10px",
              left: "0px",
              bottom: "10px",
              right: "10px",
              width: "auto",
              height: "auto",
              animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
              opacity: 0,
            }}
          >
            <Experience />
          </ScrollControls>
          {effects}
        </Canvas>
      </div>
      <Overlay />
    </>
  )
}
