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
