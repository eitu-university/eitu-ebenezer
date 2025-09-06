import type { Metadata } from 'next';
import { Inter, Lato } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Footer from '@/components/footer/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'Ebenezer - Organización Cristiana Evangélica Pentecostal',
  description:
    'Organización cristiana evangélica pentecostal internacional dedicada a compartir el amor de Cristo y transformar vidas a través del evangelio.',
  keywords:
    'cristiano, evangélico, pentecostal, iglesia, fe, evangelio, oración, adoración',
  authors: [{ name: 'Abel Aspiazu' }],
  creator: 'Abel Aspiazu',
  publisher: 'Abel Aspiazu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ebenezer.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ebenezer - Organización Cristiana Evangélica Pentecostal',
    description:
      'Organización cristiana evangélica pentecostal internacional dedicada a compartir el amor de Cristo y transformar vidas a través del evangelio.',
    url: 'https://ebenezer.org',
    siteName: 'Ebenezer',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ebenezer - Organización Cristiana Evangélica Pentecostal',
    description:
      'Organización cristiana evangélica pentecostal internacional dedicada a compartir el amor de Cristo y transformar vidas a través del evangelio.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect para optimización */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://tudominio.com" />
      </head>
      <body
        className={`${inter.variable} ${lato.variable} bg-white font-lato text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
