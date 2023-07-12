import { Hero } from './Hero'
import { Services } from './Services'
import { Form } from './Form'

export const Interface = () => {
  return (
    <div className={`bg-page-gradient px-[1rem] md:px-[4rem]`}>
      <Hero />
      <Services />
      <Form />
    </div>
  )
}