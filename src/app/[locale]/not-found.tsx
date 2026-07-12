import { getTranslations } from 'next-intl/server';
import Logo from '@/components/Logo';
import { Link } from '@/i18n/navigation';

export default async function NotFound() {
  const t = await getTranslations('NotFound');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex items-center">
        <Link href={'/'} className="flex items-center space-x-2">
          <Logo />
        </Link>
      </div>
      <h1>{t('title')}</h1>
      <Link href="/" className="text-blue-500">
        {t('backHome')}
      </Link>
    </div>
  );
}
