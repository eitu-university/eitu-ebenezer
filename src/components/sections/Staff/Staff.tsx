import { getTranslations } from 'next-intl/server';
import Cta from '../../Cta';
import StaffCardList from './StaffCardList';

export default async function Staff() {
  const t = await getTranslations('Staff');

  return (
    <section className="bg-white py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-28">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
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
