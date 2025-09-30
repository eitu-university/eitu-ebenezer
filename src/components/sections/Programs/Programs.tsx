'use client';
import './Programs.css';
import type { CSSProperties } from 'react';
import { ProgramList } from '@/data/programs';
import Image from 'next/image';
// const allCarouselItems = originalCarouselItems;
// const NUM_ITEMS = ProgramList.length;

export const Programs = () => {
  const itemWidth = 310;
  const itemGap = 32;

  return (
    <div className="grid min-h-screen place-items-center bg-gray-100 p-4 text-gray-800 antialiased dark:bg-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
          Nuestros Programas
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
          En EituEbenezer damos formación bíblica sólida para el crecimiento
          espiritual, liderazgo cristiano y preparación ministerial, centrados
          en la Palabra de Dios.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        className="carousel relative h-[480px] w-full max-w-7xl overflow-clip"
        data-mask
        // Inline styles to set the CSS variables used by the custom CSS
        style={
          {
            '--carousel-width': 'min(80vw, 1200px)',
            '--carousel-item-height': '450px',
            '--carousel-item-width': `${itemWidth}px`,
            '--carousel-item-gap': `${itemGap}px`,
            '--clr-cta': 'rgb(0, 132, 209)',
            '--items': ProgramList.length.toString(),
          } as CSSProperties
        }
      >
        {/* Map over the duplicated items to create the continuous loop */}
        {ProgramList.map((item, index) => (
          <article
            key={index}
            // Use the custom 'carousel > article' styles defined in the <style> block
            className="group absolute mt-4 h-[var(--carousel-item-height)] w-[var(--carousel-item-width)]"
            style={
              {
                '--i': index, // This injects the index variable for animation delay
              } as CSSProperties
            }
          >
            <div className="grid h-full w-full grid-rows-[200px_auto_1fr_auto] gap-1 rounded-xl border border-gray-200 bg-white text-gray-800 shadow-lg transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-xl dark:border-white/15 dark:bg-gray-800/50 dark:text-white">
              {/* Image section */}
              <Image
                src={item.imgSrc}
                alt={item.alt}
                width={itemWidth}
                height={200}
                className="h-full w-full rounded-t-xl object-cover"
              />
              {/* TAGS AQUI */}
              {Array.isArray(item.tags) && item.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2 px-4 py-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-300 bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-700 shadow-lg dark:border-white/15 dark:bg-white/5 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="h-0" />
              )}

              {/* Content area - uses custom padding set in the style block */}
              <div className="p-4 py-0 text-justify">
                <h2 className="mb-2 !p-0 text-lg">{item.title}</h2>
                <p className="m-0 text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>

              {/* CTA Button - uses custom styling from the style block */}
              <button className="flex justify-start p-4 pt-0 font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                Saber más →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
