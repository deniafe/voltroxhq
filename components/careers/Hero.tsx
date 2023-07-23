import Image from 'next/image';

import { Section } from '@/components/global/Section'

export function Hero() {

  const handleScrollToTools = () => {
    const section = document.querySelector('#about-career');

    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  };

  return (
      <Section>
        <div id="hero-section" className="grid grid-cols-1 md:grid-cols-2 pt-navigation-height mb-[16rem]  md:pt-0 px-[2rem] md:px-[4rem] mt-[2rem] md:mt-[8rem]">
          <div className="text-white text-center md:pt-[10rem] md:pr-[0rem] md:pl-[3rem]" >
            <h1 className="text-4xl md:text-6xl my-6 mb-[4rem]">
              Hring Soon
            </h1>
            <div className="text-md mb-[4rem] md:block font-md md:text-lg md:mb-8">
            {`Yes, "hring" is totally a word. Trust us, we're hiring geniuses. Stay tuned and keep an eye on this page because we're just one breakthrough away from expanding our 
              incredible team.`}
            </div>
            <div className="flex justify-center items-center">
              <button onClick={handleScrollToTools} className="rounded-full transition duration-150 ease-in-out px-8 py-2 bg-primary-gradient hover:bg-reverse-gradient text-white text-sm inline-block uppercase">
              Find Out More</button>
            </div>
            <div id="about-career" ></div>
          </div>
          <div className=" mt-[4rem] md:mt-0 md:pl-[4rem]">
            <Image src="/img/career_box.png" alt="Career Resume" height={600} width={600} />
          </div>
        </div>
      </Section>
  )
}


