'use client';
import { testimonials } from '@/data/testimonials';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

export default function Testimonials() {
  const t = useTranslations('Testimonials');
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-parchment py-28 dark:bg-[#18181b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="font-display mb-4 text-3xl font-normal text-ink dark:text-paper sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-terracotta" />
          <p className="text-lg leading-relaxed text-graphite dark:text-[#a1a1aa] sm:text-xl">
            {t('description')}
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="relative px-4 sm:px-16">
            <div className="relative text-center">
              {/* Rating */}
              <div className="mb-6 flex justify-center">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="mb-8 text-xl font-normal leading-relaxed text-ink dark:text-paper sm:text-2xl">
                &quot;{t(`items.${currentTestimonial.id}.content`)}&quot;
              </blockquote>

              {/* Author */}
              <div>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-terracotta bg-terracotta/10">
                  <span className="text-lg font-semibold text-terracotta">
                    {currentTestimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <h4 className="mb-1 text-lg font-semibold text-ink dark:text-paper">
                  {currentTestimonial.name}
                </h4>
                <p className="text-graphite dark:text-[#a1a1aa]">
                  {t(`items.${currentTestimonial.id}.role`)}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 transform">
              <button
                aria-label="previous testimonial button"
                onClick={prevTestimonial}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-taupe text-ink transition-colors duration-200 hover:border-terracotta hover:text-terracotta dark:border-[#3f3f46] dark:text-paper dark:hover:border-terracotta-light dark:hover:text-terracotta-light"
              >
                <FiChevronLeft size={20} />
              </button>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 transform">
              <button
                aria-label="next testimonial button"
                onClick={nextTestimonial}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-taupe text-ink transition-colors duration-200 hover:border-terracotta hover:text-terracotta dark:border-[#3f3f46] dark:text-paper dark:hover:border-terracotta-light dark:hover:text-terracotta-light"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                aria-label="dot indicator button"
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-terracotta'
                    : 'w-3 bg-taupe dark:bg-[#3f3f46]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
