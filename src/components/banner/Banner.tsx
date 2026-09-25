'use client';
import styles from './Banner.module.scss';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { FiArrowDown } from 'react-icons/fi';
import { SvgWave } from './SvgWave';
import Button from '@/components/ui/Button';

export default function Banner() {
  const t = useTranslations('Banner');
  const tCommon = useTranslations('Common');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const imgUrlDesktop = "sm:bg-[url('/images/banner/desktop.webp')]";
  const imgUrlMobile = "bg-[url('/images/banner/mobile.webp')]";

  return (
    <div className="relative">
      <section id="home" className={`${styles.banner}`}>
        {/* Background Image */}
        <div
          className={`fixed inset-0 -z-10 transform bg-cover bg-center duration-1000 ease-in-out ${scrollY > 50 ? 'scale-110' : ''} bg-no-repeat ${imgUrlMobile} ${imgUrlDesktop}`}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-parchment sm:px-6 lg:px-8">
          <h1 className="font-display mb-6 text-4xl font-normal leading-tight sm:text-5xl lg:text-5xl">
            {t('titlePrefix')}{' '}
            <mark className={`font-display ${styles.scribble}`}>
              {t('titleHighlight')}
            </mark>
          </h1>
          <p className="mb-8 text-xl font-light text-parchment/85 sm:text-2xl lg:text-3xl">
            {t('subtitle')}
          </p>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-parchment/70 sm:text-xl">
            {t('description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button onClick={scrollToContent}>{t('cta')}</Button>
            <Button
              variant="outline"
              className="border-parchment/70 text-parchment hover:bg-parchment hover:text-ink"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {tCommon('getInTouch')}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2 transform animate-bounce">
          <button
            aria-label="explore more button"
            onClick={scrollToContent}
            className="text-parchment transition-colors duration-200 hover:text-terracotta-light"
          >
            <FiArrowDown size={24} />
          </button>
        </div>

        {/* Wave SVG positioned at the bottom */}
        <SvgWave />
      </section>
    </div>
  );
}
