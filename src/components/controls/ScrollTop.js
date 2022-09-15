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
        <button className='scroll-top-btn' data-aos="fade" data-aos-offset="550" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }}>
    <span class="material-symbols-outlined">keyboard_double_arrow_up
</span>
      </button>
    </>
  )
}

export default ScrollTop