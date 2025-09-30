import SEO from '@/components/seo/SEO';
import Header from '@/components/header/Header';
import Banner from '@/components/banner/Banner';
import AboutUs from '@/components/sections/AboutUs';
import Staff from '@/components/sections/Staff/Staff';
import Ministries from '@/components/sections/Ministries/Ministries';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact/Contact';
// import Footer from '@/components/footer/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from 'sonner';
import Nations from '@/components/sections/Nations/Nations';
import { Programs } from '@/components/sections/Programs/Programs';

export default function Home() {
  return (
    <>
      <SEO />
      <Toaster position="top-center" />
      
      <Header />
      <main className="">
        <Banner />
        <Nations />
        <Programs />
        <AboutUs />
        <Staff />
        <Ministries />
        <Testimonials />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}
