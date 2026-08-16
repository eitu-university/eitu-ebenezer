'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { FiChevronDown } from 'react-icons/fi';
import { degreeCurriculum } from '@/data/degreeCurriculum';
import { DegreeYear } from '@/types';

type YearLabel = { title: string; focus: string };

type Props = {
  yearLabels: Record<DegreeYear['key'], YearLabel>;
  creditsLabel: string;
  creditsPendingLabel: string;
  pendingMessage: string;
};

export const DegreeCurriculumAccordion = ({
  yearLabels,
  creditsLabel,
  creditsPendingLabel,
  pendingMessage,
}: Props) => {
  const locale = useLocale() as 'es' | 'en';
  const [openYear, setOpenYear] = useState<DegreeYear['key'] | null>('year1');

  return (
    <div className="space-y-4">
      {degreeCurriculum.map((year) => {
        const label = yearLabels[year.key];
        const allCreditsKnown =
          year.courses.length > 0 &&
          year.courses.every((course) => course.credits !== null);
        const totalCredits = allCreditsKnown
          ? year.courses.reduce((sum, course) => sum + (course.credits ?? 0), 0)
          : null;
        const isOpen = openYear === year.key;

        return (
          <div
            key={year.key}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <button
              type="button"
              onClick={() => setOpenYear(isOpen ? null : year.key)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {label.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {label.focus}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                {year.courses.length > 0 && (
                  <span
                    className={
                      allCreditsKnown
                        ? 'rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                        : 'rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                    }
                  >
                    {allCreditsKnown
                      ? `${totalCredits} ${creditsLabel}`
                      : creditsPendingLabel}
                  </span>
                )}
                <FiChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 dark:text-gray-400 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                {year.courses.length > 0 ? (
                  <ul className="divide-y divide-gray-100 border-t border-gray-100 dark:divide-gray-700 dark:border-gray-700">
                    {year.courses.map((course) => (
                      <li key={course.code} className="px-6 py-3 text-sm">
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-medium text-gray-800 dark:text-gray-100">
                            <span className="mr-2 font-mono text-xs text-gray-400 dark:text-gray-500">
                              {course.code}
                            </span>
                            {course.name[locale]}
                          </span>
                          <span className="shrink-0 font-semibold text-gray-500 dark:text-gray-400">
                            {course.credits !== null
                              ? `${course.credits} ${creditsLabel}`
                              : creditsPendingLabel}
                          </span>
                        </div>
                        <p className="mt-1 text-gray-500 dark:text-gray-400">
                          {course.description[locale]}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="border-t border-gray-100 px-6 py-4 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
                    {pendingMessage}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
