import { getTranslations } from 'next-intl/server';
import Cta from '../../Cta';
import StaffCardList from './StaffCardList';

export default async function Staff() {
  const t = await getTranslations('Staff');

  return (
    <section className="relative overflow-hidden bg-parchment py-28 dark:bg-[#18181b]">
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-terracotta/10 opacity-70 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-28">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="font-display mb-4 text-3xl font-normal text-ink dark:text-paper sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-terracotta" />
          <p className="text-lg leading-relaxed text-graphite dark:text-[#a1a1aa] sm:text-xl">
            {t('description')}
          </p>
        </div>

        <StaffCardList />
      </div>
      {/* Call to Action */}
      <Cta
        imgUrl="/images/banner/contact-us.webp"
        buttonHref="/contacto"
        buttonText={t('cta.button')}
        title={t('cta.title')}
        description={t('cta.description')}
      />
    </section>
  );
}
