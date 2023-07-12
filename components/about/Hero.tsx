import React, { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import classNames from "classnames";
import Link from 'next/link';

import { Section } from '@/components/global/Section'
import { AboutHero } from './AboutHero'

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
      <div id="hero-section" className="flex pt-navigation-height md:pt-0 flex-col md:mb-[6rem] md:flex-row md:justify-center items-center h-screen">
      <div id="one" className="hero-text-container text-white text-center flex flex-col justify-center items-center flex-1">
          <h1 className="text-lg mt-[4rem] md:mt-0 font-medium">About Us</h1>
          <div className="text-3xl md:text-5xl my-6">
            <p className="">
              Breathe And Live 
            </p>
          </div>
          <div className="hidden md:block text-lg mb-[4rem] md:mb-8">
            Voltrox is about bringing like-minded people together
            <br />
            who exemplify talent in various areas of
            technology to actualize our goal,
            <br />
            BREATHE AND LIVE
          </div>
          <div className="md:hidden text-md mb-[4rem] md:mb-8">
            Voltrox is about bringing like-minded people together
            who exemplify talent in various areas of
            technology to actualize our goal,
            <br />
            BREATHE AND LIVE
          </div>

          <div className="flex justify-center items-center">
            <button onClick={handleScroll} className="rounded-full transition duration-150 ease-in-out px-8 py-2 bg-primary-gradient hover:bg-reverse-gradient text-white text-sm inline-block uppercase">
            Get In Touch</button>
          </div>
        </div>
          
        <div className={classNames("flex flex-col flex-1 pl-0 md:pl-0 md:mt-0 md:ml-8 w-screen h-screen md:w-auto",
        `${isIPhone ? 'pt-[8rem] pb-[20rem]' : ''}`,
        //  `${!isIPhone && isMobile ? 'pt-[8rem]' : ''}`
        )}>
          <Canvas>
            <ambientLight intensity={1} />
              <AboutHero />
          </Canvas>
        </div>
      </div>
    </Section>
  )
}