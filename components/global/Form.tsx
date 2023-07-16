import React from 'react'
import { Section } from '@/components/global/Section'

export const Form = () => {
  return (
      <Section>
        <div 
        id="contact-section" 
        className="flex pt-navigation-height w-screen md:pt-0 flex-col mb-[6rem] md:flex-row md:justify-center items-center z-15"
        >
        <div id="contact-us" className="text-white text-center flex flex-col justify-center w-full items-center flex-1">
          <div className="mt-0 md:rounded-2xl md:mt-1 px-[4rem] py-[2rem] w-full md:w-7/12" style={{ background: 'rgb(255, 255, 255, 0.1)' }}>
            <div className="text-2xl md:text-3xl mb-4">
              Work With Us
            </div>
            <form
            action="https://api.sheetmonkey.io/form/fHj8A6RVtN9qTTafXjXVZ1" method="post"
            className='mt-6 flex flex-col gap-10'
            >
              <label className='flex flex-col'>
              {/* <span className='text-white text-sm font-medium mb-4'>Your Name</span> */}
              <input
                type='text'
                name='name'
                placeholder="Your name?"
                required
                className='bg-background py-4 px-6 placeholder:text-secondary text-sm text-white rounded-lg outline-none border-none'
              />
            </label>
            <label className='flex flex-col'>
              {/* <span className='text-white font-medium mb-4'>Your Email</span> */}
              <input
                type='email'
                name='email'
                placeholder="Your email?"
                required
                className='bg-background py-4 px-6 placeholder:text-secondary text-sm text-white rounded-lg outline-none border-none'
              />
            </label>
            <label className='flex flex-col px-6 bg-background rounded-lg'>
              {/* <span className='text-white font-md mb-4'>Hold down the Ctrl (windows) or Command (Mac) button to select multiple options</span> */}
              <select
                name='services'
                required
                placeholder="Services"
                defaultValue=''
                className='py-4 bg-background placeholder:text-secondary text-sm text-white outline-none border-none'
              >
                <option value='' disabled hidden>
                  Select a service
                </option>
                <option value='custom-software'>Custom Software</option>
                <option value='web-development'>Web Development</option>
                <option value='software-integration'>Software Integration</option>
                <option value='mobile-app-development'>Mobile App Development</option>
                <option value='consulting-and-technology'>Consulting and Technology</option>
                <option value='ui-ux'>UI/UX</option>
                <option value='branding-services'>Branding Services</option>
                <option value='3d-modelling-and-animation'>3D Modelling and Animation</option>
                <option value='digital-marketing-services'>Digital Marketing Services</option>
              </select>
            </label>


            <label className='flex flex-col px-6 bg-background rounded-lg'>
              {/* <span className='text-white font-medium mb-4'>Services</span> */}
              <select
                name='budget'
                required
                placeholder="Budget Range"
                defaultValue=''
                className='bg-background py-4 placeholder:text-secondary text-sm text-white rounded-lg outline-none border-none'
              >
                <option value='' disabled hidden>
                  Select a budget
                </option>
                <option 
                value='$3000-$5000'>$3,000 - $5,000</option>
                <option 
                value='$5001-$15000'>$5,001 - $15,000</option>
                <option  
                value='$15001-above'>$15,001 - Enterprise</option>
              </select>
            </label>

            <label className="flex flex-col">
                <textarea
                  name="message"
                  placeholder="Your message (Optional)"
                  className="bg-background py-4 px-6 placeholder:text-secondary text-sm text-white rounded-lg outline-none border-none"
                ></textarea>
              </label>

            <div className="flex justify-center items-center">
              <button type="submit" className="rounded-full transition duration-50 ease-in-out cursor-pointer px-8 py-2 bg-transparent hover:bg-glass-gradient border border-white text-white hover text-sm inline-block uppercase">
                Send Message
              </button>
            </div>
            </form>
          </div>
          </div>
        </div>
      </Section>
  )
}


// background-color: #06070a;

