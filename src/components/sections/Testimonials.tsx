'use client';

import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      role: 'Miembro desde 2018',
      content: 'EituEbenezer ha sido un lugar donde he encontrado mi propósito en Cristo. La comunidad aquí es verdaderamente una familia que me ha apoyado en los momentos más difíciles de mi vida.',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      role: 'Líder de Jóvenes',
      content: 'Ver cómo Dios transforma las vidas de los jóvenes a través de nuestro ministerio es una experiencia increíble. Cada día veo el poder del evangelio en acción.',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Patricia Silva',
      role: 'Miembro desde 2020',
      content: 'Cuando llegué a EituEbenezer, estaba perdida y sin dirección. Hoy puedo decir que he encontrado mi identidad en Cristo y un propósito claro para mi vida.',
      rating: 5
    },
    {
      id: 4,
      name: 'David Morales',
      role: 'Voluntario de Misiones',
      content: 'Ser parte del equipo de misiones me ha permitido ver cómo Dios trabaja en diferentes culturas y contextos. Es una experiencia que ha transformado mi perspectiva del evangelio.',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-28 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Testimonios
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Escucha las historias de transformación y cómo Dios ha trabajado 
            en las vidas de nuestros miembros.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 sm:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-blue-200">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <div className="relative">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl sm:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8 text-center italic">
                &quot;{currentTestimonial.content}&quot;
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {currentTestimonial.name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 sm:left-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <FiChevronLeft size={20} />
              </button>
            </div>

            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 sm:right-8">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
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