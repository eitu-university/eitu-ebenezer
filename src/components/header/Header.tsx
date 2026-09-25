'use client';
import { useState, useEffect, useRef } from 'react';
import { navigationItems } from '@/data';
import { cn } from '@/lib/utils';
import { RiMenu5Line, RiCloseLine } from 'react-icons/ri';
import ThemeToggle from '@/components/ThemeToggle';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { Link } from '@/i18n/navigation';
import Logo from '../Logo';
import MobileMenu from './MobileMenu';
import { HeaderTopInfo } from './HeaderTopInfo';
import { DesktopMenu } from './DesktopMenu';

type Props = {
  /**
   * true only when the header sits on top of a full-bleed dark photo (the
   * homepage hero) and can start transparent with light text. Every other
   * route has no photo behind it, so it must always render the solid
   * parchment/ink bar or the light text becomes invisible.
   */
  overlay?: boolean;
};

export default function Header({ overlay = false }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!overlay) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [overlay]);

  const isSolid = isScrolled || !overlay;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // const scrollToSection = (href: string) => {
  //   const element = document.querySelector(href);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   setIsMenuOpen(false);
  // };

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-[9999] transition-all duration-1000',
        isSolid
          ? 'border-b border-taupe/40 bg-parchment/80 shadow-glow backdrop-blur-md dark:border-[#3f3f46]/40 dark:bg-[#18181b]/80'
          : 'bg-transparent'
      )}
    >
      <HeaderTopInfo isScrolled={isSolid} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'flex items-center justify-between transition-all duration-1000',
            isSolid ? 'h-20 md:h-28' : 'h-28 md:h-36'
          )}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href={'/'} className="flex items-center space-x-2">
              <Logo isScrolled={isSolid} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <DesktopMenu navigationItems={navigationItems} isScrolled={isSolid} />

          {/* Actions */}
          <div className="flex items-center gap-3">
            <LocaleSwitcher
              className={
                isSolid
                  ? '!text-ink hover:!text-terracotta dark:!text-paper dark:hover:!text-terracotta-light'
                  : '!text-parchment hover:!text-terracotta-light'
              }
            />
            <ThemeToggle
              className={
                isSolid
                  ? 'text-ink hover:text-terracotta dark:text-paper dark:hover:text-terracotta-light'
                  : 'text-parchment/90 hover:text-terracotta-light'
              }
            />
            {/* Mobile Menu Button */}
            <button
              aria-label="Menu button"
              ref={closeButtonRef}
              onClick={toggleMenu}
              className={cn(
                'rounded-md p-2 transition-colors duration-200 hover:bg-paper hover:text-terracotta dark:hover:bg-[#27272a] dark:hover:text-terracotta-light md:hidden',
                isSolid ? 'text-ink dark:text-paper' : 'text-parchment'
              )}
            >
              {isMenuOpen ? (
                <RiCloseLine size={26} />
              ) : (
                <RiMenu5Line size={25} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu
          isMenuOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          closeButtonRef={closeButtonRef}
        />
      </div>
    </header>
  );
}
