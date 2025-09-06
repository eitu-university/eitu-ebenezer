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
  href: string;
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
  flagSvg: string
  img: string;
  imgThumb: string;
  description: string;
  slug: string;
}
