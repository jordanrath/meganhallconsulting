import React from 'react'

const MetabolicHealth = () => {
  return (
    <div className='home-top-container'>
      <div className='home-top-text-container' data-aos="zoom-in-up">
        <h1>Feel and perform better today… and for the rest of your life.</h1>
        <h5>IT ALL STARTS WITH</h5>
        <h2>Metabolic Health</h2>
        <h5>THE FOUNDATION OF</h5>
        <div className='home-list'>
          <ul>
            <li>
              <span className='svg-icon-public-container'><img className='svg-icon-public-top' src='/svg/running-run-svgrepo-com.svg' alt='Person running'/></span>
              <h2>Performance</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </li>
            <li>
              <span className="material-symbols-outlined">heart_plus</span>
              <h2>Healthspan</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </li>
            <li>
              <span className="material-symbols-outlined">spa</span>
              <h2>Longevity</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </li>
          </ul>
        </div>
        </div>
      </div>
  )
}

export default MetabolicHealth