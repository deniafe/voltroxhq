import React, { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import classNames from "classnames";

import { Section } from '@/components/global/Section'
import { Button } from '@/components/global/button'
import { AquaKeyboard } from './AquaKeyboard'

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isIPhone, setIsIPhone] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [])

  useEffect(() => {
    const isIPhone = /iPhone/i.test(navigator.userAgent)
    // Add logic specific to iPhone devices
    if (isIPhone) {
      // Perform actions for iPhone devices
      console.log('You are on an iPhone device')
      setIsIPhone(isIPhone)
    }
    console.log('Are you on an iPhone device', isIPhone)
    console.log(navigator.userAgent)
  }, []);

  return (
    <Section>
      <div id="hero-section" className="flex pt-navigation-height md:pt-0 flex-col md:mb-[6rem] md:flex-row md:justify-center items-center h-screen">
       <div id="one" className="hero-text-container text-white text-center flex flex-col justify-center items-center flex-1">
          {/* <h1 className="text-lg mt-[4rem] md:mt-0 font-medium">Welcome To Voltrox</h1> */}
          <h1 className="text-lg mt-[4rem] md:mt-0 font-medium">{ `${navigator.userAgent} : ${isIPhone}` }</h1>
          <div className="text-3xl md:text-5xl my-8">
            <p className="hidden md:block mb-4">
              <span className="text-primary leading-none">&#123;</span> Coding <span className="text-primary text-5xl leading-none">&#125;</span> the Future{' '}
              <span className="text-primary leading-none">=&gt; </span>
              <br />
              Empowering Businesses with 
              <br  />
              Innovative Solutions<span className="text-primary leading-none">;</span>
            </p>
            <p className="md:hidden md:mb-4">
              <span className="text-primary leading-none">&#123;</span> Coding <span className="text-primary text-5xl leading-none">&#125;</span> the Future{' '}
              <span className="text-primary leading-none">=&gt; </span>
              <br className="hidden md:block" />
              Empowering Businesses with Innovative Solutions<span className="text-primary leading-none">;</span>
            </p>
            
          </div>
          <div className="flex justify-center items-center">
            <div className="rounded-full transition duration-150 ease-in-out px-8 py-2 bg-primary-gradient hover:bg-primary text-white text-sm inline-block uppercase">
            Contact Us</div>
            <div className=" px-8 py-2 transition duration-150 ease-in-out text-primary hover:text-teal-600 inline-block text-sm uppercase">
              Explore Voltrox</div>
          </div>
          {/* <Button>Contact Us</Button> */}
        </div>
          
        <div className={classNames("flex flex-col flex-1 pl-0 md:pl-0 md:mt-0 md:ml-8 w-screen h-screen md:w-auto",
        `${isIPhone ? 'pt-[-8rem] pb-[20rem]' : ''}`,
         `${!isIPhone && isMobile ? 'pt-[4rem]' : ''}`
        )}>
          <Canvas camera={{ position: [0, 0, isIPhone ? 9 : 5.2] }}>
            <ambientLight intensity={1} />
              <AquaKeyboard />
          </Canvas>
        </div>
      </div>
    </Section>
  )
}
