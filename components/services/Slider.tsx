import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export function Slider() {
  return (
    <div className="relative mt-[12rem] md:mt-[8rem]">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5, 
          // slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]} 
        // pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="mySwiper"
      >
       <SwiperSlide>
          <img src="/img/1.jpg" alt="service_1" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/2.jpg" alt="service_2" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/3.jpg" alt="service_3" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/4.jpg" alt="service_4" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/5.jpg" alt="service_5" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/6.jpg" alt="service_6" className="rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/7.jpg" alt="service_7" className="rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
