'use client';
import styles from './Banner.module.scss';

import { useEffect, useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { SvgWave } from './SvgWave';

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
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-5xl">
            Escuela ministerial de los{' '}
            <mark className={`${styles.scribble}`}>Obreros Aprobados</mark>
          </h1>
          <p className="mb-8 text-xl font-light text-gray-200 sm:text-2xl lg:text-3xl">
            Universidad Internacional Teológica Ebenezer
          </p>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Una comunidad teológica con el ideal de educarte y servirte
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
            aria-label="explore more button"
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
