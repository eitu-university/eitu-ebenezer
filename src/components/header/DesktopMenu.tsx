import { NavItem } from '@/types';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { cn } from '@/lib/utils';

const dropdownItemClasses = [
  'flex items-center gap-3 rounded-md px-3 py-2 text-sm',
  'text-charcoal hover:bg-parchment hover:text-terracotta',
  'dark:text-paper dark:hover:bg-[#18181b] dark:hover:text-terracotta-light',
  'transition-colors',
].join(' ');

// TODO: use React.memo for optimization
export const DesktopMenu = ({
  navigationItems,
  isScrolled,
}: {
  navigationItems: NavItem[];
  isScrolled: boolean;
}) => {
  const t = useTranslations('Navigation');

  const topLevelClasses = cn(
    'navLink font-medium',
    isScrolled ? 'text-ink dark:text-paper' : 'text-parchment'
  );

  return (
    <nav className="hidden items-center space-x-8 md:flex">
      {navigationItems.map((item) => {
        if (item.href)
          return (
            <Link key={item.href} href={item.href} className={topLevelClasses}>
              {t(item.labelKey)}
            </Link>
          );
        else if (item.options) {
          return (
            <div key={item.labelKey} className="group relative">
              <button
                className={cn('navLink inline-flex items-center gap-1', topLevelClasses)}
                aria-haspopup="menu"
                aria-expanded="false"
              >
                <span>{t(item.labelKey)}</span>
                <FiChevronDown className="mt-[1px] h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Dropdown menu */}
              <div
                role="menu"
                className={[
                  'invisible absolute left-0 top-full z-[10000] mt-2 min-w-[220px] rounded-nav border border-taupe bg-paper/95 p-2 shadow-glow backdrop-blur-sm',
                  'translate-y-2 opacity-0 transition-all duration-200 ease-out',
                  'group-hover:visible group-hover:translate-y-0 group-hover:opacity-100',
                  'dark:border-[#3f3f46] dark:bg-[#27272a]/95',
                ].join(' ')}
              >
                {item.options.map((opt) => {
                  if (opt.options) {
                    return (
                      <div key={opt.labelKey} className="group/sub relative">
                        <button
                          type="button"
                          className={cn(
                            'flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm',
                            'text-charcoal hover:bg-parchment hover:text-terracotta',
                            'dark:text-paper dark:hover:bg-[#18181b] dark:hover:text-terracotta-light',
                            'transition-colors'
                          )}
                          aria-haspopup="menu"
                          aria-expanded="false"
                        >
                          <span className="flex items-center gap-3">
                            {opt.icon ? <opt.icon /> : null}
                            <span>{t(opt.labelKey)}</span>
                          </span>
                          <FiChevronRight className="h-4 w-4" />
                        </button>

                        {/* Nested flyout */}
                        <div
                          role="menu"
                          className={[
                            'invisible absolute left-full top-0 z-[10000] ml-1 min-w-[220px] rounded-nav border border-taupe bg-paper/95 p-2 shadow-glow backdrop-blur-sm',
                            'translate-x-2 opacity-0 transition-all duration-200 ease-out',
                            'group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100',
                            'dark:border-[#3f3f46] dark:bg-[#27272a]/95',
                          ].join(' ')}
                        >
                          {opt.options.map((subOpt) => (
                            <Link
                              key={subOpt.href ?? subOpt.labelKey}
                              href={subOpt.href ?? '#'}
                              className={dropdownItemClasses}
                            >
                              {subOpt.icon ? <subOpt.icon /> : null}
                              <span>{t(subOpt.labelKey)}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={opt.href ?? opt.labelKey}
                      href={opt.href ?? '#'}
                      className={dropdownItemClasses}
                    >
                      {opt.icon ? <opt.icon /> : null}
                      <span>{t(opt.labelKey)}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </nav>
  );
};

