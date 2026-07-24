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
    { key: 'youth', icon: FiUsers, color: 'from-purple-500 to-purple-600' },
    { key: 'worship', icon: FiMusic, color: 'from-pink-500 to-pink-600' },
    { key: 'women', icon: FiHeart, color: 'from-red-500 to-red-600' },
    {
      key: 'bibleSchool',
      icon: FiBookOpen,
      color: 'from-green-500 to-green-600',
    },
    { key: 'missions', icon: FiGlobe, color: 'from-blue-500 to-blue-600' },
    { key: 'family', icon: FiHome, color: 'from-orange-500 to-orange-600' },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-gray-50 py-28 dark:bg-gray-800">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-purple-100 opacity-50 blur-3xl dark:bg-purple-900/10" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-orange-100 opacity-50 blur-3xl dark:bg-orange-900/10" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-blue-600" />
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            {t('description')}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => (
            <div
              key={ministry.key}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            >
              <div
                className={`relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-r ${ministry.color}`}
              >
                <ministry.icon className="absolute -right-3 -top-3 h-24 w-24 rotate-12 text-white/10" />
                <ministry.icon className="h-12 w-12 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">
                  {t(`items.${ministry.key}.title`)}
                </h3>
                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                  {t(`items.${ministry.key}.description`)}
                </p>

                <button className="inline-flex items-center gap-1.5 font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
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

{
  /*const CTA = () => (
  <div className="mt-16 text-center">
    <div style={{ position: 'relative', width: '100%', height: '50vh' }}>
      <Image
        src="/images/banner/join-us.webp"
        alt={''}
        fill={true}
        className="h-52 w-80 object-cover shadow-lg"
      />
      
      <div
        id="content"
        className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-4 text-center text-white"
      >
        <div className="rounded-xl bg-black/20 p-4 backdrop-blur-sm md:px-28">
          <h3 className="mb-4 text-4xl font-bold text-gray-100 md:text-5xl">
            ¿Te gustaría servir en alguna capellanía?
          </h3>
          <p className="mx-auto mb-6 max-w-2xl">
            Dios ha dado dones únicos a cada uno de nosotros. Descubre cómo
            puedes usar tus talentos para glorificar a Dios y bendecir a otros.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn btn-1 hover-filled-slide-right"
          >
            <span>Únete a una capellanía</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);*/
}
