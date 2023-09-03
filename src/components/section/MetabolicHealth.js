import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import imageUtil from '../../utils/imageUtil';


const MetabolicHealth = () => {
  const [isClicked, setIsClicked] = useState(0);

  const handleClick = (divClicked) => ()  => {  
    setIsClicked(divClicked);
    console.log(isClicked)
  };

  return (
    <div className='home-top-container'>
      <div className='home-top-text-container container' data-aos="zoom-in-up">
        <div className='home-top-text'>
          <h1 className='home-top-text__top'>Feel and perform better today…</h1>
        <div className='home-top-text__bottom'>
            <h1 className='home-top-text__h1' data-end='.'>and for the rest of your life</h1>
        </div>
        <div className='btn-cont'>
          <h3>The journey to your best life begins now</h3>
          <div className='box-1'>
          <NavLink to='schedule'>
            <button className='custom-btn btn' type='button'>Get Started!</button>
          </NavLink>
          </div>
        </div>
        </div>
          <div className='expanding-card__container'>
            <div className={isClicked === 0 ? 'expanding-card active' : 'expanding-card'} onClick={handleClick(0)}>
            <img alt='' src={imageUtil('/images/performance.avif')} />
              <div className='expanding-card__clicked'>
                <div className='expanding-card__text'>
                  <span className="material-symbols-outlined performance">
                    sprint
                  </span>
                  <h2>Performance</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
              </div>
            </div>
            <div className={isClicked === 1 ? 'expanding-card active' : 'expanding-card'} onClick={handleClick(1)}>
            <img alt='' src={imageUtil('/images/health.avif')} />
              <div className='expanding-card__clicked'>
                <div className='expanding-card__text'>
                  <span className="material-symbols-outlined healthspan">
                    heart_plus
                  </span>
                  <h2>Health</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
              </div>
            </div>
            <div className={isClicked === 2 ? 'expanding-card active' : 'expanding-card'} onClick={handleClick(2)}>
            <img alt='' src={imageUtil('/images/stress.jpg')} />
              <div className='expanding-card__clicked'>
                <div className='expanding-card__text'>
                  <span className="material-symbols-outlined longevity">
                    spa
                  </span>
                  <h2>Longevity</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MetabolicHealth;
