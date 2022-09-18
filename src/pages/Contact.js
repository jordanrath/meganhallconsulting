import React from 'react';
import SvgBanner from '../components/SvgBanner';

const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='contact-banner'>
        <div data-aos='fade-in'>
         <SvgBanner image='/images/contact-plant.jpg' color='none' text='' />
        </div>
      </div>
      <section className='contact-section'>
        <div className='contact-container' data-aos='fade-in'>
          <h1>Let's get in touch</h1>
          <div className='contact-header-bar header-bar'></div>
            <form className='form-container' action="https://formsubmit.co/meghall@ucdavis.edu" method="POST">
              <div className='form-name-container'>
              <label htmlFor='first-name'></label>
                <input type='text' id='first-name' placeholder='First Name*' required />
              <label htmlFor='last-name'></label>
                <input type='text' id='last-name' placeholder='Last Name*' required />
              </div>
              <div className='form-email-phone-container'>
              <label htmlFor='email'></label>
                <input type='email' id='email' placeholder='Email Address*' required />
              <label htmlFor='phone'></label>
                <input type='phone' id='phone' placeholder='Phone Number' />
              </div>
              <label htmlFor='message'></label>
                <textarea type='message' id='message' placeholder="Your Message (Let me know how I can help you.)*" required /> 
              <div className='btn-contact-container'>
                <button type='submit' className='btn-contact'>SUBMIT</button>
              </div>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Contact