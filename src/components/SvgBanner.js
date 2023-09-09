import React from 'react';
import './SvgBanner.css';

const SvgBanner = ({image, color, text}) => {

    const Banner = () => {
        return (
            <div className='svg-banner-container'>
                <div className='svg-image-container'>
                    <img src={image} alt='Colorado mountains'/>
                </div>
                <div className='svg-container'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 -585 940 670" 
                        preserveAspectRatio='none'
                    >
                        <path 
                            fill={color} 
                            fillOpacity="1" 
                            d="M 0 57 L 130 35 C 262 17 474 7 720 37.3 C 960 75 1200 149 1320 186.7 L 1440 224 L 1440 320 L 1320 320 C 1200 320 960 320 720 320 C 480 320 240 320 120 320 L 0 320 Z"
                        ></path>
                    </svg>
                </div>
                <div className='svg-banner-content-container' data-aos="fade-left">
                    <h1>{text}</h1>
                </div>
            </div>
            )
        };

    // const Slider = () => {
    //     return (
    //         <div className="banner" data-aos="fade-right">
    //             <ul> 
    //                 <li>
    //                     <a href="banner__image1">
    //                         <img alt='svg' src="https://images.unsplash.com/photo-1599270606287-331b4f5d0e02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" />
    //                     </a>
    //                 </li>
    //                <li>
    //                     <a href="banner__image2">
    //                         <img alt='svg' src="https://images.unsplash.com/photo-1588347818036-558601350947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
    //                     </a>
    //                 </li>
    //                <li>
    //                     <a href="banner__image3">
    //                         <img alt='svg' src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
    //                     </a>
    //                 </li>
    //                <li>
    //                     <a href="banner__image4">
    //                         <img alt='svg' src="https://images.unsplash.com/photo-1566373049939-704ea187ef98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80" />
    //                     </a>
    //                 </li>
    //                <li>
    //                     <a href="banner__image4">
    //                         <img alt='svg' src="https://images.unsplash.com/photo-1518065896235-a4c93e088e7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
    //                     </a>
    //                 </li>  
    //                <li>
    //                     <a href="banner__image4">
    //                         <img alt='svg' src="https://images.unsplash.com/photo-1617372607364-f55cb6fa0502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80" />
    //                     </a>
    //                 </li>
    //             </ul>
    //         </div>
    //         )
    //     };

    // const displayBanner = (image === undefined ? <Slider /> : <Banner />);
        const displayBanner = <Banner />;
  return (
    <>
        {displayBanner}
    </>
  )
}

export default SvgBanner;
