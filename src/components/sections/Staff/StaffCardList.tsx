import { staffMembers } from '@/data/staff';
import StaffCardItem from './StaffCardItem';

const StaffCardList = () => {
  return (
    <>
      {staffMembers.length > 0 ? (
        <div className="mx-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {staffMembers.map((member) => (
            <StaffCardItem key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <p className="flex justify-center text-lg font-bold">
          Sin miembros disponibles
        </p>
      )}
    </>
  );
};

export default StaffCardList;
