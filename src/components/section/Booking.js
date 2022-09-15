import React from 'react'
import { NavLink } from 'react-router-dom'

export const Booking = () => {
  return (
    <div className='home-booking-container'>
        <div className='home-booking' data-aos="zoom-in-right" data-aos-offset="150">
          <h1>The applied science of healthy living</h1>
          <h2>Nutrition and metabolism consultant</h2>
          <ul>
            <li><span className="material-symbols-outlined">check_circle</span>Personalized health coaching</li>
            <li><span className="material-symbols-outlined">check_circle</span>Evidence based testing</li>
            <li><span className="material-symbols-outlined">check_circle</span>Cutting edge science</li>
          </ul>
          <div className='btn-cont'>
            <h3>The journey to your best life begins now</h3>
            <NavLink to='schedule'>
              <button className='btn' type='button'>SCHEDULE A FREE CONSULTATION</button>
            </NavLink>
          </div>
        </div>
        <div className='home-booking-images' data-aos="zoom-in-left">
          <img src='/images/coffee.jpg' alt='Coffee and books' className='coffee-img'/>
          <img src='/images/figs.jpg' alt='Figs' className='fig-img'/>
          <img src='/images/weights.jpg' alt='Weights' className='weights-img'/>
        <div>
        </div>
        </div>
        {/* <div className='svg-container-bottom'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 75" preserveAspectRatio='none'>
              <path fill="#f3e9d8" fillOpacity="1" d="M -1 33 L -1 33 C 126 -6 298 27 388 36 C 530 55 577 55 665 43 C 816 26 1068 -27 1440 44 L 1441 45 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 Z"></path>
            </svg>
            </div> */}
      </div>
  )
}
