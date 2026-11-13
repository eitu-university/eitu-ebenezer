import { getTranslations } from 'next-intl/server';
import { staffMembers } from '@/data/staff';
import StaffCardItem from './StaffCardItem';

const StaffCardList = async () => {
  const t = await getTranslations('Staff');

  return (
    <>
      {staffMembers.length > 0 ? (
        // 1 col → 2 cols → 3 cols. justify-center keeps incomplete rows centered
        // (5 members = 3 + 2 on desktop instead of an orphaned 4 + 1).
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 [perspective:1200px]">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              data-staff-card
              className="w-full max-w-sm sm:w-[calc(50%-1rem)] sm:max-w-none lg:w-[calc(33.333%-1.334rem)]"
            >
              <StaffCardItem member={member} />
            </div>
          ))}
        </div>
      ) : (
        <p className="flex justify-center text-lg font-bold">{t('empty')}</p>
      )}
    </>
  );
};

export default StaffCardList;
