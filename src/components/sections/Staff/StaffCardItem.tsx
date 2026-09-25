import { getTranslations } from 'next-intl/server';
import { StaffMember } from '@/types';
import Image from 'next/image';
import { FiMail, FiLinkedin } from 'react-icons/fi';
import TextToggle from './TextToggle';

type Prop = {
  member: StaffMember;
};

const maxLenth = 120;

const StaffCardItem = async ({ member }: Prop) => {
  const t = await getTranslations('Staff.members');
  const position = t(`${member.id}.position`);
  const description = t(`${member.id}.description`);

  return (
    <div className="group overflow-hidden rounded-card border border-taupe bg-paper shadow-glow transition-all duration-300 hover:-translate-y-1 hover:shadow-float dark:border-[#3f3f46] dark:bg-[#27272a]">
      <div className="relative h-72 w-full overflow-hidden bg-[#27272a]">
        <Image
          src={member.image || '/images/avatar.webp'}
          alt={member.name}
          fill={true}
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <h3 className="mb-1 text-xl font-semibold text-ink dark:text-paper">
          {member.name}
        </h3>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-terracotta">
          {position}
        </p>
        <TextToggle text={description} maxLength={maxLenth} />

        <div className="flex space-x-3 border-t border-taupe pt-4 dark:border-[#3f3f46]">
          <button
            aria-label="mail button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-parchment text-charcoal transition-colors duration-200 hover:bg-terracotta/10 hover:text-terracotta dark:bg-[#18181b] dark:text-[#a1a1aa] dark:hover:text-terracotta-light"
          >
            <FiMail size={16} />
          </button>
          <button
            aria-label="linkedin button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-parchment text-charcoal transition-colors duration-200 hover:bg-terracotta/10 hover:text-terracotta dark:bg-[#18181b] dark:text-[#a1a1aa] dark:hover:text-terracotta-light"
          >
            <FiLinkedin size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffCardItem;
