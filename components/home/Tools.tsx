import { Section } from "../global/Section";
import { motion, AnimatePresence } from "framer-motion";
import { FigmaLogo } from "../global/logos/figma";
import { JavascriptLogo } from "../global/logos/javascript";
import { PythonLogo } from "../global/logos/python";
import { JavaLogo } from "../global/logos/java";
import { AngularLogo } from "../global/logos/angular";
import { HTML5Logo } from "../global/logos/html5";
import { FlutterLogo } from "../global/logos/flutter";
import { PostgresqlLogo } from "../global/logos/postgresql";
import { ReactLogo } from "../global/logos/react";
import { CSS3Logo } from "../global/logos/css3";
import { CLogo } from "../global/logos/c";
import { NodejsLogo } from "../global/logos/nodejs";
import { TypescriptLogo } from "../global/logos/typescript";
import { HeroImage } from "./HeroImage";

export const Tools = () => (
  <>
    <Section>
      <p className="mb-[12rem] mt-[12rem] text-center text-xl text-white md:text-4xl">
        <span className="text-primary-text">
          Technologies we use to power your apps.
        </span>
        <br className="hidden md:block" /> From next-gen startups to established enterprises.
      </p>

      <div className="flex justify-around mb-12 mt-12 flex-wrap">
        <AnimatePresence mode='wait'>
          <motion.div
            key="html5"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 5, // Adjust the duration for a slower animation
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
              ease: "linear",
            }}
            className="logo"
          >
            <HTML5Logo />
          </motion.div>
        </AnimatePresence>
        {/* Include other logos with the same animation configuration */}
        <AnimatePresence mode='wait'>
          <motion.div
            key="css3"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 5, // Adjust the duration for a slower animation
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.1,
              ease: "linear",
            }}
            className="logo"
          >
            <CSS3Logo />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <motion.div
            key="figma"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 5, // Adjust the duration for a slower animation
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.1,
              ease: "linear",
            }}
            className="logo"
          >
            <FigmaLogo />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <motion.div
            key="javascript"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 5, // Adjust the duration for a slower animation
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.1,
              ease: "linear",
            }}
            className="logo"
          >
            <JavascriptLogo />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <motion.div
            key="typescript"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 5, // Adjust the duration for a slower animation
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.1,
              ease: "linear",
            }}
            className="logo"
          >
            <TypescriptLogo />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <motion.div
            key="react"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 5, // Adjust the duration for a slower animation
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.1,
              ease: "linear",
            }}
            className="logo"
          >
            <ReactLogo />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-around">
        <AnimatePresence mode='wait'>
          <motion.div
            key="angular"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              duration: 5, // Adjust the duration for a slower animation
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.1,
              ease: "linear",
            }}
          >
            <AngularLogo />
          </motion.div>
        </AnimatePresence>
        {/* Include other logos with the same animation configuration */}
        <AnimatePresence mode='wait'>
          <motion.div
            key="java"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              duration: 5, // Adjust the duration for a slower animation
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.1,
              ease: "linear",
            }}
          >
            <JavaLogo />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <motion.div
            key="python"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              duration: 5, // Adjust the duration for a slower animation
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.1,
              ease: "linear",
            }}
          >
            <PythonLogo />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <motion.div
            key="c"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              duration: 5, // Adjust the duration for a slower animation
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.1,
              ease: "linear",
            }}
          >
            <CLogo />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <motion.div
            key="flutter"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              duration: 5, // Adjust the duration for a slower animation
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.1,
              ease: "linear",
            }}
          >
            <FlutterLogo />
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode='wait'>
          <motion.div
            key="postgresql"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              duration: 5, // Adjust the duration for a slower animation
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.1,
              ease: "linear",
            }}
          >
            <PostgresqlLogo />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* <div className="md:hidden">
        <HeroImage />
      </div> */}
      
    </Section>
  </>
);
