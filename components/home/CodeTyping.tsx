import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Section } from '@/components/global/Section'
import { AquaKeyboard } from './AquaKeyboard'
import { Button } from '../global/button';
import { KeyboardShortcuts } from '../global/keyboard-shortcuts';
import { CommandMenu } from '../global/command-menu';
import { Container } from '../global/container';

export const CodeTyping = () => {
  return (
    <Section>
        <div className="flex flex-col flex-1 mt-[16rem] md:mb-[12rem] md:ml-2 w-screen h-screen md:w-auto md:mx-[2rem] md:mr-[6rem]">
            <div className="text-center">
              <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
                And How we work
              </h2>
              <p className="mx-auto max-w-[80rem] text-lg text-primary-text md:mb-7 md:text-xl">
              What sets us apart is our commitment to excellence and customer satisfaction. We follow a client-centric approach, ensuring that we thoroughly understand your requirements and goals before embarking on any project.
              </p>
            </div>
          <KeyboardShortcuts />
        </div>
    </Section>
  )
}
