import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
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
          {/* <h1 className="text-lg mt-[4rem] md:mt-0 font-medium">Our Services</h1> */}
          {/* <h1 className="text-lg mt-[4rem] md:mt-0 font-medium">{ `${navigator.userAgent} : ${isIPhone}` }</h1> */}
          <div className="text-3xl md:text-5xl my-6">
            <p className="">
              Build On-The-Go 
            </p>
          </div>
          <div className="hidden md:block text-md md:mb-8  px-[4rem]">

            <motion.div 
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 1.5,
                repeat: Infinity,
                repeatDelay: 8
              }}
            >
              At VOLTROX HQ LLC we specialize in the introduction of startups, 
              {/* <br /> */}
              marketing and software products that upend the status quo 
              {/* <br /> */}
              and distrupt markets for our clients
            </motion.div>

            {/* <motion.div 
              className="mt-4 "
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 4,
                repeat: Infinity,
                repeatDelay: 8
              }}
            >
              We create experiences that excite consumers 
              <br />
              and add value for our clients, not just software products.
            </motion.div> */}

            <motion.div 
             className="mt-4 "
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 3,
                repeat: Infinity,
                repeatDelay: 8
              }}
            >
              We make sure that our solutions are scalable, safe,
              {/* <br /> */}
              and user-friendly by utilizing cuttng-edge
              {/* <br /> */}
              technologies and agile techniques.
            </motion.div>

            <motion.div 
             className="mt-4 "
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 4.5,
                repeat: Infinity,
                repeatDelay: 8
              }}
            >
              We are here to support you in reaching your goals,
              {/* <br /> */}
              whether your startup looking to introduce your first product, 
              {/* <br /> */}
              or an established business looking to innovate and stay one step ahead of the competition. 
              {/* <br /> */}

            </motion.div>

            <motion.div 
             className="mt-4 "
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 6,
                repeat: Infinity,
                repeatDelay: 8
              }}
            >
              {`Let's build the future together, one innovative product at a time.`}
            </motion.div>
          </div>
         
          <div className="md:hidden text-lg mb-8 px-[2rem]">
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
          
        <div className={classNames("flex flex-col flex-1 px-[4rem] md:mt-0 w-screen md:w-1/2 md:mb-0",
        // `${isIPhone ? 'pt-[8rem] pb-[24rem]' : ''}`,
        //  `${!isIPhone && isMobile ? 'pt-[4rem]' : ''}`
        )}>
          <Slider />
          {/* <Canvas>
            <ambientLight intensity={1} />
              <Office />
              <group name="Empty" position={[0.15, -0.45, 2.8]} rotation={[1.8, -3.3, 2.2]} scale={1}>
                <Adeyemi animation={"Typing"} />
              </group>
          </Canvas> */}
        </div>
      </div>
    </Section>
  )
}