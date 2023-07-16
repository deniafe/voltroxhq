import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedText from './AnimatedText';
// import "./styles.css";

export default function HeroText() {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    {
      type: "paragraph",
      text: 'At VOLTROX HQ LLC we specialize in the introduction of startups, marketing and software products that upend the status quo and distrupt markets for our clients'
    },
    {
      type: "paragraph",
      text: `We make sure that our solutions are scalable, safe, and user-friendly by utilizing cuttng-edge technologies and agile techniques.`
    },
    {
      type: "paragraph",
      text: `We are here to support you in reaching your goals, whether your startup looking to introduce your first product, or an established business looking to innovate and stay one step ahead of the competition.`
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  const handleScroll = () => {
    const section = document.querySelector('#excite');

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  };

  // Quick and dirt for the example
  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleReplay();
    }, 14000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-center md:px-[4rem]">
      <h1 className="text-3xl md:text-5xl my-6">
        Build On-The-Go 
      </h1>
      <motion.div
        className="w-auto"
        initial="hidden"
        // animate="visible"
        animate={replay ? "visible" : "hidden"}
        variants={container}
      >
        <div style={{fontSize: "16px" }}>
          {placeholderText.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>
      </motion.div>

      <div className="mt-[4rem]">
          <button onClick={handleScroll} className="rounded-full transition duration-150 ease-in-out px-8 py-2 bg-primary-gradient hover:bg-reverse-gradient text-white text-sm inline-block uppercase">
          Work With Us</button>
        </div>
    </div>
  );
}
