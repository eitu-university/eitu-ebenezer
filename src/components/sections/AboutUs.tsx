import { getTranslations } from 'next-intl/server';
import { values } from '@/data/about-us';

export default async function AboutUs() {
  const t = await getTranslations('AboutUs');

  return (
    <section id="about" className="bg-gray-50 py-20 md:py-28 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            {t('description')}
          </p>
        </div>

        <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
              {t('historyTitle')}
            </h3>
            <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
              {t('historyText')}
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-blue-600 p-8 text-white ">
              <h4 className="mb-4 text-xl font-bold">{t('missionTitle')}</h4>
              <p className="leading-relaxed text-blue-100 text-justify">
                {t('missionText')}
              </p>
              <h4 className="mb-4 mt-6 text-xl font-bold">
                {t('visionTitle')}
              </h4>
              <p className="leading-relaxed text-blue-100 text-justify">
                {t('visionText')}
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.key} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {t(`values.${value.key}.title`)}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {t(`values.${value.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
