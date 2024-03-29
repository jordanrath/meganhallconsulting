import React, { useEffect } from 'react'

const ScrollTop = () => {
    useEffect(() => {
        window.scrollTo(
            {
                top: 0,
                left: 0,
                behavior: 'smooth'
            }, []);
    })

  return (
    <>
    <div className='scroll-top-btn-animation'>
        <button className='scroll-top-btn' data-aos="fade" data-aos-offset="550" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }}>
    <span className="material-symbols-outlined">keyboard_double_arrow_up
</span>
      </button>
      </div>
    </>
  )
}

export default ScrollTop