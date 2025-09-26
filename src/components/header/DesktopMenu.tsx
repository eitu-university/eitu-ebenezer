import { NavItem } from '@/types';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

// TODO: use React.memo for optimization
export const DesktopMenu = ({ navigationItems }: { navigationItems: NavItem[] }) => {
  return (
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
            <div key={item.label} className="group relative">
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
                  'translate-y-2 opacity-0 transition-all duration-200 ease-out',
                  'group-hover:visible group-hover:translate-y-0 group-hover:opacity-100',
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
  );
};


