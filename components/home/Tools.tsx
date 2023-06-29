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
      <p className="mt-[12rem] mb-[8rem] text-center text-xl text-white md:mb-[12rem] md:text-4xl">
        <span className="text-primary-text">
          Technologies we use to power your apps.
        </span>
        <br className="hidden md:block" /> From next-gen startups to established enterprises.
      </p>

      <div className="flex justify-around  mb-[4rem] md:mb-[8rem]">
        <motion.div
          className="animate-slide-left" // Tailwind CSS animation class
        >
          <HTML5Logo />
        </motion.div>
        {/* Include other logos with the same animation class */}
        <motion.div
          className="animate-slide-left"
        >
          <CSS3Logo />
        </motion.div>
        <motion.div
          className="animate-slide-left"
        >
           <FigmaLogo />
        </motion.div>
        <motion.div
          className="animate-slide-left"
        >
          <JavascriptLogo />
        </motion.div>
        <motion.div
          className="animate-slide-left"
        >
          <TypescriptLogo />
        </motion.div>
        <motion.div
          className="animate-slide-left"
        >
          <ReactLogo />
        </motion.div>
      </div>

      <div className="flex justify-around">
        <motion.div className="animate-slide-right">
          <AngularLogo />
        </motion.div>
        {/* Include other logos with the same animation class */}
        <motion.div className="animate-slide-right">
          <JavaLogo />
        </motion.div>
        <motion.div className="animate-slide-right">
          <PythonLogo />
        </motion.div>
        <motion.div className="animate-slide-right">
          <CLogo />
        </motion.div>
        <motion.div className="animate-slide-right">
          <FlutterLogo />
        </motion.div>
        <motion.div className="animate-slide-right">
          <PostgresqlLogo />
        </motion.div>
      </div>

      
    </Section>
  </>
);

