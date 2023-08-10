import React, { useState } from 'react';
import SvgBanner from '../components/SvgBanner';

const Contact = () => {

    const [characters, setCharacters] = useState(0);

  return (
    <div className='contact-page'>
      <div className='contact-banner'>
        <div data-aos='fade-in'>
         <SvgBanner image='/images/contact-plant.jpg' color='none' text='' />
        </div>
      </div>
      <div className='contact-section__container'>
        <section className='contact-section'>
          <div className="contact-section__title">
            <h1>Let's get in touch</h1>
            <div className='contact-header-bar header-bar'></div>
          </div>
          <div className='contact__form-container'>
            <form className='contact__form' action="https://formsubmit.co/meghall@ucdavis.edu" method="POST">
              <div className="contact__form-title">
                  <p>First Name</p>
                  <label htmlFor='fname'>
                      <input type='text' id='fname' placeholder='First' name='fname' required />
                  </label>
              </div>
              <div className="contact__form-title">
                  <p>Last Name</p>
                  <label htmlFor='lname'>
                      <input type='text' id='lname' placeholder='Last' name='lname' required />
                  </label>
              </div>
              <div className="contact__form-title">
                  <p>Email</p>
                  <label>   
                      <input type='email' id='email' placeholder='Enter an email' name='email' required/>
                  </label>
              </div>
              <div className="contact__form-title">
                  <p>Phone</p>
                  <label>           
                      <input type='text' id='phone' placeholder='Enter a phone number' name='phone'/>
                  </label>
              </div>
              <div className="contact__form-title">
                  <p>Message</p>
                  <label>
                      <textarea maxLength={500} id='message' name='message' placeholder='Let me know how I can help you...'  onChange={(e) => setCharacters(e.currentTarget.value.length)}required />
                      <p>{characters === 0 ? "" : `${characters}/500`}</p>
                  </label>
              </div>
              <div className='contact__btn-container'>
                  <button type='submit' className='contact__btn'>Submit Message</button>
              </div>    
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact;