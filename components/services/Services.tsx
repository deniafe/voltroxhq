import React from "react";
import Image from 'next/image';
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../global/utils/motion";

const services = [
  {
    icon: '/img/custom_dev-bg.png',
    title: "Custom Software",
    text: "We specialize in developing custom software solutions from ERP to CRM and other SaaS solutions tailored to your business needs. ",
  },
  {
    icon: '/img/web_dev-bg.png',
    title: "Web Development",
    text: "Our web development services encompass front-end and back-end development, ensuring visually appealing and functional websites.",
  },
  {
    icon: '/img/software_dev-bg.png',
    title: "Software Integration",
    text: "We specialize in integrating software systems, ensuring seamless data exchange and communication between different applications.",
  },
  {
    icon: '/img/mobile_dev-bg.png',
    title: "Mobile App Development",
    text: "We create user-friendly and feature-rich mobile applications for iOS and Android platforms.",
  },
  {
    icon: '/img/ui_ux-bg.png',
    title: "UI/UX Design",
    text: "We focus on delivering exceptional user experiences through intuitive and visually appealing user interfaces.",
  },
  {
    icon: '/img/3d-bg.png',
    title: "3D Modeling and Animation",
    text: " Whether you need product visualizations, architectural renderings, character modeling, or interactive 3D experiences, we can bring your ideas to life.",
  },
  {
    icon: '/img/consulting-bg.png',
    title: "Consulting and Technology Advisory.",
    text: "We offer consulting services to help businesses make informed decisions regarding technology solutions.",
  },
  {
    icon: '/img/digital_marketing-bg.png',
    title: "Digital Marketing Services",
    text: " We offer a comprehensive range of digital marketing services to help businesses establish a strong online presence, increase brand visibility, and drive targeted traffic to their websites.",
  },
  {
    icon: '/img/ui_ux-bg.png',
    title: "Branding Services.",
    text: "We work closely with our clients to capture their vision and values, ensuring that the branding reflects their unique identity and resonates with their target audience.",
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

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, text, icon }) => (
  <Tilt className='xs:w-[250px] w-full px-[2rem] md:px-0'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-page-gradient p-[1px] border-primary border-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <Image src={icon} alt={title} height={110} width={110} />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p className='text-sm' >
          {text}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

export const Services = () => {
  return (
    <motion.div className="pt-[1rem] mb-[12rem] md:mt-[16rem] md:mb-[16rem]"
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
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          Work With Voltrox
        </h2>
        <p className="mx-auto max-w-[80rem] text-lg text-primary-text md:mb-7 md:text-xl">
        {`Our team of skilled experts is passionate about helping startups and business owners with end-to-end
        solutions and bringing ideas to reality. We extensively collaborate with our clients to comprehend their
        needs, objectives, and aspirations because we value collaboration, openness, and accountability.`}
        </p>
      </div>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:px-[4rem]'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.div>
  );
};
