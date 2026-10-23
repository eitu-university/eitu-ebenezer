'use client';
import './Programs.css';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useTranslations } from 'next-intl';
import { ProgramList } from '@/data/programs';
import Image from 'next/image';
import { FiArrowRight, FiX } from 'react-icons/fi';
import type { ProgramItem } from '@/types';

export const Programs = () => {
  const t = useTranslations('Programs');
  const tCommon = useTranslations('Common');
  const itemWidth = 310;
  const itemGap = 32;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<ProgramItem | null>(null);

  const open = (item: ProgramItem) => {
    setActive(item);
    // Lock page scroll while the modal is open; restored in handleClose.
    document.body.style.overflow = 'hidden';
    dialogRef.current?.showModal();
  };

  const close = () => dialogRef.current?.close();

  // Fires for every close path: button, backdrop click and the Escape key.
  const handleClose = () => {
    document.body.style.overflow = '';
    setActive(null);
  };

  // Safety net: never leave the page scroll-locked if we unmount while open.
  useEffect(
    () => () => {
      document.body.style.overflow = '';
    },
    []
  );

  return (
    <div className="grid min-h-screen place-items-center bg-parchment p-4 text-charcoal antialiased dark:bg-[#18181b] dark:text-[#f4f4f5]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display mb-4 text-3xl font-normal text-ink dark:text-paper sm:text-4xl lg:text-5xl">
          {t('title')}
        </h2>
        <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-terracotta" />
        <p className="text-lg leading-relaxed text-graphite dark:text-[#a1a1aa] sm:text-xl">
          {t('description')}
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
            '--clr-cta': '#ff5a00',
            '--items': ProgramList.length.toString(),
          } as CSSProperties
        }
      >
        {/* Map over the duplicated items to create the continuous loop */}
        {ProgramList.map((item, index) => (
          <article
            key={item.key}
            // Use the custom 'carousel > article' styles defined in the <style> block
            className="group absolute mt-4 h-[var(--carousel-item-height)] w-[var(--carousel-item-width)]"
            style={
              {
                '--i': index, // This injects the index variable for animation delay
              } as CSSProperties
            }
          >
            <div className="grid h-full w-full grid-rows-[175px_auto_1fr_auto] gap-1 rounded-card border border-taupe bg-paper text-charcoal shadow-glow transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-float dark:border-[#3f3f46] dark:bg-[#27272a] dark:text-[#f4f4f5]">
              {/* Image section */}
              <Image
                src={item.imgSrc}
                alt={t(`items.${item.key}.title`)}
                width={itemWidth}
                height={175}
                className="h-full w-full rounded-t-card object-cover"
                loading='lazy'
              />
              {/* TAGS AQUI */}
              {Array.isArray(item.tagKeys) && item.tagKeys.length > 0 ? (
                <div className="flex flex-wrap gap-2 px-4 py-2">
                  {item.tagKeys.map((tagKey) => (
                    <span
                      key={tagKey}
                      className="rounded-full border border-taupe bg-parchment px-2 py-0.5 text-[10px] font-medium text-charcoal dark:border-[#3f3f46] dark:bg-[#18181b] dark:text-[#a1a1aa]"
                    >
                      {t(`tags.${tagKey}`)}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="h-0" />
              )}

              {/* Content area - uses custom padding set in the style block */}
              <div className="p-4 py-0 text-justify">
                <h2 className="font-display mb-2 !p-0 text-lg font-normal">
                  {t(`items.${item.key}.title`)}
                </h2>
                <p className="m-0 line-clamp-6 text-sm text-graphite dark:text-[#a1a1aa]">
                  {t(`items.${item.key}.description`)}
                </p>
              </div>

              {/* CTA Button - uses custom styling from the style block */}
              <button
                type="button"
                onClick={() => open(item)}
                className="group/btn flex items-center justify-start gap-1.5 p-4 pt-0 font-semibold text-terracotta transition-colors duration-200 hover:text-terracotta/80">
                {tCommon('learnMore')}
                <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onClick={(event) => {
          // Clicking the backdrop (the dialog element itself) closes it.
          if (event.target === event.currentTarget) close();
        }}
        aria-label={active ? t(`items.${active.key}.title`) : undefined}
        className="w-[min(92vw,640px)] max-w-none overflow-hidden rounded-card border border-taupe bg-paper p-0 text-charcoal shadow-float backdrop:bg-ink/70 dark:border-[#3f3f46] dark:bg-[#27272a] dark:text-[#f4f4f5]"
      >
        {active && (
          <div className="flex max-h-[90vh] flex-col">
            <div className="relative aspect-video w-full shrink-0">
              <Image
                src={active.imgSrc}
                alt={t(`items.${active.key}.title`)}
                fill
                sizes="(min-width: 700px) 640px, 92vw"
                className="object-cover"
              />
              <button
                type="button"
                onClick={close}
                aria-label={t('modal.close')}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-ink/60 text-paper transition-colors hover:bg-terracotta focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              >
                <FiX className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="overflow-y-auto p-6">
              {Array.isArray(active.tagKeys) && active.tagKeys.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {active.tagKeys.map((tagKey) => (
                    <span
                      key={tagKey}
                      className="rounded-full border border-taupe bg-parchment px-2 py-0.5 text-xs font-medium text-charcoal dark:border-[#3f3f46] dark:bg-[#18181b] dark:text-[#a1a1aa]"
                    >
                      {t(`tags.${tagKey}`)}
                    </span>
                  ))}
                </div>
              )}
              <h3 className="font-display mb-3 text-2xl font-normal text-ink dark:text-paper">
                {t(`items.${active.key}.title`)}
              </h3>
              <p className="leading-relaxed text-graphite dark:text-[#a1a1aa]">
                {t(`items.${active.key}.description`)}
              </p>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
};
