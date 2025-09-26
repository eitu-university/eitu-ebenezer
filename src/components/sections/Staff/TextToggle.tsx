'use client';
import { useState } from 'react';

type Props = {
  text: string;
  maxLength: number;
};

const TextToggle = ({ text, maxLength }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = text.length > maxLength;

  const toggleText = () => setIsExpanded(!isExpanded);

  const displayText =
    isExpanded || !isLongText ? text : text.slice(0, maxLength) + '...';

  return (
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
  );
};

export default TextToggle;
