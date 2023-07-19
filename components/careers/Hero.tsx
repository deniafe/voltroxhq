import Image from 'next/image';

import { Section } from '@/components/global/Section'

export function Hero() {
  return (
      <Section>
        <div id="hero-section" className="grid grid-cols-1 md:grid-cols-2 pt-navigation-height mb-[16rem]  md:pt-0  md:mb-[16rem] px-[2rem] md:px-[4rem] mt-[2rem] md:mt-[10rem]">
          <div className="text-white text-center md:px-[6rem] md:pt-[8rem]" >
            <h1 className="text-4xl md:text-6xl my-[2rem] mb-[4rem]">
              We Soon Will Be Hring
            </h1>
            <div className="text-md mb-[1rem] md:block font-md md:text-lg md:mb-2">
            {`Yes, "hring" is totally a word. Trust us, we're hiring geniuses.`}
            </div>
            <div className="text-md md:block font-md md:text-lg">
            {`Stay tuned and keep an eye on this page because we're just one breakthrough away from expanding our 
              incredible team.`}
            </div>
            {/* <div className="text-md px-[2rem] md:px-0 md:block font-md md:text-lg mb-[4rem] md:mb-8">
            {`Check back later!`}
            </div> */}
          </div>
          <div className="md:pl-[4rem]">
            <Image src="/img/career_box.png" alt="Career Resume" height={500} width={500} />
          </div>
        </div>
      </Section>
  )
}


