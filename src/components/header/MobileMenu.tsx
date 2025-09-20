import { navigationItems } from '@/data';
import Link from 'next/link';

const MobileMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <div>
      {isMenuOpen && (
        <div className="my-4 space-y-1 rounded-lg border-t border-gray-200 bg-white px-2 pb-3 pt-2 dark:border-gray-700 dark:bg-[#0b1220] md:hidden">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              // onClick={() => scrollToSection(item.href)}
              className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-blue-400"
            >
              <item.icon /> {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
