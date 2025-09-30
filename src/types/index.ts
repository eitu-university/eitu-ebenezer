export interface StaffMember {
  id: string;
  name: string;
  position: string;
  image: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavItem {
  label: string;
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
  description: string;
  slug: string;
  lang: 'es' | 'en';
}

export interface ProgramItem {
  title: string;
  description: string;
  imgSrc: string;
  alt: string;
  link: string;
  tags?: string[];
}
