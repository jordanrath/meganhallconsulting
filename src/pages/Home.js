import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Testimonials from '../components/section/Testimonials';

const Home = () => {
  return (
    <>      
    <div className='home-container'> 
      <div className='home-top-container'>
        <h1>Metabolic Health</h1>
        <h5>THE COMMON THREAD BETWEEN</h5>
        <div className='home-list'>
          <ul>
            <li>
              <span className="material-symbols-outlined">directions_run</span>
              Performance
            </li>
            <li>
              <span className="material-symbols-outlined">heart_plus</span>
              Healthspan
            </li>
            <li>
              <span className="material-symbols-outlined">spa</span>
              Longevity
            </li>
          </ul>
        </div>
        <div className='svg-container'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 10"><path fill="#788989" fill-opacity="1" d="M -1 33 L -1 33 C 126 -6 298 27 388 36 C 530 55 577 55 665 43 C 816 26 1068 -27 1440 44 L 1441 45 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 Z"></path></svg>
        </div>
      </div>
      </div>
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
              <button className='btn' type='button'>BOOK A COMPLIMENTARY CONSULTATION</button>
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
      <div className='coaching-info-container'>
        <div className='coaching-info-text'>
        </div>
        <div className='coaching-info-list'>
          <ul className='info-top'>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-thumbs-up" />Health Coaching</li>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-utensils" />Personalized Nutrition</li>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-dumbbell" />Performance Optimization</li>
        </ul>
        <ul className='info-top'>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-heart" />Gut and Digestive Health<span>Hello hello</span></li>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-vial" />Blood Chemistry Interpretation</li>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-capsules" />Custimized Supplement Protocols</li>
          </ul>
        </div>
      </div>
      <div className='introduction-container'>
      <img src='/images/megan-cooper.jpg' alt='Megan and Cooper' className='intro-img'/>
          <div className='intro-text'>
            <h2>Hi, I'm Megan Hall</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Ultricies lacus sed turpis tincidunt id aliquet. Tempus urna et pharetra pharetra massa. Pellentesque massa placerat duis ultricies lacus sed turpis. Orci dapibus ultrices in iaculis nunc sed augue lacus. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Ultricies lacus sed turpis tincidunt id aliquet. Tempus urna et pharetra pharetra massa. </p>
          </div>     
      </div>
      <Testimonials />
    </>
  )
}

export default Home