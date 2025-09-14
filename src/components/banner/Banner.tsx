'use client';
import styles from './Banner.module.scss';

import { useEffect, useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';

export default function Banner() {
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

  return (
    <div className="relative">
      <section
        id="home"
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/banner/mobile.webp')] sm:bg-[url('/images/banner/desktop.webp')]"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-5xl">
            Escuela ministerial de los {' '}
            <mark className={`${styles.scribble}`}>Obreros Aprobados</mark>
          </h1>
          <p className="mb-8 text-xl font-light text-gray-200 sm:text-2xl lg:text-3xl">
            Organización Cristiana Evangélica Pentecostal Ebenezer
          </p>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Transformando vidas a través del amor de Cristo y el poder del
            Espíritu Santo
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={scrollToContent}
              className="bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-blue-700 hover:shadow-xl"
            >
              Conoce Más
            </button>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border border-white px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-white hover:text-gray-900"
            >
              Contáctanos
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2 transform animate-bounce">
          <button
            onClick={scrollToContent}
            className="text-white transition-colors duration-200 hover:text-blue-300"
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

const SvgWave = () => (
  <div className="absolute bottom-0 left-0 right-0 mb-[-2px]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="h-auto w-full"
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        fillOpacity="1"
        className="text-gray-50 dark:text-gray-900"
        d="M0,192L80,213.3C160,235,320,277,480,293.3C640,309,800,299,960,298.7C1120,299,1280,309,1360,314.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </svg>
  </div>
);
