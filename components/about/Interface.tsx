// import { Hero } from './Hero'
import { Team } from './Team'
import { Exite } from './Exite'
import { Form } from './Form'
import { Hero } from './Hero'

export const Interface = () => {
  return (
    <div className={`bg-page-gradient px-[1rem] md:px-[4rem]`}>
      <Hero />
      <Team />
      <Exite />
      <Form />
    </div>
  )
}