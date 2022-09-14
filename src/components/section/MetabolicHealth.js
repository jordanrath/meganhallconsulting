import React from 'react'

const MetabolicHealth = () => {
  return (
    <div className='home-top-container'>
        <h1>Metabolic Health</h1>
        <h5>THE COMMON THREAD BETWEEN</h5>
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
  )
}

export default MetabolicHealth