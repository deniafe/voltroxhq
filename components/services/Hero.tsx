import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import { HeroText } from './HeroText'
import classNames from "classnames";
import Link from 'next/link';

import { Section } from '@/components/global/Section'
import { Slider } from './Slider'
// import { Adeyemi } from './Adeyemi'

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


  // const animationVariants = {
  //   initial: {
  //     opacity: 0,
  //     y: 25,
  //   },
  //   whileInView: {
  //     opacity: 1,
  //     y: 0,
  //   },
  //   animate: {
  //     opacity: 1,
  //     y: 0,
  //   },
  //   exit: {
  //     opacity: 0,
  //     y: 25,
  //   },
  // };

  const animationTransition = {
    duration: 1,
    delay: 1.5,
    repeat: Infinity,
    repeatType: 'reverse',
  };


  return (
    <Section>
      <div id="hero-section" className="flex pt-navigation-height mb-[16rem] md:pt-0 flex-col md:mb-[16rem] md:flex-row md:justify-center items-center md:h-screen">
       <div id="one" className="hero-text-container text-white text-center flex flex-col justify-center items-center flex-1">
        <div className="text-3xl md:text-5xl my-6">
          <p className="">
            Build On-The-Go 
          </p>
        </div>
        <div className="text-md mb-8 nowrap px-[2rem] md:px-[4rem]">
         <HeroText />
        </div>
        <div className="flex justify-center items-center">
          <button onClick={handleScroll} className="rounded-full transition duration-150 ease-in-out px-8 py-2 bg-primary-gradient hover:bg-reverse-gradient text-white text-sm inline-block uppercase">
          Work With Us</button>
        </div>
        </div>
          
        <div className={classNames("flex flex-col flex-1 px-[4rem] md:mt-0 w-screen md:w-1/2 md:mb-0",
        )}>
          <Slider />
        </div>
      </div>
    </Section>
  )
}