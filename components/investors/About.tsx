import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div className="pt-[1rem] mb-[12rem] md:mt-[8rem] md:mb-[4rem]"
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
      <div className="text-center mx-[2rem] md:mx-auto mb-[8rem]">
        <h2 className="mb-4 text-3xl md:mb-7 md:text-6xl">
        Stay tuned for the launch of our Investor Page
        </h2>
        <p className="mx-auto max-w-[80rem] text-lg text-primary-text md:mb-7 md:text-xl">
        {`We recognize the importance of fostering strong partnerships and collaborations to fuel our growth and 
          bring our vision to life. That's why we're commited to providing exceptional investment opportunities 
          that offer both financial rewards and the chance to be part of something truly extraordinary.`}
        </p>
        <div className="flex justify-center items-center">
          <Image src="/img/investment_graph.png" alt="Investors" height={500} width={600} />
        </div>
      </div>
    </motion.div>
  );
};
