import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <section className='home-section'>
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
      </div>
      <div className='nav-image-text'>
        <h1>Teaching people of all health and abilities to live their fullest life</h1>
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
    </div>
    </section>
  )
}

export default Home