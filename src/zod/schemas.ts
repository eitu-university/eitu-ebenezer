import { z } from 'zod';

export function getContactFormSchema(messages: {
  nameMin: string;
  emailInvalid: string;
  messageMin: string;
}) {
  return z.object({
    name: z.string().min(2, messages.nameMin),
    email: z.string().email(messages.emailInvalid),
    message: z.string().min(10, messages.messageMin),
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
  lastNameMin: string;
  birthDateRequired: string;
  birthDateInvalid: string;
  birthDateFuture: string;
  birthDateMinAge: string;
  phoneInvalid: string;
  emailInvalid: string;
  addressMin: string;
  cityMin: string;
  stateMin: string;
  postalCodeInvalid: string;
}) {
  return z.object({
    firstName: z
      .string()
      .trim()
      .min(2, messages.firstNameMin)
      .max(100, messages.firstNameMin),
    lastName: z
      .string()
      .trim()
      .min(2, messages.lastNameMin)
      .max(100, messages.lastNameMin),
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
      .max(254),
    address: z
      .string()
      .trim()
      .min(5, messages.addressMin)
      .max(200, messages.addressMin),
    city: z.string().trim().min(2, messages.cityMin).max(100, messages.cityMin),
    state: z
      .string()
      .trim()
      .min(2, messages.stateMin)
      .max(100, messages.stateMin),
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
