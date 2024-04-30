'use server';

import { date, z } from 'zod';
import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation'
 
const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  date_rsvp: z.date(),
});

const AddAttendee = FormSchema.omit({ id: true });

export async function addAttendee(formData: FormData) {
  const { name, email, phone, date_rsvp } = AddAttendee.parse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    date_rsvp: new Date(formData.get("date_rsvp") as string),
  });

  const date = new Date().toISOString().split('T')[0];

  await sql`
    INSERT INTO "Attendee" (name, phone, email, date_rsvp)
    VALUES (${name}, ${phone}, ${email}, ${date_rsvp.toDateString()})
  `;

  redirect("/dashboard/attendees");
}
