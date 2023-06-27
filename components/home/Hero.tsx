import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Section } from '@/components/global/Section'
import { AquaKeyboard } from './AquaKeyboard'
import { Hero as HeroText, HeroTitle, HeroSubtitle } from "../global/hero"
import { Button } from '../global/button';

export const Hero = () => {
  return (
    <Section>
      <div id="hero-section" className="flex pt-navigation-height md:pt-0 flex-col mb-[6rem] md:flex-row md:justify-center items-center h-screen">
       <div id="one" className="hero-text-container text-white text-center flex flex-col justify-center items-center flex-1">
          <h1 className="text-lg mt-[4rem] md:mt-0 font-medium">Welcome To Voltrox</h1>
          <div className="text-4xl md:text-5xl my-8">
            <p className='mb-4'>
              <span className="text-primary leading-none">&#123;</span> Coding <span className="text-primary text-5xl leading-none">&#125;</span> the Future{' '}
              <span className="text-primary leading-none">=&gt; </span>
              <br className="hidden md:block" />
              Empowering Businesses with
              <br className="hidden md:block" />
              Innovative Solutions<span className="text-primary leading-none">;</span>
            </p>
           
          </div>
          <div className="flex justify-center items-center">
            <div className="rounded-full transition duration-150 ease-in-out px-8 py-2 bg-primary-button hover:bg-primary text-white text-sm inline-block uppercase">
            Contact Us</div>
            <div className=" px-8 py-2 transition duration-150 ease-in-out text-primary hover:text-teal-600 inline-block text-sm uppercase">
              Explore Voltrox</div>
          </div>
        </div>
          
        <div className="flex flex-col flex-1 mt-12 md:mt-0 md:ml-8 w-screen h-screen md:w-auto">
          <Canvas>
            {/* {testing ? <Stats /> : null}
            {testing ? <axesHelper args={[12]} /> : null}
            {testing ? <gridHelper args={[10, 10]} /> : null} */}
            {/* <OrbitControls /> */}
            <ambientLight intensity={1} />
            <AquaKeyboard />
          </Canvas>
        </div>
      </div>
    </Section>
  )
}
