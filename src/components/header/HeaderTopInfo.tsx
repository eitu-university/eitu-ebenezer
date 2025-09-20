import { contactInfo } from '@/data';
import { RiWhatsappLine, RiMailLine } from 'react-icons/ri';

export const HeaderTopInfo = () => (
  <div className="transparent-color text-lr-text-light/80 border-b border-white/10 py-1.5 text-xs">
    <div className="container mx-auto flex items-center justify-end px-4">
      <div className="flex items-center space-x-4 text-white dark:text-gray-200">
        <a
          href={contactInfo.emailLink}
          className="hover:text-lr-beige navLink flex items-center transition-colors"
        >
          <RiMailLine className="mr-1.5 h-3 w-3" />
          {contactInfo.email}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={contactInfo.whatsappLink}
          className="hover:text-lr-beige navLink flex items-center transition-colors"
        >
          <RiWhatsappLine className="mr-1.5 h-3 w-3" />
          {contactInfo.phone}
        </a>
      </div>
    </div>
  </div>
);
