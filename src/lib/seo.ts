import { Metadata } from 'next';

// Configuración SEO base
export const siteConfig = {
  name: 'Ebenezer',
  description: 'Proyecto Next.js optimizado para SEO',
  url: 'https://tudominio.com',
  ogImage: 'https://tudominio.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/tu-usuario',
    github: 'https://github.com/tu-usuario',
  },
};

// Metadata por defecto
export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'TypeScript', 'SEO'],
  authors: [{ name: 'Abel Aspiazu Torres' }],
  creator: 'Abel Aspiazu Torres',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@tu-usuario',
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
  verification: {
    google: 'my-verification-code',
  },
};

// Helper para generar metadata dinámica
export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  noIndex = false
): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    openGraph: {
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      images: image ? [{ url: image }] : undefined,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
} 