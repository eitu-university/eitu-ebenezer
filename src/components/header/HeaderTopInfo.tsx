import { contactInfo } from '@/data';
import { RiWhatsappLine, RiMailLine } from 'react-icons/ri';
import { cn } from '@/lib/utils';

export const HeaderTopInfo = ({ isScrolled }: { isScrolled: boolean }) => (
  <div
    className={cn(
      'border-b py-1.5 text-xs',
      isScrolled ? 'border-taupe/40 dark:border-[#3f3f46]/40' : 'border-parchment/10'
    )}
  >
    <div className="container mx-auto flex items-center justify-end px-4">
      <div
        className={cn(
          'flex items-center space-x-4',
          isScrolled ? 'text-charcoal dark:text-[#a1a1aa]' : 'text-parchment/80'
        )}
      >
        <a
          href={contactInfo.emailLink}
          className="navLink flex items-center transition-colors hover:text-terracotta-light"
        >
          <RiMailLine className="mr-1.5 h-3 w-3" />
          {contactInfo.email}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={contactInfo.whatsappLink}
          className="navLink flex items-center transition-colors hover:text-terracotta-light"
        >
          <RiWhatsappLine className="mr-1.5 h-3 w-3" />
          {contactInfo.phone}
        </a>
      </div>
    </div>
  </div>
);
