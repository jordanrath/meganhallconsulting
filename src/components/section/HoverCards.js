import React from 'react'
import imageUtil from '../../utils/imageUtil';
import { useInView } from 'react-intersection-observer';

export const HoverCards = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });
  
  return (
    <div className='hover-cards__section' data-aos="zoom-in-up">
      <div className='hover-cards__section-header'>
        <h1 className='section-header__text' data-end=':'>The 8 Components of Healthy Living</h1>
      </div>
      <div className='hover-cards__container'>
        <div className='hover-cards__card-container'>
          <div
            ref={ref} 
            id='sun'
            className='hover-cards__card' 
          >
            {inView ? 
              <div className='image-wrapper'>
                <img className='image' alt='nutrition' src={imageUtil('/images/sun.jpg')}></img>
                <img className='image-hover' alt='nutrition' src={imageUtil('/images/moon.jpg')}></img>
              </div>
            : 
              null
            } 
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Circadian Alignment</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div> 
          <div 
            ref={ref}
            className='hover-cards__card'
          >
            {inView ? 
              <img alt='movement' src={imageUtil('/images/movement.jpg')} /> 
            : 
              null
            } 
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Movement</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div>
          <div 
            ref={ref}
            className='hover-cards__card'
          >
            {inView ? 
              <img alt='exercise' src={imageUtil('/images/exercise.jpg')} /> 
            : 
              null
            } 
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Exercise</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div>
          <div
            ref={ref} 
            className='hover-cards__card' 
          >
            {inView ? 
              <div className='image-wrapper'>
                <img className='image' alt='nutrition' src={imageUtil('/images/nutrition.jpg')}></img>
                <img className='image-hover' alt='nutrition' src={imageUtil('/images/nutrition2.jpg')}></img>
              </div>
            : 
              null
            } 
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Nutrition</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div>
          <div 
            ref={ref}
            className='hover-cards__card'
          >
            {inView ? 
              <img alt='supplements' src={imageUtil('/images/supplements.jpg')} />
            : 
              null
            } 
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Supplementation</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div>
          <div 
            ref={ref}
            className='hover-cards__card'
          >
            {inView ? 
              <img alt='stress' src={imageUtil('/images/stress.jpg')} />
            : 
              null
            } 
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Stress</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div>
          <div 
            ref={ref}
            className='hover-cards__card'
          >
            {inView ? 
              <img alt='social connection' src={imageUtil('/images/social-connection.jpg')} />
            : 
              null
            } 
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Social Connection</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div>
          <div 
            ref={ref}
            className='hover-cards__card'
          >
            {inView ? 
              <img alt='purpose' src={imageUtil('/images/purpose.jpg')} />
            : 
              null
            } 
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Purpose</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
