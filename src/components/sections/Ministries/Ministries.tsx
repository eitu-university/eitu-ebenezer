import { getTranslations } from 'next-intl/server';
import Cta from '@/components/Cta';
import {
  FiUsers,
  FiMusic,
  FiHeart,
  FiBookOpen,
  FiGlobe,
  FiHome,
  FiArrowRight,
} from 'react-icons/fi';

export default async function Ministries() {
  const t = await getTranslations('Ministries');
  const tCommon = await getTranslations('Common');

  const ministries = [
    { key: 'youth', icon: FiUsers },
    { key: 'worship', icon: FiMusic },
    { key: 'women', icon: FiHeart },
    { key: 'bibleSchool', icon: FiBookOpen },
    { key: 'missions', icon: FiGlobe },
    { key: 'family', icon: FiHome },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-paper py-28 dark:bg-[#18181b]">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-terracotta/10 opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-terracotta/10 opacity-50 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="font-display mb-4 text-3xl font-normal text-ink dark:text-paper sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-terracotta" />
          <p className="text-lg leading-relaxed text-graphite dark:text-[#a1a1aa] sm:text-xl">
            {t('description')}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => (
            <div
              key={ministry.key}
              className="group overflow-hidden rounded-card border border-taupe bg-parchment shadow-glow transition-all duration-300 hover:-translate-y-2 hover:shadow-float dark:border-[#3f3f46] dark:bg-[#27272a]"
            >
              <div className="flex h-32 items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-terracotta bg-terracotta/10 transition-transform duration-300 group-hover:scale-110">
                  <ministry.icon className="h-7 w-7 text-terracotta" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display mb-3 text-xl font-normal text-ink dark:text-paper">
                  {t(`items.${ministry.key}.title`)}
                </h3>
                <p className="mb-4 leading-relaxed text-graphite dark:text-[#a1a1aa]">
                  {t(`items.${ministry.key}.description`)}
                </p>

                <button className="inline-flex items-center gap-1.5 font-semibold text-terracotta transition-colors duration-200 hover:text-terracotta/80">
                  {tCommon('learnMore')}
                  <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Call to Action */}
      <Cta
        imgUrl="/images/banner/join-us.webp"
        buttonHref="/contacto"
        buttonText={t('cta.button')}
        title={t('cta.title')}
        description={t('cta.description')}
      />
    </section>
  );
}
