import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import Staff from '@/components/sections/Staff/Staff';

export const metadata: Metadata = {
  ...generateMetadata(
    'Ministerios',
    'Conoce nuestros ministerios.'
  ),
  alternates: { canonical: 'https://eituebenezer.com/ministerios' }
};

const page = () => {
  return (
    <Staff />
  )
}

export default page