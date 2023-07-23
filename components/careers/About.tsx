import React from "react";
import Image from 'next/image';
import { Section } from '@/components/global/Section'
import { StarsIllustration } from "@/components/global/icons/stars"
import classNames from "classnames"

export const About = () => {
  return (
    <Section>
      <div className="pt-[1rem] mb-[12rem] md:mb-[1rem]"
      >
        <div className="text-center mx-[2rem] md:mx-auto mb-[8rem] md:mb-[4rem]">
          <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
            Your Journey with Us Begins Next Round!
          </h2>
          <p className="mx-auto max-w-[80rem] text-sm text-primary-text md:mb-7 md:text-xl">
          At <span className="font-medium">Voltrox HQ, LLC,</span>{` we believe that work should be both productive and fun. We're a team of passionate 
          individuals who are dedicated to revolutionizing the world with our innovative ideas and impeccable 
          dance moves.`}
          </p>
        </div>
        <div
          className={classNames(
            "mask-radial-faded pointer-events-none relative z-[-1] my-[-16rem] md:mt-[-12.8rem] h-[60rem] overflow-hidden w-screen",
            "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
            "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
          )}
        >
          <StarsIllustration />
        </div>
      </div>
    </Section>
    
  );
};
