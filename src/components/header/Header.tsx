'use client';
import { useState, useEffect, useRef } from 'react';
import { navigationItems } from '@/data';
import { cn } from '@/lib/utils';
import { RiMenu5Line, RiCloseLine } from 'react-icons/ri';
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
        'fixed left-0 right-0 top-0 z-50 transition-all duration-1000',
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
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                // onClick={() => scrollToSection(item.href)}
                className="navLink font-medium text-gray-200 dark:text-gray-100"
              >
                {item.label}
              </Link>
            ))}
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
