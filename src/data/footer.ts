import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from 'react-icons/fi';

export const quickLinks = [
  {
    labelKey: 'home',
    href: '/',
  },
  {
    labelKey: 'aboutUs',
    href: '/sobre-nosotros',
  },
  {
    labelKey: 'contact',
    href: '/contacto',
  },
  {
    labelKey: 'ministries',
    href: '/ministerios',
  },
  {
    labelKey: 'events',
    href: '/eventos',
  },
  {
    labelKey: 'nations',
    href: '/naciones',
  },
] as const satisfies { labelKey: keyof IntlMessages['Navigation']; href: string }[];

export const socialMedia = [
  {
    icon: FiFacebook,
    ariaLabel: 'Facebook',
  },
  {
    icon: FiInstagram,
    ariaLabel: 'Instagram',
  },
  {
    icon: FiYoutube,
    ariaLabel: 'Youtube',
  },
];