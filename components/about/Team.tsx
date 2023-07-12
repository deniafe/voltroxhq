import React from "react";
import Image from 'next/image';
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../global/utils/motion";

const teams = [
  {
    icon: '/img/adeyemi.png',
    title: "CEO",
    text: `Adeyemi Ayeni, our Co-founder & CEO, has a strong background in product development and plan management, 
          particularly in web development, design, and marketing. He has demonstrated his commitment to inspiring and motivating individuals 
          through his founding of the Afrogoats community page on social media with over 100 million in reach, which encourages excellence 
          and perseverance within the black community. Adeyemi is keen on social innovations that could drive force to the community at large 
          using technology to foster change.`,
  },
  {
    icon: '/img/shakira.png',
    title: "COO",
    text: `Shakira Johnson, our Co-Founder & COO, brings over 15 years of experience in various industries,
          including telecommunications. She is deeply passionate about advancing humanity and democracy, 
          with a strong emphasis on accountability in politics. She holds a master’s degree in public administration 
          from the University of Illinois at Chicago and worked in local government early on in her career before working in 
          telecommunications as a plan/supply chain manager respectively.`,
  },
];

type Service = {
  title: string;
  icon: string;
  text: string;
};

type ServiceCardProps = {
  index: number;
} & Service;

const TeamCard: React.FC<ServiceCardProps> = ({ index, title, text, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-page-gradient p-[1px] border-background border-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
     
        <h3 className='text-xl text-white text-[20px] font-bold text-center mt-[3rem] md:mt-[4rem] md:mb-[2rem]'>
          {title}
        </h3>

        <Image src={icon} alt="Logo" height={180} width={180} />

        <p className='text-sm mx-auto mt-[3rem] md:mt-[4rem]' >
          {text}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

export const Team = () => {
  return (
    <motion.div className="pt-[1rem] md:mt-[12rem] md:mb-[16rem]"
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
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          Meet Our Team
        </h2>
        <p className="mx-auto max-w-[80rem] text-lg text-primary-text md:mb-7 md:text-xl">
        {`Our team of talented individuals come together with a shared vision of cultivating winning products
        through collaboration and creativity. We are commited to providing our clients with exceptional care
        and building solid, respectful relationships, which is a core value instilled in our founder's personal lives.`}
        </p>
      </div>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-10'>
        {teams.map((service, index) => (
          <TeamCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.div>
  );
};
