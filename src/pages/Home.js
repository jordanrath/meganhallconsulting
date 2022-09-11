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
              <h2>Performance</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </li>
            <li>
              <span className="material-symbols-outlined">heart_plus</span>
              <h2>Healthspan</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </li>
            <li>
              <span className="material-symbols-outlined">spa</span>
              <h2>Longevity</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </li>
          </ul>
        </div>
      </div>
        <div className='svg-container-bottom'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" preserveAspectRatio='none'>
            <path fill="#788989" fill-opacity="1" d="M -1 33 L -1 33 C 126 -6 298 27 388 36 C 530 55 577 55 665 43 C 816 26 1068 -27 1440 44 L 1441 45 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 Z"></path>
          </svg>
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
      <div className='coaching-info-div-container'>
      <div className='svg-coaching-info-container-top'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -100 1440 380" preserveAspectRatio='none'>
                <path fill="#bf7474" fillOpacity="1" d="M -2 144 L -3 143 C 26 124 135 129 222 156 C 474 207 651 182 731 164 C 804 149 1081 47 1444 120 L 1445 120 L 1450 321 L 1360 320 C 1280 320 1120 320 960 320 C 800 320 640 320 480 320 C 320 320 160 320 80 320 L 0 320 Z"></path>
            </svg>
        </div>
      <div className='coaching-info-container'>
        <div className='coaching-info-list'>
          <ul className='info-top'>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-thumbs-up" />
            <h2>Health Coaching</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </li>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-utensils" />
            <h2>Personalized Nutrition</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </li>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-dumbbell" />
            <h2>Performance Optimization</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </li>
        </ul>
        <ul className='info-top'>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-heart" />
            <h2>Gut and Digestive Health</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </li>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-vial" />
            <h2>Blood Chemistry Interpretation</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </li>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-capsules" />
            <h2>Custimized Supplement Protocols</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </li>
          </ul>
        </div>
      </div>
        <div className='svg-coaching-info-container-bottom'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" preserveAspectRatio='none'>
            <path fill="#bf7474" fillOpacity="1" d="M -1 33 L -1 33 C 126 -6 298 27 388 36 C 530 55 577 55 665 43 C 816 26 1068 -27 1440 44 L 1441 45 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 Z"></path>
          </svg>
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