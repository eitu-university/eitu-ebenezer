import { getTranslations } from 'next-intl/server';
import { FiDownload, FiExternalLink, FiFileText } from 'react-icons/fi';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

// Static asset served from /public. Plain <a> tags are used on purpose:
// next-intl's <Link> would prefix the locale (/en/pdf/...) and break the URL.
const DOCUMENT_URL = '/pdf/capellania.pdf';
const DOWNLOAD_FILENAME = 'Capellania-EITU-Ebenezer.pdf';
const DOCUMENT_SIZE = '219 KB';

export default async function ChaplaincyDocument() {
  const t = await getTranslations('Ministries.document');

  return (
    <article
      aria-labelledby="chaplaincy-document-title"
      className="mx-auto mt-16 flex max-w-4xl flex-col items-center gap-6 rounded-card border border-taupe bg-parchment p-6 shadow-glow dark:border-[#3f3f46] dark:bg-[#27272a] sm:flex-row sm:items-center sm:gap-8 sm:p-8"
    >
      <div
        aria-hidden="true"
        className="flex h-24 w-20 shrink-0 flex-col items-center justify-center gap-1 rounded-lg border border-terracotta bg-terracotta/10"
      >
        <FiFileText className="h-8 w-8 text-terracotta" />
        <span className="text-xs font-semibold uppercase tracking-wider text-terracotta">
          PDF
        </span>
      </div>

      <div className="flex-1 text-center sm:text-left">
        <h3
          id="chaplaincy-document-title"
          className="font-display mb-2 text-2xl font-normal text-ink dark:text-paper"
        >
          {t('title')}
        </h3>
        <p className="mb-2 leading-relaxed text-graphite dark:text-[#a1a1aa]">
          {t('description')}
        </p>
        <p className="mb-5 text-sm text-graphite/80 dark:text-[#a1a1aa]/80">
          PDF · {DOCUMENT_SIZE}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={DOCUMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('viewLabel')}
            className={cn(buttonVariants({ variant: 'primary', size: 'md' }), 'w-full sm:w-auto')}
          >
            <FiExternalLink aria-hidden="true" className="h-4 w-4" />
            {t('view')}
          </a>
          <a
            href={DOCUMENT_URL}
            download={DOWNLOAD_FILENAME}
            type="application/pdf"
            aria-label={t('downloadLabel', { size: DOCUMENT_SIZE })}
            className={cn(buttonVariants({ variant: 'outline', size: 'md' }), 'w-full sm:w-auto')}
          >
            <FiDownload aria-hidden="true" className="h-4 w-4" />
            {t('download')}
          </a>
        </div>
      </div>
    </article>
  );
}
