import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactEmail } from '@/components/email/ContacEmail';
import { getContactFormSchema } from '@/zod/schemas';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = getContactFormSchema({
  nameMin: 'Name must be at least 2 characters long',
  emailInvalid: 'Please enter a valid email',
  messageMin: 'Message must be at least 10 characters long',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // validar con zod
    const validatedData = contactFormSchema.parse(body);
    const { email, message, name} =
      validatedData;

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || '',
      to: process.env.EMAIL_TO!,
      subject: `Nuevo mensaje de ${name}`,
      react: ContactEmail({
        fullName: name,
        email,
        message: message
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error('Error con Resend:', error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
