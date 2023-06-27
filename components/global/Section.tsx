import { motion } from 'framer-motion'
import React from 'react'

export const Section = (props: { children: React.ReactNode }) => {
  const { children } = props

  return <motion.section className={`
  h-screen w-screen
  `}
  initial={{
    opacity: 0,
    y: 50,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.6,
    },
  }}
  >{children}</motion.section>
}
