import React from 'react';
import imageUtil from '../utils/imageUtil';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });
  
  return (
    <div className='about-page container'>
      <div ref={ref} className='about-container'>
        {inView ? 
          <img 
            src={imageUtil('/images/about-page-image.jpg')} 
            data-aos='fade-in' 
            alt='Megan and Cooper' 
            className='about-img'
          />
        :
          null
      }
          <div className='about-text' data-aos='fade-in'>
            <h2>Hi, I'm Megan Hall</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Ultricies lacus sed turpis tincidunt id aliquet. Tempus urna et pharetra pharetra massa. Pellentesque massa placerat duis ultricies lacus sed turpis. Orci dapibus ultrices in iaculis nunc sed augue lacus. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Ultricies lacus sed turpis tincidunt id aliquet. Tempus urna et pharetra pharetra massa. </p>
          </div>     
      </div>
    </div>
  )
}

export default About;
