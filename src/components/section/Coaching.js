import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Coaching = () => {
  return (
    <div className='coaching-info-div-container'>
      <div className='svg-coaching-info-container-top'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 90 1440 100" preserveAspectRatio='none'>
                <path fill="#bf7474" fillOpacity="1" d="M -2 144 L -3 143 C 26 124 135 129 222 156 C 474 207 651 182 731 164 C 804 149 1081 47 1444 120 L 1445 120 L 1450 321 L 1360 320 C 1280 320 1120 320 960 320 C 800 320 640 320 480 320 C 320 320 160 320 80 320 L 0 320 Z"></path>
            </svg>
        </div>
      <div className='coaching-info-container'>
        <div className='coaching-info-list' data-aos="zoom-in-up">
          <ul className='info-top'>
          <li>
            <FontAwesomeIcon className='svg-icon' icon="fa-regular fa-thumbs-up" />
            <h2>Health Coaching</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </li>
          <li>
            <span className='svg-icon-public-container'>
              <img className='svg-icon-public' src='/svg/utensils-svgrepo-com.svg' alt='Kitchen utensils'/>
            </span>
            <h2>Personalized Nutrition</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </li>
          <li>
            <span className='svg-icon-public-container'>
              <img className='svg-icon-public' src='/svg/dumbell-fitness-svgrepo-com.svg' alt='Dumbell'/>
            </span>
            <h2>Performance Optimization</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </li>
        </ul>
        <ul className='info-top'>
          <li>
            <span className='svg-icon-public-container'>
              <img className='svg-icon-public' src='/svg/heart-svgrepo-com.svg' alt='Heart'/>
            </span>
            <h2>Gut and Digestive Health</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </li>
          <li>
            <span className='svg-icon-public-container'>
              <img className='svg-icon-public' src='/svg/blood-sample-svgrepo-com.svg' alt='Blood vial'/>
            </span>
            <h2>Blood Chemistry Interpretation</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </li>
          <li>
          <span className='svg-icon-public-container'>
            <img className='svg-icon-public' src='/svg/pills-svgrepo-com.svg' alt='Pill capsules'/>
          </span>
            <h2>Custimized Supplement Protocols</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </li>
          </ul>
        </div>
      </div>
        <div className='svg-coaching-info-container-bottom'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 75" preserveAspectRatio='none'>
            <path fill="#bf7474" fillOpacity="1" d="M -1 33 L -1 33 C 126 -6 298 27 388 36 C 530 55 577 55 665 43 C 816 26 1068 -27 1440 44 L 1441 45 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 Z"></path>
          </svg>
        </div>
      </div>
  )
}

export default Coaching