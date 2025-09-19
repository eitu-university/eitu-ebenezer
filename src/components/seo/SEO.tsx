import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = 'EituEbenezer - Organización Cristiana Evangélica Pentecostal',
  description = 'Organización cristiana evangélica pentecostal internacional dedicada a compartir el amor de Cristo y transformar vidas a través del evangelio.',
  keywords = 'cristiano, evangélico, pentecostal, iglesia, fe, evangelio, oración, adoración',
  image = '/opengraph-image.png',
  url = 'https://eituebenezer.com',
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Abel Aspiazu" />
      <meta name="theme-color" content="#1e40af" />
    </Head>
  );
}
