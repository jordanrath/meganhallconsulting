import React from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import manifest from '../../data/manifest';

const SwiperFlow = () => {
    const { testimonials=[] } = manifest;

  return (
    <>
        <div className='testimonial-section container' data-aos="zoom-in-up"> 
                <div className='testimonial-title'>
                    <h1 className='testimonial-title-attr' data-end=':'>Testimonials</h1>
                </div>      
                <div className='swiper-container'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                          rotate: 50,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            {testimonials[0].testimonial}
                        </SwiperSlide>
                        <SwiperSlide>
                            {testimonials[0].testimonial}
                        </SwiperSlide>
                        <SwiperSlide>
                            {testimonials[0].testimonial}
                        </SwiperSlide>
                        <SwiperSlide>
                            {testimonials[0].testimonial}
                        </SwiperSlide>
                        <SwiperSlide>
                            {testimonials[0].testimonial}
                        </SwiperSlide>
                    </Swiper>
                </div>
        </div>
    </>
  )
}

export default SwiperFlow;
