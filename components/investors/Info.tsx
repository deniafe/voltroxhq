import React from "react";
import { motion } from "framer-motion";
import { IoEarthOutline } from "react-icons/io5"
import { IoColorWandOutline } from "react-icons/io5"
import { IoCashOutline } from "react-icons/io5"
import { IoBarChartOutline } from "react-icons/io5"
import { IoTelescopeOutline } from "react-icons/io5"
import { IoBriefcaseOutline } from "react-icons/io5"

export const Info = () => {
  const contentData = [
    {
      title: "Our Vision:",
      text: `Learn about our mission, values, and the problems we're solving in the industry.`,
      icon: <IoEarthOutline/>
    },
    {
      title: "Our Products:",
      text: `Get an in-depth understanding of our innovative website, its unique features, and how it sets us apart from the competition.`,
      icon: <IoColorWandOutline />
    },
    {
      title: "Financials:",
      text: `Gain access to relevant financial data, including revenue streams, profitability projections, and historical performance.`,
      icon: <IoCashOutline />
    },
    {
      title: "Growth Potential:",
      text: `Discover the market potential, target audience, and future growth projections that make our company an exciting investment opportunity.`,
      icon: <IoBarChartOutline />
    },
    {
      title: "Investment Highlights:",
      text: `Explore the key reasons why investing is a smart choice, including our talented team, strong industry partnerships, and competitive advantages.`,
      icon: <IoTelescopeOutline />
    },
    {
      title: "How to Invest:",
      text: `Find detailed information on how to become an investor, including the investment process, minimum investment requirements, and contact details for our investor relations team.`,
      icon: <IoBriefcaseOutline />
    },
  ];

  return (
    <motion.div
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
      <div className="pt-4 pb-16 md:pt-[4rem] md:pb-16 md:px-[4rem]  md:mb-[8rem]  text-center">
        <div className="text-white md:px-12">
          <h2 className="text-3xl md:text-5xl my-6 px-1 md:px-0">
            {` Harness The Potential Of A Dynamic Partnership`}
          </h2>
          <div className="text-lg text-primary-text px-2 md:px-0 md:block font-md md:text-2xl mb-16 md:mb-20 md:mt-8">
            {`Get ready for a shocking ride into the future of innovation and growth. On our Investor Page, you'll soon find comprehensive information about our company, including`}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mb-8 md:mb-12">
            {contentData.map((content, index) => (
              <div
                key={index}
                className="text-sm text-primary-text text-start px-8 md:px-0 mb-4 md:block font-md md:text-lg md:mb-3"
              >
                  <div className="flex items-start">
                    <span className="md:text-2xl pr-[1rem] text-primary-gradient">{content.icon}</span>
                    <span className="font-bold">{content.title}</span>
                  </div>
                {` ${content.text}`}
              </div>
            ))}
          </div>
          <div className="text-sm text-primary-text px-4 md:block font-md md:text-lg mb-4 md:mt-[8rem] md:px-[6rem] bg-hero-gradient shadow rounded py-8 md:py-[3rem]">
           Thank you for your interest in <span className="font-medium">Voltrox HQ, LLC</span>. We truly believe that together, we can achieve 
            remarkable things.  {`We're excited to embark on this journey with passionate investors like you who share 
            our vision for success.`}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
