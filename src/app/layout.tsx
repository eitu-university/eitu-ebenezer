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
  title: 'EituEbenezer | Ebenezer International Theological University',
  description: 'Comunidad Teológica con el ideal de educarte y servirte',
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
  metadataBase: new URL('https://eituebenezer.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EituEbenezer | Ebenezer International Theological University',
    description: 'Comunidad Teológica con el ideal de educarte y servirte',
    url: 'https://eituebenezer.com',
    siteName: 'EituEbenezer',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        alt: 'EituEbenezer | Comunidad Teológica con el ideal de educarte y servirte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'EituEbenezer | Ebenezer International Theological University',
    description: 'Comunidad Teológica con el ideal de educarte y servirte',
    images: ['/opengraph-image.png'],
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
        <link rel="canonical" href="https://eituebenezer.com" />
      </head>
      <body
        className={`${inter.variable} ${lato.variable} bg-white font-lato text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <div className="h-64 dark:bg-gray-800"></div>
        <Footer />
      </body>
    </html>
  );
}
