import { staffMembers } from '@/data/staff';
import StaffCardItem from './StaffCardItem';

const StaffCardList = () => {
  return (
    <>
      {staffMembers.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
