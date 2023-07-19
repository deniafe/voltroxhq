import { Hero } from './Hero'
import { About } from './About'
import { Social } from './Social'

export const Interface = () => {
  return (
    <div className={`bg-page-gradient pt-[1rem]`}>
      <Hero />
      <About />
      <Social />
    </div>
  )
}