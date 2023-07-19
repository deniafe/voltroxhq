import Image from 'next/image';

import { Section } from '@/components/global/Section'

export function Hero() {
  return (
      <Section>
        <div id="hero-section" className="grid grid-cols-1 md:grid-cols-2 pt-navigation-height mb-[16rem]  md:pt-0  md:mb-[16rem] px-[2rem] md:px-[4rem] mt-[2rem] md:mt-[10rem]">
          <div className="text-white text-center md:px-[6rem] md:pt-[4rem]" >
            <h1 className="text-4xl md:text-6xl my-6">
              Welcome to our 
              Investor Page
            </h1>
            <div className="text-md mb-[4rem] md:block font-md md:text-lg md:mb-2">
            {`We're thrilled to have you here, and we can't wait to share more about 
              our exciting journey and investment opportunities. While our Investor Page is currently under 
              construction, we promise it will be worth the wait!
              `}
            </div>
          </div>
          <div className="md:pl-[4rem]">
            <Image src="/img/investment_safe.png" alt="Investment" height={500} width={500} />
          </div>
        </div>
      </Section>
  )
}


