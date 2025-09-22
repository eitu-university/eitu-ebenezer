'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './NationsCarousel.module.css';
import Link from 'next/link';
import { nations } from '@/data/nations';

const Nations = () => {
  return (
    <div className={`${styles.carouselContainer} bg-white dark:bg-gray-900`}>
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
          Naciones
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
          En obediencia al mandato de Jesús de llevar Su mensaje hasta lo último
          de la tierra, nuestra misión se extiende más allá de fronteras,
          predicando y enseñando el evangelio de Jesucristo con pasión fundamentados en la verdad y amor.
        </p>
      </div>
      <div className={styles.swiperContainer}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={true}
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
          modules={[EffectCoverflow, Navigation]}
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
      </div>
    </div>
  );
};

export default Nations;
