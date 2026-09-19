export interface StaffMember {
  id: keyof IntlMessages['Staff']['members'];
  name: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavItem {
  labelKey: keyof IntlMessages['Navigation'];
  href?: string | null;
  options?: NavItem[] | undefined;
  icon: React.ComponentType;
}

export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
}

export interface NationsData {
  code: string;
  name: string;
  flag: string;
  flagSvg: string;
  img: string;
  imgThumb: string;
  slug: string;
  lang: 'es' | 'en';
  dialCode: string;
}

export interface ProgramItem {
  key: keyof IntlMessages['Programs']['items'];
  imgSrc: string;
  link: string;
  tagKeys?: (keyof IntlMessages['Programs']['tags'])[];
}

export interface DegreeCourse {
  code: string;
  credits: number | null;
  name: { es: string; en: string };
  description: { es: string; en: string };
}

export interface DegreeYear {
  key: string;
  courses: DegreeCourse[];
}
