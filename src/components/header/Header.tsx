'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navigationItems } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { RiWhatsappLine, RiMailLine } from 'react-icons/ri';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import Logo from '../Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#011437]/60 shadow-lg backdrop-blur-md dark:bg-[#0b1220]/60'
          : 'bg-transparent'
      )}
    >
      <HeaderTopInfo />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn('flex items-center justify-between transition-all duration-300',
            isScrolled ? 'h-20 md:h-24' : 'h-28 md:h-36'
          )}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href={'/'} className="flex items-center space-x-2">
              <Logo isScrolled={isScrolled}/>
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
              onClick={toggleMenu}
              className="rounded-md p-2 text-gray-200 transition-colors duration-200 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-blue-400 md:hidden"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-gray-200 bg-white px-2 pb-3 pt-2 dark:border-gray-700 dark:bg-[#0b1220]">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full rounded-md px-3 py-2 text-left font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

const HeaderTopInfo = () => (
  <div className="transparent-color text-lr-text-light/80 border-b border-white/10 py-1.5 text-xs">
    <div className="container mx-auto flex items-center justify-end px-4">
      <div className="flex items-center space-x-4 text-white dark:text-gray-200">
        <a
          href="mailto:hola@ebenezer.com"
          className="hover:text-lr-beige navLink flex items-center transition-colors"
        >
          <RiMailLine className="mr-1.5 h-3 w-3" />
          hola@ebenezer.com
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/19292588162?text=Hola%20EITUEbenezer,%20quiero%20más%20información."
          className="hover:text-lr-beige navLink flex items-center transition-colors"
        >
          <RiWhatsappLine className="mr-1.5 h-3 w-3" />
          +(1) 929 258 8162
        </a>
      </div>
    </div>
  </div>
);
