import React, { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import classNames from "classnames";
import Link from 'next/link';

import { Section } from '@/components/global/Section'
import { Button } from '@/components/global/button'
import { AquaKeyboard } from './AquaKeyboard'

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
      <div id="hero-section" className=" flex pt-navigation-height md:pt-0 flex-col md:flex-row md:justify-center items-center h-screen">
       <div id="one" className="hero-text-container text-white text-center flex flex-col justify-center items-center flex-1 relative z-10">
          <h1 className="text-lg mt-[4rem] md:mt-0 font-medium">Welcome To Voltrox</h1>
          {/* <h1 className="text-lg mt-[4rem] md:mt-0 font-medium">{ `${navigator.userAgent} : ${isIPhone}` }</h1> */}
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
            <Link href="/services#contact-section" className="rounded-full transition duration-150 ease-in-out px-8 py-2 bg-primary-gradient hover:bg-reverse-gradient text-white text-sm inline-block uppercase">
            Contact Us</Link>
            <button onClick={handleScrollToTools} className=" px-8 py-2 transition duration-150 ease-in-out text-primary hover:text-teal-600 inline-block text-sm uppercase">
                Explore Voltrox
            </button>
          </div>
          
        </div>
          
        {/* <div className={classNames("flex flex-col flex-1 pl-0 md:pl-0 md:mt-0 md:ml-8 w-screen h-screen md:w-auto",
        `${isIPhone ? 'pt-[-14rem] pb-[20rem]' : ''}`,
         `${!isIPhone && isMobile ? 'pt-[4rem]' : ''}`
        )}>
          <Canvas camera={{ position: [0, 0, isIPhone ? 7 : 4.9] }}>
            <ambientLight intensity={1} />
              <AquaKeyboard />
          </Canvas>
        </div> */}

        <div id="two" className="flex flex-col flex-1 items-center justify-center mt-[16rem] md:mt-[0rem] relative z-0 md:overflow-hidden overflow-hidden">
            {/* <video src="./img/hero.gif" alt="Hero GIF" /> */}
            <video 
            src="./img/hero_2.mp4" 
            controls={false} 
            loop
            autoPlay 
            muted
            style={{
              width: '100%', // Set the video player width to fit the container
              height: '100%', // Set the video player height to fit the container
              objectFit: 'cover', // Ensure the video content covers the player area
              transform: `${isMobile ? 'scale(1)' :'scale(1.3)'}`, // Apply the scaling transformation for zoom (e.g., 'scale(1.5)' for 150% zoom)
              transformOrigin: 'center', // Set the transformation origin to the center (optional)
            }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

    </Section>
  )
}