import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { TwitterIcon } from "../global/icons/twitter";
import { FacebookIcon } from "../global/icons/Facebook";
import { InstagramIcon } from "../global/icons/Instagram";
import { GithubIcon } from "../global/icons/github";
import { LinkedInIcon } from "../global/icons/LinkedIn";
import { Section } from '@/components/global/Section';

const socialMediaData = [
  {
    url: "https://twitter.com/VoltroxHQ",
    icon: <TwitterIcon size={35} />,
  },
  {
    url: "https://facebook.com/voltroxhq",
    icon: <FacebookIcon size={35} />,
  },
  {
    url: "https://www.instagram.com/voltroxhq",
    icon: <InstagramIcon size={35} />,
  },
  {
    url: "https://github.com/VoltroxHQ",
    icon: <GithubIcon size={35} />,
  },
  {
    url: "https://www.linkedin.com/company/voltroxhq",
    icon: <LinkedInIcon size={35} />,
  },
];

export const Social = () => {
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
      <div className="pt-[1rem] mb-[12rem] md:mt-[16rem] md:mb-[16rem]">
        <div className="text-center mx-[2rem] md:mx-auto mb-[8rem] md:mb-[8rem]">
          <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
            {`Remember, we'll be hiring soon`}
          </h2>
          <p className="mx-auto max-w-[80rem] text-lg text-primary-text md:mb-7 md:text-xl">
            {`In the meantime, why not follow us on social media? We post memes, behind-the-scenes shenanigans, 
            and occasional videos of our team attempting to breakdance. It's pure entertainment, we assure you.`}
          </p>
        </div>
        <div className="mt-auto flex space-x-2 md:space-x-16 justify-center md:pr-0 text-grey ">
          {socialMediaData.map((socialMedia, index) => (
            // <div
            //  key={index}
            //  className="bg-page-gradient rounded p-3 md:p-[3rem] shadow-md transform transition-transform hover:shadow-lg hover:-translate-y-1"
            //  >
              <a key={index} href={socialMedia.url}  className="bg-page-gradient rounded p-3 md:p-[3rem] shadow-md transform transition-transform hover:shadow-lg hover:-translate-y-1" target="_blank">
                {socialMedia.icon}
              </a>
            // </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
