import React from "react";
import Image from 'next/image';
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export const Exite = () => {
  return (
    <motion.div className="pt-[1rem] mt-[16rem] md:mt-[16rem] md:mb-[8rem]"
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
      <div className="text-center px-[2rem] md:mx-auto mb-[8rem] md:mb-[8rem]">
        <h2  className="mb-4 text-2xl md:mb-7 md:text-7xl">
          We create exciting experiences
        </h2>
        <p id="excite" className="mx-auto max-w-[90rem] text-lg text-primary-text md:mb-7 md:text-lg">
        {`Innovation is at the heart of everything we do, and we believe that by pushing the boundaries of what's
          possible, we can make a positive impact on the world. As a B2B service provider, we aim to empower
          other businesses with the tools and resources they need to thrive in the ever-evolving landscape of the
          modern world.`}
        </p>
      </div>
      
    </motion.div>
  );
};
