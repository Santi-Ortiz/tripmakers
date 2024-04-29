import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend('re_Duyu2L8r_6LhNsvstRoenaqU7mcB2qHwm');

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['fervusen13@gmail.com'],
      subject: 'Tus tiquetes por TripMakers están listos!',
      react: EmailTemplate({ nombreCompleto: 'Carlos Andrés Carrero'}),
      text: 'Hello world'
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
