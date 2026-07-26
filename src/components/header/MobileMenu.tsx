'use client';
import { navigationItems } from '@/data';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { RefObject, useEffect, useRef, useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { NavItem } from '@/types';

type Props = {
  isMenuOpen: boolean;
  onClose: () => void;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
};

type MenuNodeProps = {
  item: NavItem;
  nodeKey: string;
  depth: number;
  idx: number;
  animateIn: boolean;
  openParents: Record<string, boolean>;
  toggleParent: (key: string) => void;
  onClose: () => void;
};

const MenuNode = ({
  item,
  nodeKey,
  depth,
  idx,
  animateIn,
  openParents,
  toggleParent,
  onClose,
}: MenuNodeProps) => {
  const t = useTranslations('Navigation');

  if (item.href) {
    return (
      <Link
        href={item.href}
        className={[
          'flex w-full items-center gap-3 rounded-md px-3 py-2 text-left font-medium',
          depth === 0 ? 'text-gray-700' : 'text-sm text-gray-600',
          'hover:bg-gray-50 hover:text-blue-600',
          depth === 0
            ? 'dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400'
            : 'dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400',
          'transform transition-all duration-300 ease-out will-change-transform',
          depth === 0 ? '-translate-x-4 opacity-0' : '',
          depth === 0 && animateIn ? 'translate-x-1 opacity-100' : '',
          depth === 0 ? '' : 'mt-1',
          'motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none',
        ].join(' ')}
        style={depth === 0 ? { transitionDelay: `${idx * 90}ms` } : undefined}
        onClick={onClose}
      >
        {item.icon ? <item.icon /> : null} {t(item.labelKey)}
      </Link>
    );
  }

  if (item.options) {
    const isOpen = !!openParents[nodeKey];

    return (
      <div className="w-full">
        <button
          type="button"
          onClick={() => toggleParent(nodeKey)}
          aria-expanded={isOpen}
          aria-controls={nodeKey}
          className={[
            'flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left font-medium',
            depth === 0 ? 'text-gray-700' : 'text-sm text-gray-600',
            'hover:bg-gray-50 hover:text-blue-600',
            depth === 0
              ? 'dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400'
              : 'dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400',
            'transform transition-all duration-300 ease-out will-change-transform',
            depth === 0 ? '-translate-x-4 opacity-0' : '',
            depth === 0 && animateIn ? 'translate-x-1 opacity-100' : '',
            depth === 0 ? '' : 'mt-1',
            'motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none',
          ].join(' ')}
          style={depth === 0 ? { transitionDelay: `${idx * 90}ms` } : undefined}
        >
          <span className="flex items-center gap-3">
            {item.icon ? <item.icon /> : null} {t(item.labelKey)}
          </span>
          <span className="ml-2 text-xs opacity-70">
            {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
          </span>
        </button>

        <div
          id={nodeKey}
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
            <MenuNode
              key={(opt.href ?? opt.labelKey) + '-' + subIdx}
              item={opt}
              nodeKey={`${nodeKey}-${subIdx}`}
              depth={depth + 1}
              idx={idx}
              animateIn={animateIn}
              openParents={openParents}
              toggleParent={toggleParent}
              onClose={onClose}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
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
          {navigationItems.map((item, idx) => (
            <MenuNode
              key={`${item.labelKey}-${idx}`}
              item={item}
              nodeKey={`submenu-${idx}`}
              depth={0}
              idx={idx}
              animateIn={animateIn}
              openParents={openParents}
              toggleParent={toggleParent}
              onClose={onClose}
            />
          ))}
          <div className="px-3 pt-2">
            <LocaleSwitcher className="!text-gray-700 hover:!text-blue-600 dark:!text-gray-200 dark:hover:!text-blue-400" />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
