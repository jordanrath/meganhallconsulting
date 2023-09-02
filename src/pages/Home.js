import React from 'react';
import Testimonials from '../components/section/Testimonials';
import MetabolicHealth from '../components/section/MetabolicHealth';
import { HoverCards } from '../components/section/HoverCards';
import Coaching from '../components/section/Coaching';
import Introduction from '../components/section/Introduction';
import ScrollTop from '../components/controls/ScrollTop';

const Home = () => {
  return (
    <>  
      <div className='home-container'> 
        <MetabolicHealth />
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
