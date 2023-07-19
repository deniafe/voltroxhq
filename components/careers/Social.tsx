import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { TwitterIcon } from "../global/icons/twitter";
import { FacebookIcon } from "../global/icons/Facebook";
import { InstagramIcon } from "../global/icons/Instagram";
import { GithubIcon } from "../global/icons/github";
import { LinkedInIcon } from "../global/icons/LinkedIn";

export const Social = () => {
  return (
    <motion.div className="pt-[1rem] mb-[16rem] md:mt-[2rem] md:mb-[16rem]"
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
        <h2 className="mb-4 text-3xl md:mb-7 md:text-4xl">
          {`Remember, we'll be hiring soon`}
        </h2>
        <p className="mx-auto max-w-[80rem] text-lg text-primary-text md:mb-7 md:text-xl">
        {`In the meantime, why not follow us on social media? We post memes, behind-the-scenes shenanigans, 
          and occasional videos of our team atempting to breakdance. It's pure entertainment, we assure you`}
        </p>
      </div>
      <div className="mt-auto flex space-x-[2rem] md:space-x-16 justify-center md:pr-0 text-grey">
        <a href="https://twitter.com/VoltroxHQ" target="_blank">
          <TwitterIcon size={35} />
        </a>
        <a href="https://facebook.com/voltroxhq" target="_blank">
          <FacebookIcon size={35} />
        </a>
        <a href="https://www.instagram.com/voltroxhq" target="_blank">
          <InstagramIcon size={35} />
        </a>
        <a href="https://github.com/VoltroxHQ" target="_blank">
          <GithubIcon size={35}/>
        </a>
        <a href="https://www.linkedin.com/company/voltroxhq" target="_blank">
        <LinkedInIcon size={35} />
        </a> 
      </div>
     
    </motion.div>
  );
};
