import Image from 'next/image';

import { Section } from '@/components/global/Section'

export function Hero() {

  const handleScrollToTools = () => {
    const section = document.querySelector('#about-investors');

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  };

  return (
      <Section>
        <div id="hero-section" className="grid grid-cols-1 md:grid-cols-2 pt-navigation-height mb-[16rem]  md:mb-[8rem] px-[2rem] md:pr-[4rem] md:pl-[4rem] mt-[2rem] md:mt-[6rem]">
          <div className="text-white text-center md:pl-[3rem] md:pr[0rem] md:pt-[8rem]" >
            <h1 className="text-4xl md:text-6xl my-6">
              Angel Investors
            </h1>
            <div className="text-md mb-[4rem] md:block font-md md:text-lg md:mb-8">
            {`We're thrilled to have you here, and we can't wait to share more about 
              our exciting journey and investment opportunities. While our Investor Page is currently under 
              construction.
              `}
            </div>
            <div className="flex justify-center items-center">
              <button onClick={handleScrollToTools} className="rounded-full transition duration-150 ease-in-out px-8 py-2 bg-primary-gradient hover:bg-reverse-gradient text-white text-sm inline-block uppercase">
              Find Out More</button>
            </div>
            <div id="about-investors" ></div>
          </div>
          <div className="mt-[4rem] md:mt-0 md:pl-[6rem]">
            <Image src="/img/investment_safe.png" alt="Investment" height={500} width={500} />
          </div>
        </div>
      </Section>
  )
}


