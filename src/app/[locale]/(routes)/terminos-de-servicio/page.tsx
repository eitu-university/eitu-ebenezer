import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { contactInfo } from '@/data';
import { RiWhatsappLine, RiMailLine } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('terms.title'),
    description: t('terms.description'),
    alternates: {
      canonical:
        locale === 'es'
          ? '/terminos-de-servicio'
          : `/${locale}/terminos-de-servicio`,
    },
  };
}

export default async function TermsOfServicePage() {
  const t = await getTranslations('TermsOfService');

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            {t('subtitle')}
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
            {t('lastUpdated')}
          </p>
        </header>

        <div className="mx-auto max-w-3xl space-y-10">
          <section aria-labelledby="uso-sitio">
            <h2
              id="uso-sitio"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('siteUse.heading')}
            </h2>
            <div className="mt-3 space-y-3 text-gray-700 dark:text-gray-300 text-justify">
              <p>{t('siteUse.text1')}</p>
              <p>{t('siteUse.text2')}</p>
            </div>
          </section>

          <section aria-labelledby="propiedad">
            <h2
              id="propiedad"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('contentOwnership.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              {t('contentOwnership.text')}
            </p>
          </section>

          <section aria-labelledby="uso-adecuado">
            <h2
              id="uso-adecuado"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('properUse.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              {t('properUse.text')}
            </p>
          </section>

          <section aria-labelledby="enlaces">
            <h2
              id="enlaces"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('externalLinks.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              {t('externalLinks.text')}
            </p>
          </section>

          <section aria-labelledby="contacto">
            <h2
              id="contacto"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('contact.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              {t('contact.intro')}
            </p>
            <div className="mt-3 space-y-4 text-gray-700 dark:text-gray-300">
              <p className="flex items-center gap-4">
                <RiMailLine size={20} /> {t('contact.emailLabel')}:
                <a
                  className="text-blue-600 underline dark:text-blue-400"
                  href={contactInfo.emailLink}
                >
                  {contactInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-4">
                <RiWhatsappLine size={20} /> {t('contact.phoneLabel')}:
                <a
                  className="text-blue-600 underline dark:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={contactInfo.whatsappLink}
                >
                  {contactInfo.phone}
                </a>
              </p>
              <p className="flex items-center gap-4">
                <SlLocationPin size={20} /> {t('contact.addressLabel')}:{' '}
                {contactInfo.address.country}, {contactInfo.address.city}
              </p>
            </div>
          </section>

          <section aria-labelledby="cambios">
            <h2
              id="cambios"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              {t('changes.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
              {t('changes.text')}
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
