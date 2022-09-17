import React from 'react';
import Testimonials from '../components/section/Testimonials';
import SvgBanner from '../components/SvgBanner';
import MetabolicHealth from '../components/section/MetabolicHealth';
import { Booking } from '../components/section/Booking';
import Coaching from '../components/section/Coaching';
import Introduction from '../components/section/Introduction';
import ScrollTop from '../components/controls/ScrollTop';

const Home = () => {
  return (
    <>  
    <SvgBanner image='/images/nav-banner2.jpg' color="#eae3ea" text='Helping you achieve limitless health'/>    
    <div className='home-container'> 
        <MetabolicHealth />
          <div className='svg-container-bottom'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 75" preserveAspectRatio='none'>
              <path fill="#eae3ea" fillOpacity="1" d="M -1 33 L -1 33 C 126 -6 298 27 388 36 C 530 55 577 55 665 43 C 816 26 1068 -27 1440 44 L 1441 45 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 Z"></path>
            </svg>
          </div>
        <Booking />
        <Coaching />
        <Introduction />
        <Testimonials />
        <ScrollTop />
        </div>
        <div id='view-shadow' className='view-shadow'></div>
    </>
  )
}

export default Home

// /images/mountain-banner1.jpg