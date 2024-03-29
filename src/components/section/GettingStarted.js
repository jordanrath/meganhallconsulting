import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import imageUtil from '../../utils/imageUtil';
import { useInView } from 'react-intersection-observer';


const GettingStarted = () => {
  const [isClicked, setIsClicked] = useState(0);
  const [isDesktop, setisDesktop] = useState(window.innerWidth > 601);
  const imgRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });
  

  const handleClick = (divClicked) => ()  => { 
    setIsClicked(divClicked);
    return (!isDesktop ? imgRef.current?.scrollIntoView({ behavior: 'smooth' }) : null)
  };

  const updateMediaQuery = () => {
    setisDesktop(window.innerWidth > 601);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMediaQuery);
    return () => window.removeEventListener('resize', updateMediaQuery);
  });

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
          <div ref={imgRef} className='expanding-card__container'>
          <div 
            id='0' 
            ref={ref} 
            className={isClicked === 0 ? 'expanding-card active' : 'expanding-card'} onClick={handleClick(0)}
          >
            {inView ?
              <img 
                alt='' 
                src={isDesktop ?
                  imageUtil('/images/health.jpg')
                  :
                  imageUtil('/images/health-mobile.jpg')
                } 
              />
            :
              null
            }
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
            <div 
              id='1' 
              className={isClicked === 1 ? 'expanding-card active' : 'expanding-card'} onClick={handleClick(1)}
            >
            {inView ?
              <img 
                alt='' 
                src={isDesktop ?
                  imageUtil('/images/performance.jpg')
                  :
                  imageUtil('/images/performance-mobile.jpg')
                } 
              />
            :
              null
            }
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
            <div 
              id='2' 
              className={isClicked === 2 ? 'expanding-card active' : 'expanding-card'} onClick={handleClick(2)}
            >
            {inView ?
              <img 
                alt='' 
                src={isDesktop ?
                  imageUtil('/images/longevity.jpg')
                  :
                  imageUtil('/images/longevity-mobile.jpg')
                } 
              />
            :
              null
            }
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

export default GettingStarted;
