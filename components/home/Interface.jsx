import { StarsIllustration } from "@/components/global/icons/stars"
import { Hero } from './Hero'
import { HeroImage } from './HeroImage'
import { CodeTyping } from './CodeTyping'
import { EnjoyIssueTracking } from './enjoy-issue-tracking' 
import { Tools } from './Tools'
import classNames from "classnames"

const Interface = () => {

  return (
    <div className={``}>
       <div className={`bg-[#141631]`}>
         <Hero />
      </div>
      <div className={`bg-page-linear-gradient mt-[-6rem] pt-[16rem] md:pt-[2rem]`}>
        <Tools />
        <HeroImage />
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
      {/* <div className='relative z-10 w-screen'>
        <StarsCanvas />
        <div className="absolute top-1">
          <Contact />
        </div>
        </div> */}
       </div>
    </div>
  )
}

export default Interface;