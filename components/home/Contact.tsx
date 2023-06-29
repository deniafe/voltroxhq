import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { Section } from '@/components/global/Section'
import { Earth } from './Earth'

export const Contact = () => {
  return (
      <div id="hero-section" className="flex pt-navigation-height w-screen md:pt-0 flex-col mb-[6rem] md:flex-row md:justify-center items-center z-15">
       <div id="one" className="text-white text-center flex flex-col justify-center w-full items-center flex-1">
         <div className="mt-0 md:rounded-2xl md:mt-1 px-[4rem] py-[2rem] w-full md:w-10/12" style={{ background: 'rgb(255, 255, 255, 0.1)' }}>
          <div className="text-2xl md:text-3xl mb-4">
            Get In Touch With Us
          </div>
          <form
          action="https://api.sheetmonkey.io/form/fHj8A6RVtN9qTTafXjXVZ1" method="post"
          className='mt-6 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
            <span className='text-white text-sm font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              placeholder="What's your name?"
              required
              className='bg-background py-4 px-6 placeholder:text-secondary text-sm text-white rounded-lg outline-none border-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              placeholder="Your email?"
              required
              className='bg-background py-4 px-6 placeholder:text-secondary text-sm text-white rounded-lg outline-none border-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              placeholder="Message here"
              required
              className='bg-background py-4 px-6 placeholder:text-secondary text-sm text-white rounded-lg outline-none border-none'
            />
          </label>
          <div className="flex justify-center items-center">
            <button type="submit" className="rounded-full transition duration-50 ease-in-out cursor-pointer px-8 py-2 bg-transparent hover:bg-glass-gradient border border-white text-white hover text-sm inline-block uppercase">
            Contact Us</button>
          </div>
          </form>
         </div>
        </div>
          
        <div className="hidden md:flex flex-col flex-1 mt-12 md:mt-0 md:ml-8 w-screen h-screen md:w-auto">
          <Canvas  camera={{ position: [0, 0, 5], fov: 75 }}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
            <Earth />
          </Canvas>
        </div>
      </div>
  )
}
