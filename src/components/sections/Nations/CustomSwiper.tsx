'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import { nations } from '@/data/nations';
import styles from './NationsCarousel.module.css';

const CustomSwiper = () => {
  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        keyboard={{
          enabled: true,
        }}
        mousewheel={{
          thresholdDelta: 70,
        }}
        breakpoints={{
          560: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className={styles.swiper}
      >
        {nations.map((nation, idx) => (
          <SwiperSlide key={idx} className={styles.swiperSlide}>
            <Link href={nation.slug} className={styles.slideContent}>
              <div className="relative">
                <img
                  src={nation.imgThumb}
                  alt={nation.name}
                  className={styles.img}
                />

                <img
                  src={nation.flagSvg}
                  alt={`${nation.name} flag`}
                  className={styles.miniFlag}
                />

                <div className="absolute inset-x-0 bottom-0 rounded-2xl bg-gradient-to-t from-black/85 to-transparent p-4 pt-10 text-white">
                  <h3 className="mb-1 text-2xl font-bold">{nation.name}</h3>
                  <p className="line-clamp-2 text-sm">{nation.description}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev">
        <i className="bx bx-left-arrow-alt"></i>
      </div>
      <div className="swiper-button-next">
        <i className="bx bx-right-arrow-alt"></i>
      </div>
    </>
  );
};

export default CustomSwiper;
