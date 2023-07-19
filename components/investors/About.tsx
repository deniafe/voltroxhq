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
      <div className="text-center mx-[2rem] md:mx-auto mb-[8rem] md:mb-[8rem]">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-6xl">
        Stay tuned for the launch of our Investor Page
        </h2>
        <p className="mx-auto max-w-[80rem] text-lg text-primary-text md:mb-7 md:text-xl">
        {`We recognize the importance of fostering strong partnerships and collaborations to fuel our growth and 
          bring our vision to life. That's why we're commited to providing exceptional investment opportunities 
          that offer both financial rewards and the chance to be part of something truly extraordinar`}
        </p>
        <div className="flex justify-center items-center">
          <Image src="/img/investment_graph.png" alt="Investors" height={500} width={600} />
        </div>
      </div>

      <div className="text-white md:px-[12rem]" >
        <h2 className="text-3xl text-center md:text-start md:text-5xl my-6 px-[1rem] md:px-0">
          {`On our Investor Page, you'll soon find comprehensive information about our company, including`}
        </h2>
        <div className="text-sm text-primary-text px-[2rem] md:px-0 mb-[4rem] md:block font-md md:text-lg md:mb-[3rem]">
          <span className="font-bold" >1. Our Vision:</span>
        {` Learn about our mission, values, and the problems we're solving in the industry`}
        </div>
        <div className="text-sm text-primary-text px-[2rem] md:px-0 mb-[4rem] md:block font-md md:text-lg md:mb-[3rem]">
          <span className="font-bold" >2. Our Products:</span>
        {` Get an in-depth understanding of our innovative website, its unique features, and how 
          it sets us apart from the competition`}
        </div>
        <div className="text-sm text-primary-text px-[2rem] md:px-0 md:block font-md md:text-lg mb-[4rem] md:mb-[3rem]">
         <span className="font-bold" >3. Growth Potential::</span>
        {` Discover the market potential, target audience, and future growth projections that 
          make our company an exciting investment opportunity.`}
        </div>
        <div className="text-sm text-primary-text px-[2rem] md:px-0 md:block font-md md:text-lg mb-[4rem] md:mb-[3rem]">
          <span className="font-bold" >4. Investment Highlights:</span>
        {` Explore the key reasons why investing is a smart choice, including our talented 
          team, strong industry partnerships, and competitive advantages.`}
        </div>
        <div className="text-sm text-primary-text px-[2rem] md:px-0 md:block font-md md:text-lg mb-[4rem] md:mb-[3rem]">
         <span className="font-bold" >5. Financials:</span>
        {` Gain access to relevant financial data, including revenue streams, profitability projections, 
          and historical performance`}
        </div>
        <div className="text-sm text-primary-text px-[2rem] md:px-0 md:block font-md md:text-lg mb-[4rem] md:mb-[3rem]">
          <span className="font-bold" >6. How to Invest::</span>
        {` Find detailed information on how to become an investor, including the investment 
          process, minimum investment requirements, and contact details for our investor relaontis team`}
        </div>
        <div className="text-lg text-primary-text px-[2rem] md:px-0 md:block font-md md:text-2xl mb-[4rem] md:mt-[6rem]">
        {`Thank you for your interest in Voltrox HQ, LLC. We truly believe that together, we can achieve 
          remarkable things. We're excited to embark on this journey with passionate investors like you who share 
          our vision for success.`}
        </div>
        </div>
     
    </motion.div>
  );
};
