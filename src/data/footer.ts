import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { RiTiktokLine } from 'react-icons/ri';

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
  {
    labelKey: 'statementOfFaith',
    href: '/declaracion-de-fe',
  },
] as const satisfies { labelKey: keyof IntlMessages['Navigation']; href: string }[];

export const socialMedia = [
  {
    icon: FiInstagram,
    ariaLabel: 'Instagram',
    href: 'https://www.instagram.com/ecebenezer',
  },
  {
    icon: RiTiktokLine,
    ariaLabel: 'TikTok',
    href: 'https://www.tiktok.com/@ebenezer.uite.ec',
  },
];

// Dos páginas de Facebook, una por programa
export const facebookPages = [
  {
    labelKey: 'facebookAssociate',
    href: 'https://www.facebook.com/share/1WisVSb23y/',
  },
  {
    labelKey: 'facebookBachelor',
    href: 'https://www.facebook.com/share/1HatbibT3w/',
  },
] as const satisfies { labelKey: keyof IntlMessages['Footer']; href: string }[];

export const facebookIcon = FiFacebook;