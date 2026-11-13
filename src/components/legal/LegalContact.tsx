import { getLocale } from 'next-intl/server';
import { RiWhatsappLine, RiMailLine } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';
import { contactInfo } from '@/data';
import type { Locale } from '@/i18n/routing';

type Props = {
  emailLabel: string;
  phoneLabel: string;
  addressLabel: string;
};

const linkClasses = 'text-terracotta underline hover:text-terracotta/80';

export default async function LegalContact({
  emailLabel,
  phoneLabel,
  addressLabel,
}: Props) {
  const locale = (await getLocale()) as Locale;
  const { street, city, country } = contactInfo.address;

  return (
    <div className="mt-3 space-y-4 text-charcoal dark:text-[#a1a1aa]">
      <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <RiMailLine size={20} aria-hidden="true" /> {emailLabel}:
        <a className={linkClasses} href={contactInfo.emailLink}>
          {contactInfo.email}
        </a>
      </p>
      <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <RiWhatsappLine size={20} aria-hidden="true" /> {phoneLabel}:
        <a
          className={linkClasses}
          target="_blank"
          rel="noopener noreferrer"
          href={contactInfo.whatsappLink}
        >
          {contactInfo.phone}
        </a>
      </p>
      <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <SlLocationPin size={20} aria-hidden="true" /> {addressLabel}:
        <span>
          {street}, {city}, {country[locale]}
        </span>
      </p>
    </div>
  );
}
