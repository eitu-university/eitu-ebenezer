'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import type { GalleryImage } from '@/data/chaplaincy-gallery';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

type Props = {
  images: GalleryImage[];
};

const SWIPE_THRESHOLD = 50;

export default function ChaplaincyGallery({ images }: Props) {
  const t = useTranslations('Chaplaincy.gallery');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const gridRef = useRef<HTMLUListElement>(null);
  const lightboxImgRef = useRef<HTMLImageElement>(null);

  const total = images.length;

  // Grid: photos fade up in a staggered wave as they scroll into view.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const items = gsap.utils.toArray<HTMLElement>('li');
        gsap.set(items, { autoAlpha: 0, y: 40, scale: 0.96 });
        ScrollTrigger.batch(items, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.08,
            }),
        });
      });
    },
    { scope: gridRef }
  );

  // Lightbox: each newly shown image fades and settles in.
  useGSAP(
    () => {
      if (activeIndex === null || !lightboxImgRef.current) return;
      if (window.matchMedia(REDUCED_MOTION).matches) return;
      gsap.fromTo(
        lightboxImgRef.current,
        { autoAlpha: 0, scale: 0.95 },
        { autoAlpha: 1, scale: 1, duration: 0.45, ease: 'power2.out' }
      );
    },
    { dependencies: [activeIndex] }
  );

  const open = (index: number) => {
    setActiveIndex(index);
    // Lock page scroll while the lightbox is open; restored in handleClose.
    document.body.style.overflow = 'hidden';
    dialogRef.current?.showModal();
  };

  const close = useCallback(() => dialogRef.current?.close(), []);

  // Fires for every close path: button, backdrop click and the Escape key.
  const handleClose = () => {
    document.body.style.overflow = '';
    setActiveIndex(null);
  };

  const step = useCallback(
    (delta: number) =>
      setActiveIndex((current) =>
        current === null ? current : (current + delta + total) % total
      ),
    [total]
  );

  // Safety net: never leave the page scroll-locked if we unmount while open.
  useEffect(
    () => () => {
      document.body.style.overflow = '';
    },
    []
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'ArrowRight') step(1);
    if (event.key === 'ArrowLeft') step(-1);
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) step(deltaX < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const active = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <ul ref={gridRef} className="columns-2 gap-3 sm:gap-4 md:columns-3 xl:columns-4">
        {images.map((image, index) => (
          <li key={image.src} className="mb-3 break-inside-avoid sm:mb-4">
            <button
              type="button"
              onClick={() => open(index)}
              aria-label={t('open', { index: index + 1, total })}
              className="group relative block w-full overflow-hidden rounded-2xl border border-taupe bg-paper focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 dark:border-[#3f3f46] dark:bg-[#27272a] dark:focus-visible:ring-offset-[#18181b]"
            >
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={t('imageAlt', { index: index + 1, total })}
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onKeyDown={handleKeyDown}
        onClick={(event) => {
          // Clicking the backdrop (the dialog element itself) closes it.
          if (event.target === event.currentTarget) close();
        }}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
        }}
        onTouchEnd={handleTouchEnd}
        aria-label={t('heading')}
        className="m-0 h-full max-h-none w-full max-w-none bg-ink/95 p-0 text-paper backdrop:bg-ink/80"
      >
        {active && activeIndex !== null && (
          <div
            className="flex h-full w-full flex-col"
            onClick={(event) => {
              if (event.target === event.currentTarget) close();
            }}
          >
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <p className="text-sm font-medium tabular-nums text-paper/80" aria-live="polite">
                {t('counter', { index: activeIndex + 1, total })}
              </p>
              <button
                type="button"
                onClick={close}
                aria-label={t('close')}
                className="flex h-11 w-11 items-center justify-center rounded-full text-paper transition-colors hover:bg-paper/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              >
                <FiX className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div
              className="relative flex-1"
              onClick={(event) => {
                if (event.target === event.currentTarget) close();
              }}
            >
              <Image
                key={active.src}
                ref={lightboxImgRef}
                src={active.src}
                alt={t('imageAlt', { index: activeIndex + 1, total })}
                fill
                sizes="100vw"
                className="object-contain px-2 sm:px-20"
                priority
              />

              <button
                type="button"
                onClick={() => step(-1)}
                aria-label={t('previous')}
                className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-paper transition-colors hover:bg-terracotta focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta sm:left-4"
              >
                <FiChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label={t('next')}
                className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink/60 text-paper transition-colors hover:bg-terracotta focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta sm:right-4"
              >
                <FiChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="h-6 shrink-0" />
          </div>
        )}
      </dialog>
    </>
  );
}
