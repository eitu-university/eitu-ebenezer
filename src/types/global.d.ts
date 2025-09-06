import { locales } from '@/i18n';

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages {
    Navigation: {
      home: string;
      about: string;
      contact: string;
      privacy: string;
      terms: string;
    };
    Homepage: {
      title: string;
      subtitle: string;
      description: string;
    };
    Banner: {
      title: string;
      subtitle: string;
      description: string;
      cta: string;
    };
    AboutUs: {
      title: string;
      subtitle: string;
      description: string;
      mission: string;
      missionText: string;
      vision: string;
      visionText: string;
    };
    Staff: {
      title: string;
      subtitle: string;
      description: string;
    };
    Ministries: {
      title: string;
      subtitle: string;
      description: string;
    };
    Testimonials: {
      title: string;
      subtitle: string;
      description: string;
    };
    Contact: {
      title: string;
      subtitle: string;
      description: string;
      form: {
        name: string;
        email: string;
        phone: string;
        message: string;
        submit: string;
        success: string;
        error: string;
      };
      info: {
        address: string;
        phone: string;
        email: string;
        hours: string;
      };
    };
    Footer: {
      description: string;
      quickLinks: string;
      contactInfo: string;
      followUs: string;
      rights: string;
    };
    Common: {
      readMore: string;
      learnMore: string;
      getInTouch: string;
      joinUs: string;
      prayer: string;
      worship: string;
      fellowship: string;
      service: string;
    };
    SEO: {
      title: string;
      description: string;
      keywords: string;
    };
  }
}

export {};