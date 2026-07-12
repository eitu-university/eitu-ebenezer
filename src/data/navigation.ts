import { NavItem } from '@/types';
import { FiHome, FiMail, FiUsers, FiZap } from 'react-icons/fi';

export const navigationItems: NavItem[] = [
  {
    labelKey: 'home',
    href: '/',
    icon: FiHome,
  },
  {
    labelKey: 'aboutUs',
    href: '/sobre-nosotros',
    icon: FiUsers,
  },
  {
    labelKey: 'contact',
    href: '/contacto',
    icon: FiMail,
  },
  {
    labelKey: 'postgraduates',
    href: '/postgrados',
    icon: FiZap,
  },
  {
    labelKey: 'programs',
    icon: FiZap,
    options: [
      {
        labelKey: 'studyPrograms',
        href: '/programas-de-estudio',
        icon: FiZap,
      },
      {
        labelKey: 'coursePrograms',
        href: '/programas-de-curso',
        icon: FiZap,
      },
    ],
  },
];
