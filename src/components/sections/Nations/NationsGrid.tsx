import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { nations } from '@/data/nations';

const NationsGrid = async () => {
  const t = await getTranslations('Nations');

  return (
    <section className="bg-parchment py-28 dark:bg-[#18181b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h1 className="font-display mb-4 text-3xl font-normal text-ink dark:text-paper sm:text-4xl lg:text-5xl">
            {t('title')}
          </h1>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-terracotta" />
          <p className="text-lg leading-relaxed text-graphite dark:text-[#a1a1aa] sm:text-xl">
            {t('description')}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nations.map((nation) => (
            <Link
              key={nation.code}
              href={nation.slug}
              className="group overflow-hidden rounded-card border border-taupe bg-paper shadow-glow transition-all duration-300 hover:-translate-y-2 hover:shadow-float dark:border-[#3f3f46] dark:bg-[#27272a]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={nation.imgThumb}
                  alt={nation.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <Image
                  src={nation.flagSvg}
                  alt={`${nation.name} flag`}
                  width={40}
                  height={40}
                  className="absolute right-3 top-3 h-10 w-10 rounded-full ring-2 ring-white"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                  <h3 className="text-lg font-bold text-white">
                    {nation.name}
                  </h3>
                </div>
              </div>
              <p className="line-clamp-2 p-4 text-sm text-graphite dark:text-[#a1a1aa]">
                {t(`descriptions.${nation.code}`)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NationsGrid;
