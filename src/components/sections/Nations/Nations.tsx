import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getTranslations } from 'next-intl/server';
import styles from './NationsCarousel.module.css';
import CustomSwiper from './CustomSwiper';

const Nations = async () => {
  const t = await getTranslations('Nations');

  return (
    <div className={`${styles.carouselContainer} bg-white dark:bg-gray-900`}>
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
          {t('title')}
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
          {t('description')}
        </p>
      </div>
      <div className={styles.swiperContainer}>
        <CustomSwiper />
      </div>
    </div>
  );
};

export default Nations;
