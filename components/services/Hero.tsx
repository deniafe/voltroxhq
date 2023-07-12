import React, { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import classNames from "classnames";
import Link from 'next/link';

import { Section } from '@/components/global/Section'
import { Office } from './Office5'
import { Adeyemi } from './Adeyemi'

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isIPhone, setIsIPhone] = useState(false)

  const handleScroll = () => {
    const section = document.querySelector('#contact-section');

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  };

  const handleScrollToTools = () => {
    const section = document.querySelector('#hero-image');

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  };

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
  }, [])

  return (
    <Section>
      <div id="hero-section" className="flex pt-navigation-height mb-[16rem] md:pt-0 flex-col md:mb-[16rem] md:flex-row md:justify-center items-center h-screen">
       <div id="one" className="hero-text-container text-white text-center flex flex-col justify-center items-center flex-1">
          <h1 className="text-lg mt-[4rem] md:mt-0 font-medium">Our Services</h1>
          {/* <h1 className="text-lg mt-[4rem] md:mt-0 font-medium">{ `${navigator.userAgent} : ${isIPhone}` }</h1> */}
          <div className="text-3xl md:text-5xl my-6">
            <p className="">
              Building On-The-Go 
            </p>
          </div>
          <div className="hidden md:block text-lg md:mb-8">
            At VOLTROX HQ LLC we specialize in the introduction of startups, 
            <br />
            marketing and software products that upend the status quo 
            <br />
            and distrupt markets for our clients
          </div>
          <div className="md:hidden text-lg mb-8">
            At VOLTROX HQ LLC we specialize in the introduction of startups, 
            marketing and software products that upend the status quo 
            and distrupt markets for our clients
          </div>
          <div className="flex justify-center items-center">
            <button onClick={handleScroll} className="rounded-full transition duration-150 ease-in-out px-8 py-2 bg-primary-gradient hover:bg-reverse-gradient text-white text-sm inline-block uppercase">
            Work With Us</button>
            {/* <button onClick={handleScrollToTools} className=" px-8 py-2 transition duration-150 ease-in-out text-primary hover:text-teal-600 inline-block text-sm uppercase">
              Explore Services</button> */}
          </div>
          {/* <Button>Contact Us</Button> */}
        </div>
          
        <div className={classNames("flex flex-col flex-1 pl-0 md:pl-0 md:mt-0 w-screen h-screen md:w-auto",
        `${isIPhone ? 'pt-[8rem] pb-[24rem]' : ''}`,
         `${!isIPhone && isMobile ? 'pt-[4rem]' : ''}`
        )}>
          <Canvas>
            <ambientLight intensity={1} />
              <Office />
              {/* <group name="Empty" position={[0.07, -0.6, 2.9]} rotation={[3.1, -2.2, 2.8]} scale={1}> */}
              <group name="Empty" position={[0.15, -0.45, 2.8]} rotation={[1.8, -3.3, 2.2]} scale={1}>
                <Adeyemi animation={"Typing"} />
              </group>
          </Canvas>
        </div>
      </div>
    </Section>
  )
}