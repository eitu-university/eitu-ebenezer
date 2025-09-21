'use client';
import { navigationItems } from '@/data';
import Link from 'next/link';
import { RefObject, useEffect, useRef, useState } from 'react';

type Props = {
  isMenuOpen: boolean;
  onClose: () => void;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
};

const MobileMenu = ({ isMenuOpen, onClose, closeButtonRef }: Props) => {
  const [animateIn, setAnimateIn] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isMenuOpen) {
      // Espera al próximo frame para asegurar que se apliquen los estilos iniciales antes de animar
      const id = requestAnimationFrame(() => setAnimateIn(true));
      return () => cancelAnimationFrame(id);
    }
    setAnimateIn(false);
  }, [isMenuOpen]);

  // Cierra al hacer click fuera del contenedor
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const el = containerRef.current;
      // referencia del boton close en Header.tsx
      const elCloseButton = closeButtonRef.current;
      if (!el || !elCloseButton) return;

      if (
        e.target instanceof Node &&
        !el.contains(e.target) &&
        !elCloseButton.contains(e.target)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, {
      passive: true,
    });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen, onClose]);

  return (
    <>
      {isMenuOpen && (
        <div
          className="my-4 space-y-1 rounded-lg border-t border-gray-200 bg-white px-2 pb-3 pt-2 dark:border-gray-700 dark:bg-[#0b1220] md:hidden"
          role="menu"
          aria-label="Mobile navigation"
          ref={containerRef}
        >
          {navigationItems.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              // onClick={() => scrollToSection(item.href)}
              className={[
                'flex w-full items-center gap-3 rounded-md px-3 py-2 text-left font-medium',
                'text-gray-700 hover:bg-gray-50 hover:text-blue-600',
                'dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400',
                // Animación
                'transform transition-all duration-300 ease-out will-change-transform',
                '-translate-x-4 opacity-0',
                animateIn ? 'translate-x-1 opacity-100' : '',
                // Respeta reduced motion
                'motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none',
              ].join(' ')}
              style={{ transitionDelay: `${idx * 90}ms` }}
            >
              <item.icon /> {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileMenu;
