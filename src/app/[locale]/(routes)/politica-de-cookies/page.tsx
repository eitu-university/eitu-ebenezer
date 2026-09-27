import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { contactInfo } from '@/data';

type Props = {
  params: Promise<{ locale: string }>;
};

type CookieRow = IntlMessages['CookiePolicy']['used']['rows'][number];
type Browser = IntlMessages['CookiePolicy']['manage']['browsers'][number];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SEO' });

  return {
    title: t('cookies.title'),
    description: t('cookies.description'),
    alternates: {
      canonical:
        locale === 'es'
          ? '/politica-de-cookies'
          : `/${locale}/politica-de-cookies`,
    },
  };
}

export default async function CookiePolicyPage() {
  const t = await getTranslations('CookiePolicy');
  const rows = t.raw('used.rows') as CookieRow[];
  const thirdPartyItems = t.raw('thirdParty.items') as string[];
  const browsers = t.raw('manage.browsers') as Browser[];

  const columns = [
    t('used.columns.name'),
    t('used.columns.provider'),
    t('used.columns.purpose'),
    t('used.columns.type'),
    t('used.columns.duration'),
  ];

  return (
    <main className="min-h-screen bg-parchment dark:bg-[#18181b]">
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="font-display text-3xl font-normal text-ink dark:text-paper sm:text-4xl lg:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-3 text-sm text-graphite dark:text-[#a1a1aa]">
            {t('subtitle')}
          </p>
          <p className="mt-1 text-xs text-graphite/80 dark:text-[#a1a1aa]/80">
            {t('lastUpdated')}
          </p>
        </header>

        <div className="mx-auto max-w-3xl space-y-10">
          <section aria-labelledby="que-son">
            <h2
              id="que-son"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('whatAre.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              {t('whatAre.text')}
            </p>
          </section>

          <section aria-labelledby="cookies-utilizadas">
            <h2
              id="cookies-utilizadas"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('used.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              {t('used.intro')}
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm text-charcoal dark:text-[#a1a1aa]">
                <thead>
                  <tr className="border-b border-graphite/30 text-ink dark:border-[#3f3f46] dark:text-paper">
                    {columns.map((column) => (
                      <th key={column} scope="col" className="py-2 pr-4 font-semibold">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-graphite/15 align-top dark:border-[#3f3f46]/60"
                    >
                      <td className="py-3 pr-4 font-mono text-xs">{row.name}</td>
                      <td className="py-3 pr-4">{row.provider}</td>
                      <td className="py-3 pr-4">{row.purpose}</td>
                      <td className="py-3 pr-4">{row.type}</td>
                      <td className="py-3 pr-4">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="terceros">
            <h2
              id="terceros"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('thirdParty.heading')}
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-charcoal dark:text-[#a1a1aa] text-justify">
              {thirdPartyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="consentimiento">
            <h2
              id="consentimiento"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('consent.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              {t('consent.text')}
            </p>
          </section>

          <section aria-labelledby="gestionar">
            <h2
              id="gestionar"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('manage.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              {t('manage.intro')}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-charcoal dark:text-[#a1a1aa]">
              {browsers.map((browser) => (
                <li key={browser.name}>
                  <a
                    className="text-terracotta underline hover:text-terracotta/80"
                    href={browser.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {browser.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="dnt">
            <h2
              id="dnt"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('dnt.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              {t('dnt.text')}
            </p>
          </section>

          <section aria-labelledby="mas-informacion">
            <h2
              id="mas-informacion"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('moreInfo.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              {t('moreInfo.text')}{' '}
              <Link
                className="text-terracotta underline hover:text-terracotta/80"
                href="/politica-de-privacidad"
              >
                {t('moreInfo.linkLabel')}
              </Link>
              .
            </p>
          </section>

          <section aria-labelledby="cambios">
            <h2
              id="cambios"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('changes.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              {t('changes.text')}
            </p>
          </section>

          <section aria-labelledby="contacto">
            <h2
              id="contacto"
              className="font-display text-xl font-normal text-ink dark:text-paper"
            >
              {t('contact.heading')}
            </h2>
            <p className="mt-3 leading-relaxed text-charcoal dark:text-[#a1a1aa] text-justify">
              {t('contact.text')}{' '}
              <a
                className="text-terracotta underline hover:text-terracotta/80"
                href={contactInfo.emailLink}
              >
                {contactInfo.email}
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
