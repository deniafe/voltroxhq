import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export function Slider() {
  return (
    <div className="relative mt-[12rem] md:mt-[8rem]">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5, 
          // slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]} 
        // pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="mySwiper"
      >
       <SwiperSlide>
          <img src="/img/1.jpg" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/2.jpg" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/3.jpg" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/4.jpg" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/5.jpg" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/6.jpg" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/7.jpg" className="rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
