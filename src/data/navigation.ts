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
    labelKey: 'programs',
    icon: FiZap,
    options: [
      {
        labelKey: 'studyPrograms',
        icon: FiZap,
        options: [
          {
            labelKey: 'associates',
            href: '/programs/study-programs/associates',
            icon: FiZap,
          },
          {
            labelKey: 'degree',
            href: '/programs/study-programs/degree',
            icon: FiZap,
          },
          {
            labelKey: 'postgraduate',
            href: '/programs/study-programs/postgraduate',
            icon: FiZap,
          },
          {
            labelKey: 'diploma',
            href: '/programs/study-programs/diploma',
            icon: FiZap,
          },
        ],
      },
      {
        labelKey: 'coursePrograms',
        href: '/programs/course-programs',
        icon: FiZap,
      },
    ],
  },
];
