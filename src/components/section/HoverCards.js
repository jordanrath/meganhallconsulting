import React from 'react'

export const HoverCards = () => {
  
  return (
    <div className='hover-cards__section' data-aos="zoom-in-up">
      <div className='hover-cards__section-header'>
        <h1 className='section-header__text'>The 8 Components of Healthy Living</h1>
        <h1 className='section-header__period'>:</h1>
      </div>
      <div className='hover-cards__container'>
        <div className='hover-cards__card-container'>
          <div className='hover-cards__card circadian-alignment'>
            {/* create util function to bake that infrom of img */}
            {/* <img alt='' src='process.env.PUBLIC_URL + /images/sun.jpg' /> */}
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Circadian Alignment</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div> 
          <div className='hover-cards__card'>
            <img alt='' src='/images/movement.jpg' />
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Movement</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div>
          <div className='hover-cards__card'>
            <img alt='' src='/images/exercise.jpg' />
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Exercise</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div>
          <div className='hover-cards__card'>
            <img alt='' src='/images/nutrition.jpg' />
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Nutrition</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div>
          <div className='hover-cards__card'>
            <img alt='' src='/images/supplements.jpg' />
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Supplementation</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div>
          <div className='hover-cards__card'>
            <img alt='' src='/images/stress.jpg' />
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Stress</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div>
          <div className='hover-cards__card'>
            <img alt='' src='/images/social-connection.jpg' />
            <div className='shadow'></div>
            <div className='hover-cards__text-container'>
              <div className='hover-cards__text'>
                <h3>Social Connection</h3>
                <p>A short description about why this is important for overall health and wellness.</p>
              </div>
            </div>
          </div>
          <div className='hover-cards__card'>
            <img alt='' src='/images/purpose.jpg' />
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
