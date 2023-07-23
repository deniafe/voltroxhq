import React from "react";
import Image from 'next/image';
import { Section } from '@/components/global/Section'

export const Dream = () => {
  return (
    <Section>
      <div className="pt-[1rem] mb-[12rem] md:mb-[4rem] mt-[-20rem] md:mt-[-10rem]"
      >

        <div className='md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:pr-[4rem]'>
        <div className="md:pl-[8rem] md:mt-[4rem]" >
          <Image src="/img/resume.png" alt="Career Resume" height={400} width={400} />
        </div>
          <div className="text-primary-text  text-center md:text-start" >
            <h2 className="text-4xl text-white md:text-7xl my-6">
              Keep in Touch With Us
            </h2>
              <div className="text-sm  px-[2rem] md:pr-[8rem] md:pl-[0] mb-2 md:block font-md md:text-lg md:mb-2">
              {`We are figuring out how 
              to clone ourselves so we can hire more awesome people like you. We know, we're quite ambitious.
              But fear not, aspiring job seekers! We assure you that very soon we'll be on the lookout for talented 
              individuals who are as brilliant as they are hilarious. We're searching for team players who can bring 
              laughter, creativity, and a healthy appetite for “healthy” snacks to keep the juices flowing.`}
              </div>
              <div className="text-sm px-[2rem] md:px-0 md:block font-md md:text-lg mb-[4rem] md:mb-8">
              {`Check back later!`}
              </div>
          </div>
        </div>
      
      </div>
    </Section>
    
  );
};
