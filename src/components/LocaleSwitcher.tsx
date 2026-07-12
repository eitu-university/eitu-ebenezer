'use client';

import { useLocale } from 'next-intl';
import { FiGlobe } from 'react-icons/fi';
import { usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export default function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === 'es' ? 'en' : 'es';

  return (
    <button
      type="button"
      aria-label={nextLocale === 'en' ? 'Switch to English' : 'Cambiar a español'}
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      className={cn(
        'flex items-center gap-1.5 rounded-md p-2 text-sm font-semibold text-gray-200 transition-colors duration-200 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500',
        className
      )}
      title={nextLocale === 'en' ? 'Switch to English' : 'Cambiar a español'}
    >
      <FiGlobe size={18} />
      <span>{nextLocale.toUpperCase()}</span>
    </button>
  );
}
