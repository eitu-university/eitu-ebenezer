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
    <div className={`${styles.carouselContainer} bg-parchment dark:bg-[#18181b]`}>
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <h2 className="font-display mb-4 text-3xl font-normal text-ink dark:text-paper sm:text-4xl lg:text-5xl">
          {t('title')}
        </h2>
        <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-terracotta" />
        <p className="text-lg leading-relaxed text-graphite dark:text-[#a1a1aa] sm:text-xl">
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
