'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { FiChevronDown } from 'react-icons/fi';
import { DegreeYear } from '@/types';

type YearItem = DegreeYear & {
  title: string;
  focus: string;
};

type Props = {
  years: YearItem[];
  defaultOpenKey?: string;
  creditsLabel: string;
  creditsPendingLabel: string;
  pendingMessage: string;
};

export const DegreeCurriculumAccordion = ({
  years,
  defaultOpenKey,
  creditsLabel,
  creditsPendingLabel,
  pendingMessage,
}: Props) => {
  const locale = useLocale() as 'es' | 'en';
  const [openYear, setOpenYear] = useState<string | null>(
    defaultOpenKey ?? years[0]?.key ?? null
  );

  return (
    <div className="space-y-4">
      {years.map((year) => {
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
            className="overflow-hidden rounded-card border border-taupe bg-paper shadow-glow dark:border-[#3f3f46] dark:bg-[#27272a]"
          >
            <button
              type="button"
              onClick={() => setOpenYear(isOpen ? null : year.key)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
            >
              <div>
                <h3 className="font-display text-xl font-normal text-ink dark:text-paper">
                  {year.title}
                </h3>
                <p className="text-sm text-graphite dark:text-[#a1a1aa]">
                  {year.focus}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                {year.courses.length > 0 && (
                  <span
                    className={
                      allCreditsKnown
                        ? 'rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold text-terracotta'
                        : 'rounded-full bg-parchment px-3 py-1 text-xs font-semibold text-graphite dark:bg-[#18181b] dark:text-[#a1a1aa]'
                    }
                  >
                    {allCreditsKnown
                      ? `${totalCredits} ${creditsLabel}`
                      : creditsPendingLabel}
                  </span>
                )}
                <FiChevronDown
                  className={`h-5 w-5 text-terracotta transition-transform duration-200 ${
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
                  <ul className="divide-y divide-taupe border-t border-taupe dark:divide-[#3f3f46] dark:border-[#3f3f46]">
                    {year.courses.map((course) => (
                      <li key={course.code} className="px-6 py-3 text-sm">
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-medium text-ink dark:text-paper">
                            <span className="mr-2 font-mono text-xs text-graphite dark:text-[#a1a1aa]">
                              {course.code}
                            </span>
                            {course.name[locale]}
                          </span>
                          <span className="shrink-0 font-semibold text-graphite dark:text-[#a1a1aa]">
                            {course.credits !== null
                              ? `${course.credits} ${creditsLabel}`
                              : creditsPendingLabel}
                          </span>
                        </div>
                        <p className="mt-1 text-graphite dark:text-[#a1a1aa]">
                          {course.description[locale]}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="border-t border-taupe px-6 py-4 text-sm text-graphite dark:border-[#3f3f46] dark:text-[#a1a1aa]">
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
