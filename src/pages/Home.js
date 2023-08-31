import React from 'react';
import Testimonials from '../components/section/Testimonials';
import SvgBanner from '../components/SvgBanner';
import MetabolicHealth from '../components/section/MetabolicHealth';
import { HoverCards } from '../components/section/HoverCards';
import Coaching from '../components/section/Coaching';
import Introduction from '../components/section/Introduction';
import ScrollTop from '../components/controls/ScrollTop';

const Home = () => {
  return (
    <>  
    {/* <SvgBanner />     */}
    <div className='home-container'> 
        <MetabolicHealth />
          {/* <div className='svg-container-bottom'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 305" preserveAspectRatio='none'>
              <path fill="#eae3ea" fillOpacity="1" d="M 0 0 L 120 37.3 C 240 75 480 149 720 192 C 954 225 1195 229 1289 226 L 1441 209 L 1440 0 L 1320 0 C 1200 0 960 0 720 0 C 480 0 240 0 120 0 L 0 0 Z"></path>
            </svg>
          </div> */}
        <Coaching />
        <HoverCards />
        <Introduction />
        <Testimonials />
        <ScrollTop />
        </div>
        <div id='view-shadow' className='view-shadow'></div>
    </>
  )
}

export default Home;
