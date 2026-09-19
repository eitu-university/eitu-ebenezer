import { getTranslations } from 'next-intl/server';
import { staffMembers } from '@/data/staff';
import StaffCardItem from './StaffCardItem';

const StaffCardList = async () => {
  const t = await getTranslations('Staff');

  return (
    <>
      {staffMembers.length > 0 ? (
        <div className="mx-4 flex flex-wrap justify-center gap-8">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.334rem)] xl:w-[calc(25%-1.5rem)]"
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
