import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
// import "./styles.css";

export function HeroText() {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    // { type: "heading1", text: "Build On-The-Go " },
    {
      type: "paragraph",
      text: `At VOLTROX HQ LLC we specialize in the introduction of startups, marketing and software products that upend the status quo and distrupt markets for our clients`
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
    <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
      {/* <button onClick={handleReplay}>
        Replay <span>⟲</span>
      </button> */}
    </motion.div>
  );
}
