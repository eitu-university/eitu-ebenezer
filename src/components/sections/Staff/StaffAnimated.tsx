'use client';

import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

type Props = {
  children: ReactNode;
};

/**
 * Wraps the "Our Team" header + card grid and drives all GSAP animations:
 * - Title revealed letter by letter from a mask, divider drawn, description faded in.
 * - Cards rise in with a 3D flip, photo uncovered with a clip-path curtain.
 * - On pointer devices: 3D tilt that follows the cursor plus a moving light glare.
 * Everything is skipped when the user prefers reduced motion.
 */
export default function StaffAnimated({ children }: Props) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // ---------- Header ----------
        const title = scope.current?.querySelector<HTMLElement>('[data-staff-title]');
        if (title) {
          const split = SplitText.create(title, { type: 'words,chars', mask: 'chars' });
          gsap.from(split.chars, {
            yPercent: 110,
            duration: 0.8,
            ease: 'power4.out',
            stagger: 0.03,
            scrollTrigger: { trigger: title, start: 'top 85%', once: true },
          });
        }

        gsap.from('[data-staff-divider]', {
          scaleX: 0,
          duration: 0.9,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: '[data-staff-divider]', start: 'top 85%', once: true },
        });

        gsap.from('[data-staff-description]', {
          y: 24,
          autoAlpha: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '[data-staff-description]', start: 'top 85%', once: true },
        });

        // ---------- Cards ----------
        const cards = gsap.utils.toArray<HTMLElement>('[data-staff-card]');

        ScrollTrigger.batch(cards, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) => {
            const els = batch as HTMLElement[];
            const tl = gsap.timeline();

            tl.from(els, {
              y: 90,
              rotationX: -25,
              autoAlpha: 0,
              transformOrigin: '50% 100%',
              duration: 1,
              ease: 'power3.out',
              stagger: 0.15,
            });

            tl.fromTo(
              els.map((el) => el.querySelector('[data-staff-media]')),
              { clipPath: 'inset(100% 0% 0% 0%)' },
              {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1.1,
                ease: 'expo.inOut',
                stagger: 0.15,
              },
              0.15,
            );

            tl.from(
              els.map((el) => el.querySelector('[data-staff-img]')),
              { scale: 1.4, duration: 1.6, ease: 'expo.out', stagger: 0.15 },
              0.3,
            );

            tl.from(
              els.flatMap((el) => Array.from(el.querySelectorAll('[data-staff-reveal]'))),
              { y: 20, autoAlpha: 0, duration: 0.6, ease: 'power2.out', stagger: 0.05 },
              0.55,
            );
          },
        });
      });

      // ---------- Hover tilt + glare (only real pointers) ----------
      mm.add(
        '(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)',
        () => {
          const cleanups: Array<() => void> = [];

          gsap.utils.toArray<HTMLElement>('[data-staff-tilt]').forEach((card) => {
            const glare = card.querySelector<HTMLElement>('[data-staff-glare]');
            const img = card.querySelector<HTMLElement>('[data-staff-img]');

            const rotX = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power3.out' });
            const rotY = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power3.out' });
            const imgX = img ? gsap.quickTo(img, 'x', { duration: 0.8, ease: 'power3.out' }) : null;
            const imgY = img ? gsap.quickTo(img, 'y', { duration: 0.8, ease: 'power3.out' }) : null;

            gsap.set(card, { transformPerspective: 900 });

            const onMove = (e: PointerEvent) => {
              const r = card.getBoundingClientRect();
              const px = (e.clientX - r.left) / r.width; // 0..1
              const py = (e.clientY - r.top) / r.height; // 0..1

              rotY((px - 0.5) * 12);
              rotX((0.5 - py) * 10);
              imgX?.((0.5 - px) * 14);
              imgY?.((0.5 - py) * 14);

              if (glare) {
                glare.style.setProperty('--mx', `${px * 100}%`);
                glare.style.setProperty('--my', `${py * 100}%`);
              }
            };

            const onEnter = () => {
              gsap.to(card, { y: -8, duration: 0.4, ease: 'power3.out' });
              if (glare) gsap.to(glare, { autoAlpha: 1, duration: 0.4 });
            };

            const onLeave = () => {
              rotX(0);
              rotY(0);
              imgX?.(0);
              imgY?.(0);
              gsap.to(card, { y: 0, duration: 0.6, ease: 'elastic.out(1, 0.6)' });
              if (glare) gsap.to(glare, { autoAlpha: 0, duration: 0.4 });
            };

            card.addEventListener('pointermove', onMove);
            card.addEventListener('pointerenter', onEnter);
            card.addEventListener('pointerleave', onLeave);

            cleanups.push(() => {
              card.removeEventListener('pointermove', onMove);
              card.removeEventListener('pointerenter', onEnter);
              card.removeEventListener('pointerleave', onLeave);
            });
          });

          return () => cleanups.forEach((fn) => fn());
        },
      );
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}
