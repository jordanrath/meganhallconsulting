import React from 'react';

const Contact = () => {
  return (
    <section className='contact-section'>
      <div>
        <h1>Let's get in touch</h1>
        <div className='contact-header-bar header-bar'></div>
          <form className='form-container'>
            <label htmlFor='name'></label>
              <input type='text' id='name' placeholder='Name' required />
            <label htmlFor='email'></label>
              <input type='email' id='email' placeholder='Enter Email' required />
            <label htmlFor='message'></label>
              <textarea type='message' id='message' placeholder="Your Message (Let me know how I can help you.)" required /> 
            <div className='btn-contact-container'>
              <button type='submit' className='btn-contact'>SUBMIT</button>
            </div>
          </form>
      </div>
    </section>
  )
}

export default Contact