import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Section } from '@/components/global/Section'
import { Earth } from './Earth'


export const Hero = () => {
  const [isIPhone, setIsIPhone] = useState(false)

  const handleScroll = () => {
    const section = document.querySelector('#excite')

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  };

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
      <div id="hero-section" className="flex pt-navigation-height md:pt-0 mb-[16rem] flex-col md:mb-[6rem] md:flex-row md:justify-center items-center h-screen">
      <div id="one" className="hero-text-container text-white text-center flex flex-col justify-center items-center flex-1 md:pr-[2rem] md:pl-[8rem]">
          <h1 className="text-3xl md:text-5xl my-6">
              About Us
          </h1>
          <div className="hidden md:block font-md text-lg mb-[4rem] md:mb-8">
            Voltrox is about bringing like-minded people together
            who exemplify talent in various areas of
            technology to actualize our goal, 
            <br />
            BREATHE AND LIVE
          </div>
          <div className="md:hidden text-md mb-[4rem] md:mb-8 px-[2rem]">
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
        <div className={classNames("flex-1 mt-[2rem] md:mt-[8rem] md:ml-8 w-screen h-screen md:w-auto",
          `${isIPhone ? 'pb-[16rem]' : ''}`,
        )}>
          <Canvas>
            <OrbitControls 
              autoRotate={true}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />
          </Canvas>
        </div>
      </div>
    </Section>
  )
}