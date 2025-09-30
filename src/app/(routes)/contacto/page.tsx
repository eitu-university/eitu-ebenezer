import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import Contact from '@/components/sections/Contact/Contact';

export const metadata: Metadata = {
  ...generateMetadata(
    'Contacto',
    'Cuéntanos sobre ti y te responderemos a la brevedad.'
  ),
  alternates: { canonical: 'https://eituebenezer.com/contacto' }
};

const Page = () => {
  return (
    <Contact />
  )
}

export default Page