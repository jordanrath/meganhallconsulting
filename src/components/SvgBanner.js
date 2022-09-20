import React from 'react';
import './SvgBanner.css';

const SvgBanner = ({image, color, text}) => {
  return (
    <div className='svg-banner-container'>
        <div className='svg-image-container'>
            <img src={image} alt='Colorado mountains'/>
        </div>
        <div className='svg-container'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -585 940 670" preserveAspectRatio='none'>
                <path fill={color} fillOpacity="1" d="M 0 57 L 130 35 C 262 17 474 7 720 37.3 C 960 75 1200 149 1320 186.7 L 1440 224 L 1440 320 L 1320 320 C 1200 320 960 320 720 320 C 480 320 240 320 120 320 L 0 320 Z"></path>
            </svg>
        </div>
        <div className='svg-banner-content-container' data-aos="fade-left">
            <h1>{text}</h1>
        </div>
    </div>
  )
}

export default SvgBanner

//"0 -470 1440 660"
//M -2 144 L -3 143 C 26 124 135 129 222 156 C 474 207 676 188 792 156 C 873 130 1081 47 1444 120 L 1445 120 L 1450 321 L 1360 320 C 1280 320 1120 320 960 320 C 800 320 640 320 480 320 C 320 320 160 320 80 320 L 0 320 Z