import MainLayout from '@/components/global/MainLayout'
import HeroText from '@/components/HeroText'
import { Slider } from '@/components/services/Slider'
import { Section } from '@/components/global/Section'
import React from 'react'

export default function Career() {
  return (
    <MainLayout>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-navigation-height mb-[16rem] md:pt-0  md:mb-[16rem] px-[4rem]">
          <div>
            <HeroText />
          </div>
          <div>
            <Slider />
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}
