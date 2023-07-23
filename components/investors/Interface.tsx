import { Hero } from './Hero'
import { About } from './About'
import { Info } from './Info'

export const Interface = () => {
  return (
    <div className={`bg-page-gradient pt-[1rem]`}>
      <Hero />
      <About />
      <Info />
    </div>
  )
}