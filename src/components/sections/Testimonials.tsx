'use client';
import { testimonials } from '@/data/testimonials';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

export default function Testimonials() {
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
    <section className="bg-white py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            Testimonios
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            Escucha las historias de transformación y cómo Dios ha trabajado en
            las vidas de nuestros miembros.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-gray-800 dark:to-gray-700 sm:p-12">
            {/* Quote Icon */}
            <div className="absolute left-8 top-8 text-blue-200">
              <svg
                className="h-12 w-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="relative">
              {/* Rating */}
              <div className="mb-6 flex justify-center">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="h-6 w-6 fill-current text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="mb-8 text-center text-xl italic leading-relaxed text-gray-700 dark:text-gray-200 sm:text-2xl">
                &quot;{currentTestimonial.content}&quot;
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                  <span className="text-xl font-bold text-white">
                    {currentTestimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <h4 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {currentTestimonial.name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 transform sm:left-8">
              <button
                onClick={prevTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg transition-colors duration-200 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <FiChevronLeft size={20} />
              </button>
            </div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 transform sm:right-8">
              <button
                onClick={nextTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg transition-colors duration-200 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-blue-400"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
