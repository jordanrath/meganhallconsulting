import React from 'react';
import Testimonials from '../components/section/Testimonials';
import GettingStarted from '../components/section/GettingStarted';
import { HoverCards } from '../components/section/HoverCards';
import Coaching from '../components/section/Coaching';
import Introduction from '../components/section/Introduction';

const Home = () => {
  return (
    <>  
      <div className='home-container'> 
        <GettingStarted />
        <Coaching />
        <HoverCards />
        <Introduction />
        <Testimonials />
      </div>
      <div id='view-shadow' className='view-shadow'></div>
    </>
  )
}

export default Home;
