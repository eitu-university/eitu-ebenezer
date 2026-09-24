import { z } from 'zod';

export const ministryOptions = [
  'youth',
  'worship',
  'women',
  'bibleSchool',
  'missions',
  'family',
] as const;

export type MinistryOption = (typeof ministryOptions)[number];

export function getContactFormSchema(messages: {
  nameMin: string;
  nameMax: string;
  emailInvalid: string;
  emailMax: string;
  ministryRequired: string;
  messageMin: string;
  messageMax: string;
}) {
  return z.object({
    name: z.string().min(2, messages.nameMin).max(20, messages.nameMax),
    email: z
      .string()
      .email(messages.emailInvalid)
      .max(100, messages.emailMax),
    ministry: z
      .string()
      .min(1, messages.ministryRequired)
      .refine(
        (val) => ministryOptions.includes(val as MinistryOption),
        messages.ministryRequired
      ),
    message: z.string().min(10, messages.messageMin).max(500, messages.messageMax),
  });
}

export type ContactFormSchema = z.infer<
  ReturnType<typeof getContactFormSchema>
>;

function getAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export function getNationRegistrationFormSchema(messages: {
  firstNameMin: string;
  firstNameMax: string;
  lastNameMin: string;
  lastNameMax: string;
  birthDateRequired: string;
  birthDateInvalid: string;
  birthDateFuture: string;
  birthDateMinAge: string;
  phoneInvalid: string;
  emailInvalid: string;
  emailMax: string;
  addressMin: string;
  addressMax: string;
  cityMin: string;
  cityMax: string;
  stateMin: string;
  stateMax: string;
  postalCodeInvalid: string;
}) {
  return z.object({
    firstName: z
      .string()
      .trim()
      .min(2, messages.firstNameMin)
      .max(20, messages.firstNameMax),
    lastName: z
      .string()
      .trim()
      .min(2, messages.lastNameMin)
      .max(20, messages.lastNameMax),
    birthDate: z
      .string()
      .trim()
      .min(1, messages.birthDateRequired)
      .refine(
        (val) => !Number.isNaN(new Date(val).getTime()),
        messages.birthDateInvalid
      )
      .refine(
        (val) => new Date(val).getTime() <= Date.now(),
        messages.birthDateFuture
      )
      .refine((val) => {
        const age = getAge(new Date(val));
        return age >= 16 && age <= 100;
      }, messages.birthDateMinAge),
    phone: z
      .string()
      .trim()
      .regex(/^[0-9]{6,12}$/, messages.phoneInvalid),
    countryCode: z.string().trim().length(2),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email(messages.emailInvalid)
      .max(100, messages.emailMax),
    address: z
      .string()
      .trim()
      .min(5, messages.addressMin)
      .max(100, messages.addressMax),
    city: z
      .string()
      .trim()
      .min(2, messages.cityMin)
      .max(50, messages.cityMax),
    state: z
      .string()
      .trim()
      .min(2, messages.stateMin)
      .max(50, messages.stateMax),
    postalCode: z
      .string()
      .trim()
      .min(3, messages.postalCodeInvalid)
      .max(12, messages.postalCodeInvalid)
      .regex(/^[A-Za-z0-9\s-]+$/, messages.postalCodeInvalid),
    // Honeypot field: must stay empty. Real users never see or fill it.
    website: z.string().max(0).optional(),
  });
}

export type NationRegistrationFormSchema = z.infer<
  ReturnType<typeof getNationRegistrationFormSchema>
>;
