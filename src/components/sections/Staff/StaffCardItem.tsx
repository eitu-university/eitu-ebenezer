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
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
      <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
        <Image
          src={member.image || '/images/avatar.webp'}
          alt={member.name}
          fill={true}
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-gray-100">
          {member.name}
        </h3>
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
          {position}
        </p>
        <TextToggle text={description} maxLength={maxLenth} />

        <div className="flex space-x-3 border-t border-gray-100 pt-4 dark:border-gray-700">
          <button
            aria-label="mail button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors duration-200 hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-900 dark:hover:text-blue-400"
          >
            <FiMail size={16} />
          </button>
          <button
            aria-label="linkedin button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors duration-200 hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-900 dark:hover:text-blue-400"
          >
            <FiLinkedin size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffCardItem;
