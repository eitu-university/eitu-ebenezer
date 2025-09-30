import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import AboutUs from '@/components/sections/AboutUs';

export const metadata: Metadata = {
  ...generateMetadata(
    'Sobre nosotros',
    'Conoce nuestro equipo, valores y método de trabajo para impulsar tu proyecto.'
  ),
  alternates: { canonical: 'https://eituebenezer.com/sobre-nosotros' }
};

const page = () => {
  return (
    <AboutUs />
  )
}

export default page