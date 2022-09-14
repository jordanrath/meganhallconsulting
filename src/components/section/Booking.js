import React from 'react'
import { NavLink } from 'react-router-dom'

export const Booking = () => {
  return (
    <div className='home-booking-container'>
        <div className='home-booking'>
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
        <div className='home-booking-images'>
          <img src='/images/coffee.jpg' alt='Coffee and books' className='coffee-img'/>
          <img src='/images/figs.jpg' alt='Figs' className='fig-img'/>
          <img src='/images/weights.jpg' alt='Weights' className='weights-img'/>
        <div>
        </div>
        </div>
      </div>
  )
}
