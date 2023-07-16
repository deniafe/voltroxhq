import { Hero } from './Hero'
import { Services } from './Services'
import { Form } from '../global/Form'

export const Interface = () => {
  return (
    <div className={`bg-page-gradient pt-[1rem]`}>
      <Hero />
      <Services />
      <Form />
    </div>
  )
}