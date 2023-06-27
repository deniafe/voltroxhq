import { Section } from '@/components/global/Section'
import { StarsIllustration } from "@/components/global/icons/stars";
import { Container } from '../global/container';
import { Hero } from './Hero'
import { HeroImage } from './HeroImage'
import { CodeTyping } from './CodeTyping'
import { EnjoyIssueTracking } from './enjoy-issue-tracking'
import { Tools } from './Tools';
import classNames from "classnames"
import { CommandMenu } from "../global/command-menu";

export const Interface = () => {
  return (
    <div className={`flex flex-col items-center w-screen bg-page-gradient`}>
      <Hero />
      <Tools />
      {/* <div className="hidden md:block"> */}
        <HeroImage />
      {/* </div> */}
      
        <div
          className={classNames(
            "mask-radial-faded pointer-events-none relative z-[-1] my-[-32.8rem] md:mt-[-12.8rem] h-[60rem] overflow-hidden w-screen",
            "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
            "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
          )}
        >
          <StarsIllustration />
        </div>

      <CodeTyping />

      <EnjoyIssueTracking />
      {/* <BuildMomentum />
      <SetDirection /> */}
      {/* <Section>
        <h1>Projects</h1>
      </Section> */}
      {/* <ContactSection />
      <SkillsSection />
      <ContactSection /> */}
    </div>
  )
}