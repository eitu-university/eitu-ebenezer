import { FiHeart, FiUsers, FiGlobe, FiBookOpen } from 'react-icons/fi';

export const values = [
  { key: 'love', icon: FiHeart },
  { key: 'community', icon: FiUsers },
  { key: 'globalMission', icon: FiGlobe },
  { key: 'teaching', icon: FiBookOpen },
] as const satisfies {
  key: keyof IntlMessages['AboutUs']['values'];
  icon: React.ComponentType;
}[];
