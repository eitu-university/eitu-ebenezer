'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

type Props = {
  text: string;
  maxLength: number;
};

const TextToggle = ({ text, maxLength }: Props) => {
  const t = useTranslations('Common');
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = text.length > maxLength;

  const toggleText = () => setIsExpanded(!isExpanded);

  const displayText =
    isExpanded || !isLongText ? text : text.slice(0, maxLength) + '...';

  return (
    <p className="mb-4 text-justify text-sm leading-relaxed text-graphite dark:text-[#a1a1aa]">
      {displayText}
      {isLongText && (
        <button
          onClick={toggleText}
          className="ml-1 text-terracotta hover:underline"
        >
          {isExpanded ? t('readLess') : t('readMore')}
        </button>
      )}
    </p>
  );
};

export default TextToggle;
