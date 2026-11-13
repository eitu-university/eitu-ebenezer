'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function PrivacyNotice() {
  const t = useTranslations('Common');

  return (
    <p className="text-center text-xs text-graphite dark:text-[#a1a1aa]">
      {t.rich('privacyNotice', {
        link: (chunks) => (
          <Link
            href="/politica-de-privacidad"
            className="text-terracotta underline hover:text-terracotta/80"
          >
            {chunks}
          </Link>
        ),
      })}
    </p>
  );
}
