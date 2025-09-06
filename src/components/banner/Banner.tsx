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
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/banner.avif)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Hasta aquí nos ayudó <mark className={`${styles.scribble}`}>Jehová</mark>
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-gray-200 font-light">
          Organización Cristiana Evangélica Pentecostal Ebenezer
        </p>
        <p className="text-lg sm:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
          Transformando vidas a través del amor de Cristo y el poder del Espíritu Santo
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContent}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
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
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Contáctanos
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button
          onClick={scrollToContent}
          className="text-white hover:text-blue-300 transition-colors duration-200"
        >
          <FiArrowDown size={24} />
        </button>
      </div>

      {/* Wave SVG positioned at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            className="w-full h-auto"
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
    </section>
    </div>
  );
} 