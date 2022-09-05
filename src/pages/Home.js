import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='home-container'>
      {/* <img src='/images/nav-banner.jpg' alt='Colorado mountains' className='nav-banner'/> */}
      {/* <Navbar /> */}
      <div className='image-text'>
        <h1>Teaching people of all health and abilities to live their fullest life</h1>
      </div>
      <div className='home-booking'>
        <h1>The applied science of healthy living</h1>
        <h2>Health coaching with Megan Hall</h2>
        <NavLink to='schedule'>
          <button className='btn' type='button'>BOOK A FREE CONSULTATION</button>
        </NavLink>
      </div>
      <div className='coaching-info-container'>
        <div className='coaching-info-text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Ultricies lacus sed turpis tincidunt id aliquet. Tempus urna et pharetra pharetra massa. Pellentesque massa placerat duis ultricies lacus sed turpis. Orci dapibus ultrices in iaculis nunc sed augue lacus. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Ultricies lacus sed turpis tincidunt id aliquet. Tempus urna et pharetra pharetra massa. Pellentesque massa placerat duis ultricies lacus sed turpis. Orci dapibus ultrices in iaculis nunc sed augue lacus. </p>
        </div>
        <div className='coaching-info-list'>
          <ul>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-thumbs-up" />Health Coaching</li>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-utensils" />Personalized Nutrition</li>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-dumbbell" />Performance Optimization</li>
          <li><FontAwesomeIcon className='svg-icon' icon="fa-solid fa-heart" />Gut and Digestive Health</li>
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
    </div>
  )
}

export default Home