import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import AboutUs from '@/components/sections/AboutUs';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('aboutUs.title'),
    description: t('aboutUs.description'),
    alternates: {
      canonical: locale === 'es' ? '/sobre-nosotros' : `/${locale}/sobre-nosotros`,
    },
  };
}

const page = () => {
  return <AboutUs />;
};

export default page;
