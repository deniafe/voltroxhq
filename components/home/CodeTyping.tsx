import React from 'react'
import { Section } from '@/components/global/Section'
import { KeyboardShortcuts } from '../global/keyboard-shortcuts';

export const CodeTyping = () => {
  return (
    <Section>
        <div className="flex flex-col flex-1 mt-[16rem] md:mb-[12rem] md:ml-2 w-screen md:h-screen md:w-auto md:mx-[2rem] md:mr-[6rem]">
            <div className="text-center mx-[2rem] md:mx-auto mb-[8rem] ">
              <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
                How we work
              </h2>
              <p className="mx-auto max-w-[80rem] text-lg text-primary-text md:text-xl">
              What sets us apart is our commitment to excellence and customer satisfaction. We follow a client-centric approach, ensuring that we thoroughly understand your requirements and goals before embarking on any project.
              </p>
            </div>
          <KeyboardShortcuts />
        </div>
    </Section>
  )
}
