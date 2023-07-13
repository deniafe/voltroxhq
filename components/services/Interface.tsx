import { Hero } from './Hero'
import { Services } from './Services'
import { Form } from './Form'

export const Interface = () => {
  return (
    <div className={`bg-page-gradient`}>
      <Hero />
      <Services />
      <Form />
    </div>
  )
}