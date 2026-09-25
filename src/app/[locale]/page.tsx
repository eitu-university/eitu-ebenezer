import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SEO from '@/components/seo/SEO';
import Header from '@/components/header/Header';
import Banner from '@/components/banner/Banner';
import AboutUs from '@/components/sections/AboutUs';
import Staff from '@/components/sections/Staff/Staff';
import Ministries from '@/components/sections/Ministries/Ministries';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from 'sonner';
import Nations from '@/components/sections/Nations/Nations';
import { Programs } from '@/components/sections/Programs/Programs';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('home.title'),
    description: t('home.description'),
    alternates: { canonical: locale === 'es' ? '/' : `/${locale}` },
  };
}

export default function Home() {
  return (
    <>
      <SEO />
      <Toaster position="top-center" />

      <Header overlay />
      <main className="">
        <Banner />
        <Nations />
        <Programs />
        <AboutUs />
        <Staff />
        <Ministries />
        <Testimonials />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}
