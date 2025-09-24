'use client';
import { useState, useEffect, useRef } from 'react';
import { navigationItems } from '@/data';
import { cn } from '@/lib/utils';
import { RiMenu5Line, RiCloseLine } from 'react-icons/ri';
import { FiChevronDown } from 'react-icons/fi';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import Logo from '../Logo';
import MobileMenu from './MobileMenu';
import { HeaderTopInfo } from './HeaderTopInfo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        isScrolled
          ? 'bg-[#011437]/60 shadow-lg backdrop-blur-md dark:bg-[#0b1220]/60'
          : 'bg-transparent'
      )}
    >
      <HeaderTopInfo />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'flex items-center justify-between transition-all duration-1000',
            isScrolled ? 'h-20 md:h-28' : 'h-28 md:h-36'
          )}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href={'/'} className="flex items-center space-x-2">
              <Logo isScrolled={isScrolled} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item) => {
              if (item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    // onClick={() => scrollToSection(item.href)}
                    className="navLink font-medium text-gray-200 dark:text-gray-100"
                  >
                    {item.label}
                  </Link>
                );
              else if (item.options) {
                return (
                  <div key={item.label} className="relative group">
                    <button
                      className="navLink inline-flex items-center gap-1 font-medium text-gray-200 dark:text-gray-100"
                      aria-haspopup="menu"
                      aria-expanded="false"
                    >
                      <span>{item.label}</span>
                      <FiChevronDown className="mt-[1px] h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown menu */}
                    <div
                      role="menu"
                      className={[
                        'invisible absolute left-0 top-full z-[10000] mt-2 min-w-[220px] rounded-lg border border-gray-200 bg-white/95 p-2 shadow-xl backdrop-blur-sm',
                        'opacity-0 translate-y-2 transition-all duration-200 ease-out',
                        'group-hover:visible group-hover:opacity-100 group-hover:translate-y-0',
                        'dark:border-gray-700 dark:bg-[#0b1220]/95',
                      ].join(' ')}
                    >
                      {item.options.map((opt) => (
                        <Link
                          key={opt.href ?? opt.label}
                          href={opt.href ?? '#'}
                          className={[
                            'flex items-center gap-3 rounded-md px-3 py-2 text-sm',
                            'text-gray-700 hover:bg-gray-50 hover:text-blue-600',
                            'dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400',
                            'transition-colors',
                          ].join(' ')}
                        >
                          {opt.icon ? <opt.icon /> : null}
                          <span>{opt.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              ref={closeButtonRef}
              onClick={toggleMenu}
              className="rounded-md p-2 text-gray-200 transition-colors duration-200 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-400 md:hidden"
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
