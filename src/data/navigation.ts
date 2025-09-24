import { NavItem } from '@/types';
import { FiHome, FiMail, FiUsers, FiZap } from 'react-icons/fi';

export const navigationItems: NavItem[] = [
  {
    label: 'Inicio',
    href: '/',
    icon: FiHome,
  },
  {
    label: 'Acerca de Nosotros',
    href: '/sobre-nosotros',
    icon: FiUsers,
  },
  {
    label: 'Contacto',
    href: '/contacto',
    icon: FiMail,
  },
  {
    label: 'Programas de estudio',
    href: '/programas-de-estudio',
    icon: FiZap,
  },
  {
    label: 'Programas de curso',
    href: '/programas-de-curso',
    icon: FiZap,
  },
  {
    label: 'Postgrados',
    href: '/postgrados',
    icon: FiZap,
  },
];
