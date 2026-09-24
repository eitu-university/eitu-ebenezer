import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { NationRegistrationEmail } from '@/components/email/NationRegistrationEmail';
import { getNationRegistrationFormSchema } from '@/zod/schemas';
import { nations } from '@/data/nations';
import { checkRateLimit } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

const nationRegistrationFormSchema = getNationRegistrationFormSchema({
  firstNameMin: 'First name must be at least 2 characters long',
  firstNameMax: 'First name must be at most 20 characters long',
  lastNameMin: 'Last name must be at least 2 characters long',
  lastNameMax: 'Last name must be at most 20 characters long',
  birthDateRequired: 'Date of birth is required',
  birthDateInvalid: 'Please enter a valid date',
  birthDateFuture: 'Date of birth cannot be in the future',
  birthDateMinAge: 'You must be between 16 and 100 years old to register',
  phoneInvalid: 'Please enter a valid phone number',
  emailInvalid: 'Please enter a valid email',
  emailMax: 'Email must be at most 100 characters long',
  addressMin: 'Address must be at least 5 characters long',
  addressMax: 'Address must be at most 100 characters long',
  cityMin: 'City must be at least 2 characters long',
  cityMax: 'City must be at most 50 characters long',
  stateMin: 'State/Province must be at least 2 characters long',
  stateMax: 'State/Province must be at most 50 characters long',
  postalCodeInvalid: 'Please enter a valid postal/zip code',
});

function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const rateLimit = checkRateLimit(ip);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot: bots that fill hidden fields get a fake success, no email sent.
    if (typeof body?.website === 'string' && body.website.length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const result = nationRegistrationFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const validatedData = result.data;
    const nation = nations.find((n) => n.code === validatedData.countryCode);

    if (!nation) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || '',
      to: process.env.EMAIL_TO!,
      subject: `Nuevo registro de asociado - ${nation.name}`,
      replyTo: validatedData.email,
      react: NationRegistrationEmail({
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        birthDate: validatedData.birthDate,
        phone: `+${nation.dialCode} ${validatedData.phone}`,
        email: validatedData.email,
        address: validatedData.address,
        city: validatedData.city,
        state: validatedData.state,
        postalCode: validatedData.postalCode,
        nationName: nation.name,
        nationFlag: nation.flag,
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Something went wrong. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Nations registration error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
