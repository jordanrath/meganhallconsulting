import React from 'react';
import { EffectFlip, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import manifest from '../../data/manifest';

const SwiperFlip = () => {
    const { testimonials=[] } = manifest;

  return (
    <>
    <div className='testimonial-section container' data-aos="zoom-in-up"> 
        <div className='testimonial-title'>
            <h1 className='testimonial-title-attr' data-end=':'>Testimonials</h1>
        </div>      
        <div className='swiper-container'>
            <Swiper
                effect={'flip'}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
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

export default SwiperFlip;
