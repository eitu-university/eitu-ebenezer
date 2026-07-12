import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Contact from '@/components/sections/Contact/Contact';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('contact.title'),
    description: t('contact.description'),
    alternates: {
      canonical: locale === 'es' ? '/contacto' : `/${locale}/contacto`,
    },
  };
}

const Page = () => {
  return <Contact />;
};

export default Page;
