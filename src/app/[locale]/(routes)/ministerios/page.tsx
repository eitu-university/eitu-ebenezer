import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Staff from '@/components/sections/Staff/Staff';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('ministries.title'),
    description: t('ministries.description'),
    alternates: {
      canonical: locale === 'es' ? '/ministerios' : `/${locale}/ministerios`,
    },
  };
}

const page = () => {
  return <Staff />;
};

export default page;
