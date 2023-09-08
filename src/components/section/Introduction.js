import React from 'react'
import imageUtil from '../../utils/imageUtil';

const Introduction = () => {

  return (
    <div className='introduction-section'>
      <div className='introduction-container'>
        <div className='introduction-container-content'>
            <img src={imageUtil('/images/megan-cooper.jpg')} alt='Megan and Cooper' className='intro-img' data-aos="flip-right"/>
            <div className='intro-text' data-aos="zoom-in-up">
              <h2>Hi, I'm Megan Hall</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Ultricies lacus sed turpis tincidunt id aliquet. Tempus urna et pharetra pharetra massa. Pellentesque massa placerat duis ultricies lacus sed turpis. Orci dapibus ultrices in iaculis nunc sed augue lacus. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Ultricies lacus sed turpis tincidunt id aliquet. Tempus urna et pharetra pharetra massa. </p>
            </div>
        </div>   
      </div>
    </div>
  )
}

export default Introduction;
