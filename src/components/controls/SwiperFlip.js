import React from 'react';
import { EffectFlip, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperFlip = () => {

    const julieFeld = 
        <div className='testimonial-slide'>
            <div className='testimonial-slide__text julie'>
                <p>
                <span className="material-symbols-outlined quote-top">
                    format_quote
                </span>
                    I have been working with Megan for over a year now with the purpose of up leveling my overall health and fitness.
                    It has been a pleasure to learn from one who walks her talk.
                    I have looked up to Megan from the beginning of our appointments based on her own self-care and her educational background.
                </p>
                <p>
                    I have been thru a few medical procedures that required extra attention regarding pre-surgery and recovery.  Megan’s knowledge and expertise expedited those processes.
                    Her detail in reading blood labs to support her recommendations are extensive through diet and supplementation. Very impressive!  
                </p>
                <p>
                    There has been a ripple effect of her counsel to my friends and family that now work with her.  I am beyond grateful for the outcomes I practice each day!
                    At seventy years of age, I have up leveled my fitness and health over this past year.  
                </p>
                <p>
                    Thank you, Megan!
                <span className="material-symbols-outlined quote-bottom">
                    format_quote
                </span>
                </p>
            </div>
            <div className='testimonial-slide__signature'>
                {/* <img alt='' src='/images/sun.jpg' /> */}
                <div className='testimonial-slide__signature-text'>
                    <h3>Julie Feld</h3>
                    <p>Morrison, Colorado</p>
                </div>
            </div>
        </div>

  return (
    <>
    <div className='testimonial-section container' data-aos="zoom-in-up"> 
        <div className='testimonial-title'>
            <h1>Testimonials</h1>
            <h1 className='testimonial-period'>:</h1>
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
                    {julieFeld}
                </SwiperSlide>
                <SwiperSlide>
                    {julieFeld}
                </SwiperSlide>
                <SwiperSlide>
                    {julieFeld}
                </SwiperSlide>
                <SwiperSlide>
                    {julieFeld}
                </SwiperSlide>
                <SwiperSlide>
                    {julieFeld}
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    </>
  )
}

export default SwiperFlip;
