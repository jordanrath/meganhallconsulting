import React from 'react';
import './SvgBanner.css';

const SvgBanner = ({image, color}) => {
  return (
    <div className='svg-banner-container'>
        <div className='svg-image-container'>
            <img src={image} alt='Colorado mountains'/>
        </div>
        <div className='svg-container'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -470 1440 670" preserveAspectRatio='none'>
                <path fill={color} fillOpacity="1" d="M -2 144 L -3 143 C 26 124 135 129 222 156 C 474 207 676 188 792 156 C 873 130 1081 47 1444 120 L 1445 120 L 1450 321 L 1360 320 C 1280 320 1120 320 960 320 C 800 320 640 320 480 320 C 320 320 160 320 80 320 L 0 320 Z"></path>
            </svg>
        </div>
        <div className='svg-banner-content-container'>
            <h1>Teaching people of all health and abilities to live their fullest life</h1>
        </div>
    </div>
  )
}

export default SvgBanner