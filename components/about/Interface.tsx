// import { Hero } from './Hero'
import { Team } from './Team'
import { Exite } from './Exite'
import { Form } from './Form'
import { Hero } from './Hero'
import { StarsCanvas } from '../about/Stars'

export const Interface = () => {
  return (
    <div className={`bg-page-gradient`}>
      <div className='relative z-10 w-screen'>
        <StarsCanvas />
        <div className="absolute top-1">
          <Hero />
        </div>
        </div>
      <Team />
      <Exite />
      <Form />
    </div>
  )
}