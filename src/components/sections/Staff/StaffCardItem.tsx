import { getTranslations } from 'next-intl/server';
import { StaffMember } from '@/types';
import Image from 'next/image';
import { FiMail, FiLinkedin } from 'react-icons/fi';

type Prop = {
  member: StaffMember;
};

const iconButton =
  'flex h-10 w-10 items-center justify-center rounded-full bg-parchment text-charcoal transition-colors duration-200 hover:bg-terracotta/10 hover:text-terracotta dark:bg-[#18181b] dark:text-[#a1a1aa] dark:hover:text-terracotta-light';

const StaffCardItem = async ({ member }: Prop) => {
  const t = await getTranslations('Staff.members');
  const position = t(`${member.id}.position`);
  const description = t(`${member.id}.description`);

  return (
    <article
      data-staff-tilt
      className="group relative flex h-full flex-col overflow-hidden rounded-card border border-taupe bg-paper shadow-glow transition-shadow duration-300 [transform-style:preserve-3d] will-change-transform hover:shadow-float dark:border-[#3f3f46] dark:bg-[#27272a]"
    >
      {/* Photo */}
      <div data-staff-media className="relative h-72 w-full overflow-hidden bg-[#27272a]">
        <div data-staff-img className="absolute -inset-3">
          <Image
            src={member.image || '/images/avatar.webp'}
            alt={member.name}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-terracotta transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 data-staff-reveal className="mb-1 text-xl font-semibold text-ink dark:text-paper">
          {member.name}
        </h3>
        <p
          data-staff-reveal
          className="mb-3 text-sm font-semibold uppercase tracking-wide text-terracotta"
        >
          {position}
        </p>
        <p
          data-staff-reveal
          className="mb-4 flex-1 text-justify text-sm leading-relaxed text-graphite dark:text-[#a1a1aa]"
        >
          {description}
        </p>

        <div
          data-staff-reveal
          className="flex space-x-3 border-t border-taupe pt-4 dark:border-[#3f3f46]"
        >
          <button aria-label="mail button" className={iconButton}>
            <FiMail size={16} />
          </button>
          <button aria-label="linkedin button" className={iconButton}>
            <FiLinkedin size={16} />
          </button>
        </div>
      </div>

      {/* Cursor-following light glare (driven by GSAP via --mx / --my) */}
      <div
        data-staff-glare
        aria-hidden
        className="pointer-events-none invisible absolute inset-0 z-10 opacity-0 mix-blend-soft-light [background:radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.55),transparent_55%)]"
      />
    </article>
  );
};

export default StaffCardItem;
