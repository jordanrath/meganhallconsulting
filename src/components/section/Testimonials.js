import React, { useEffect, useState } from 'react';
import SwiperFlip from '../controls/SwiperFlip';
import SwiperFlow from '../controls/SwiperFlow';

const Testimonials = () => {

    // Turn this into useRef as well as store julieFeld in a data file.
    const [isDesktop, setisDesktop] = useState(window.innerWidth > 1450);

    const updateMediaQuery = () => {
      setisDesktop(window.innerWidth > 1450);
    }
  
    useEffect(() => {
      window.addEventListener('resize', updateMediaQuery);
      return () => window.removeEventListener('resize', updateMediaQuery);
    });

  return ( 
    <> 
        {isDesktop ? (
            <SwiperFlow />
        ) : ( 
            <SwiperFlip />
        )}
    </> 
  )
}

export default Testimonials;
