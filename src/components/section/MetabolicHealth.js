import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


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
            <img alt='' src='https://images.unsplash.com/photo-1541252260730-0412e8e2108e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=748&q=80' />
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
            <img alt='' src='https://images.unsplash.com/photo-1588347818036-558601350947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' />
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
            <img alt='' src='https://images.unsplash.com/photo-1617372607364-f55cb6fa0502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80' />
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
