import { getTranslations } from 'next-intl/server';
import Logo from '@/components/Logo';
import { Link } from '@/i18n/navigation';

export default async function NotFound() {
  const t = await getTranslations('NotFound');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-parchment text-ink dark:bg-[#18181b] dark:text-paper">
      <div className="flex items-center">
        <Link href={'/'} className="flex items-center space-x-2">
          <Logo />
        </Link>
      </div>
      <h1 className="font-display text-3xl font-normal">{t('title')}</h1>
      <Link href="/" className="text-terracotta hover:text-terracotta/80">
        {t('backHome')}
      </Link>
    </div>
  );
}
