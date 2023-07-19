import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div className="pt-[1rem] mb-[12rem] md:mt-[2rem] md:mb-[16rem]"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      <div className="text-center mx-[2rem] md:mx-auto mb-[8rem] md:mb-[16rem]">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          We are a team of passionate 
          individuals 
        </h2>
        <p className="mx-auto max-w-[80rem] text-lg text-primary-text md:mb-7 md:text-xl">
        {`At Voltrox HQ, LLC, we believe that work should be both productive and fun. We're a team of passionate 
        individuals who are dedicated to revolutionizing the world with our innovative ideas and impeccable 
        dance moves`}
        </p>
      </div>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:pl-[8rem]'>
        <div>
          <Image src="/img/resume.png" alt="Career Resume" height={500} width={500} />
        </div>
        
        <div className="text-white text-center md:pr-[10rem] md:pt-[4rem]" >
          <h2 className="text-3xl md:text-3xl my-6">
            Unfortunately, our team is currently going through a brainstorming session
          </h2>
          <div className="text-lg text-primary-text px-[2rem] md:px-0 mb-[4rem] md:block font-md md:text-lg md:mb-2">
          {`We are figuring out how 
          to clone ourselves so we can hire more awesome people like you. We know, we're quite ambitious}`}
          </div>
          <div className="text-lg text-primary-text px-[2rem] md:px-0 md:block font-md md:text-lg mb-[4rem] md:mb-2">
          {`But fear not, aspiring job seekers! We assure you that very soon we'll be on the lookout for talented 
            individuals who are as brilliant as they are hilarious.`}
          </div>
          <div className="text-lg text-primary-text px-[2rem] md:px-0 md:block font-md md:text-lg mb-[4rem] md:mb-2">
          {`We're searching for team players who can bring 
          laughter, creativity, and a healthy appetite for “healthy” snacks to keep the juices flowing.`}
          </div>
          <div className="text-lg text-primary-text px-[2rem] md:px-0 md:block font-md md:text-lg mb-[4rem] md:mb-8">
          {`Check back later!`}
          </div>
        </div>
      </div>
     
    </motion.div>
  );
};
