'use client';
import { navigationItems } from '@/data';
import Link from 'next/link';
import { RefObject, useEffect, useRef, useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

type Props = {
  isMenuOpen: boolean;
  onClose: () => void;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
};

const MobileMenu = ({ isMenuOpen, onClose, closeButtonRef }: Props) => {
  const [animateIn, setAnimateIn] = useState(false);
  const [openParents, setOpenParents] = useState<Record<string, boolean>>({});
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

  const toggleParent = (key: string) => {
    setOpenParents((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {isMenuOpen && (
        <div
          className="my-4 space-y-1 rounded-lg border-t border-gray-200 bg-white px-2 pb-3 pt-2 dark:border-gray-700 dark:bg-[#0b1220] md:hidden"
          role="menu"
          aria-label="Mobile navigation"
          ref={containerRef}
        >
          {navigationItems.map((item, idx) => {
            if (item.href)
              return (
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
              );
            else if (item.options) {
              const parentKey = `${item.label}-${idx}`;
              const isOpen = !!openParents[parentKey];
              return (
                <div key={parentKey} className="w-full">
                  <button
                    type="button"
                    onClick={() => toggleParent(parentKey)}
                    aria-expanded={isOpen}
                    aria-controls={`submenu-${idx}`}
                    className={[
                      'flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left font-medium',
                      'text-gray-700 hover:bg-gray-50 hover:text-blue-600',
                      'dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400',
                      // Animación
                      'transform transition-all duration-300 ease-out will-change-transform',
                      '-translate-x-4 opacity-0',
                      animateIn ? 'translate-x-1 opacity-100' : '',
                      // Reduced motion
                      'motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none',
                    ].join(' ')}
                    style={{ transitionDelay: `${idx * 90}ms` }}
                  >
                    <span className="flex items-center gap-3">
                      <item.icon /> {item.label}
                    </span>
                    <span className="ml-2 text-xs opacity-70">
                      {isOpen ? (
                        <FiChevronUp size={20} />
                      ) : (
                        <FiChevronDown size={20} />
                      )}
                    </span>
                  </button>

                  <div
                    id={`submenu-${idx}`}
                    role="group"
                    className={[
                      'pl-9 pr-2',
                      'overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out',
                      isOpen
                        ? 'max-h-96 translate-y-0 opacity-100'
                        : 'max-h-0 -translate-y-1 opacity-0',
                    ].join(' ')}
                  >
                    {item.options.map((opt, subIdx) => (
                      <Link
                        key={(opt.href ?? opt.label) + '-' + subIdx}
                        href={opt.href ?? '#'}
                        className={[
                          'mt-1 flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm',
                          'text-gray-600 hover:bg-gray-50 hover:text-blue-600',
                          'dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400',
                          'transition-colors',
                        ].join(' ')}
                        // stagger ligero dentro del submenu
                        style={{
                          transitionDelay: `${idx * 90 + subIdx * 60}ms`,
                        }}
                        onClick={onClose}
                      >
                        {opt.icon ? <opt.icon /> : null} {opt.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export default MobileMenu;
