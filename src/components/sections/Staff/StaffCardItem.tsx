'use client';
import { StaffMember } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import { FiMail, FiLinkedin } from 'react-icons/fi';

type Prop = {
  member: StaffMember;
};

const maxLength = 120;

const StaffCardItem = ({ member }: Prop) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => setIsExpanded(!isExpanded);
  const description = member.description || '';

  const isLongText = description.length > maxLength;
  const displayText =
    isExpanded || !isLongText
      ? description
      : description.slice(0, maxLength) + '...';

  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800">
      <div className="relative overflow-hidden">
        <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
          {/* <span className="text-white text-6xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span> */}
          <div className="relative h-72 w-full">
            <Image
              src={member.image || '/images/avatar.webp'}
              alt={member.name}
              fill={true}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
          {member.name}
        </h3>
        <p className="mb-3 font-semibold text-blue-600 dark:text-blue-400">
          {member.position}
        </p>
        <p className="mb-4 text-justify text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {displayText}
          {isLongText && (
            <button
              onClick={toggleText}
              className="ml-1 text-blue-500 hover:underline"
            >
              {isExpanded ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </p>

        <div className="flex space-x-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors duration-200 hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-900 dark:hover:text-blue-400">
            <FiMail size={16} />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors duration-200 hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-900 dark:hover:text-blue-400">
            <FiLinkedin size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffCardItem;
