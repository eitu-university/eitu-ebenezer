import { nations } from '@/data/nations';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import NationRegistrationForm from '@/components/sections/Nations/NationRegistrationForm';

interface NationsPageProps {
  params: Promise<{ locale: string; country: string }>;
}

export async function generateMetadata({
  params,
}: NationsPageProps): Promise<Metadata> {
  const { country } = await params;
  const nation = nations.find((n) => n.slug.split('/').pop() === country);
  const lang = nation?.lang || 'es';
  const t = await getTranslations('Nations');

  const ogUrl = nation ? `/og/nations/${country}.png` : '/opengraph-image.png';
  const title = nation
    ? lang === 'en'
      ? `EITU Ebenezer | ${nation.name}`
      : `UITE Ebenezer | ${nation.name}`
    : t('notFoundTitle');

  const description =
    nation && lang === 'en'
      ? 'A theological community: here to educate and serve you.'
      : nation
        ? 'Comunidad teológica con el ideal de educarte y servirte.'
        : t('notFoundDescription');

  return {
    title,
    description,
    openGraph: {
      images: [{ url: ogUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      images: [ogUrl],
    },
  };
}

export default async function NationsPage({ params }: NationsPageProps) {
  const { country } = await params;
  const nation = nations.find((n) => n.slug.split('/').pop() === country);

  if (!nation) return notFound();

  const t = await getTranslations('Nations');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <Image
          src={nation.img}
          alt={nation.name}
          fill={true}
          className="h-52 w-80 object-cover shadow-lg"
        />
        {/* Contenido centrado sobre la imagen */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-4 text-center text-white">
          <img
            src={nation.flagSvg}
            alt={`${nation.name} flag`}
            className="h-28 w-28 rounded-full shadow-xl"
          />
          <h1 className="text-4xl font-bold">{nation.name}</h1>
          <p className="mt-2 text-lg">
            {t(`descriptions.${nation.code}`)}
          </p>
        </div>
      </div>

      <section className="w-full bg-gray-50 px-4 py-16 dark:bg-gray-800 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <NationRegistrationForm nation={nation} />
        </div>
      </section>
    </div>
  );
}
