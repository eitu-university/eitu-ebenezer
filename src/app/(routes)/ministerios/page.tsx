import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import AboutUs from '@/components/sections/AboutUs';
import Staff from '@/components/sections/Staff';

export const metadata: Metadata = {
  ...generateMetadata(
    'Ministerios',
    'Conoce nuestros ministerios.'
  ),
  alternates: { canonical: 'https://tudominio.com/ministerios' }
};

const page = () => {
  return (
    <Staff />
  )
}

export default page