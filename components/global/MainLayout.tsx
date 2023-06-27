import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Bg } from './Bg';
import { Navbar } from './Navbar';
import { MobileNavBar } from './mobile-nav-bar'
import { Scroll, ScrollControls } from "@react-three/drei";
import { Footer } from './footer';

const MainLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
     <Navbar />
     <MobileNavBar />
     <main>
      {/* <Container> */}
      {children}
      {/* </Container> */}
      </main>
      <Footer />
     {/* <main id="canvas-container">
      <Canvas>
        <ScrollControls pages={4} damping={0.1}>
          <Bg />
           <Scroll html>
            {children}
          </Scroll>
        </ScrollControls>
      </Canvas>
      </main> */}
    </>
  );
};

export default MainLayout;
