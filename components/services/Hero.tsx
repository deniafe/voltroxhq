import HeroText from './HeroText'
import { Slider } from '@/components/services/Slider'
import { Section } from '@/components/global/Section'
import { useEffect } from 'react'

export function Hero() {
  useEffect(() => {
    const anchor = window.location.hash.slice(1); // Get the anchor part of the URL without the '#'

    if (anchor) {
      const section = document.getElementById('excite');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } 
  }, []);
  return (
      <Section>
        <div id="hero-section" className="grid grid-cols-1 md:grid-cols-2 pt-navigation-height mb-[16rem]  md:pt-0  md:mb-[8rem] px-[4rem] mt-[8rem]">
          <div>
            <HeroText />
          </div>
          <div>
            <Slider />
          </div>
        </div>
      </Section>
  )
}


