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
  ticket_status: z.boolean(),
});

const AddAttendee = FormSchema.omit({ id: true });

export async function addAttendee(formData: FormData) {
    var tistat = true;
    if (formData.get("ticket_status") === 1) {
        const tistat = true;
    } else if (formData.get("ticket_status") === 2) {
        const tistat = false;
    }

    const { name, email, phone, date_rsvp, ticket_status } = AddAttendee.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      date_rsvp: new Date(formData.get("date_rsvp")),
      ticket_status: tistat,
    });

    const date = new Date().toISOString().split('T')[0];

    await sql`
        INSERT INTO "Attendee" (name, phone, email, ticket_status, date_rsvp)
        VALUES (${name}, ${phone}, ${email}, ${ticket_status}, ${date_rsvp})
  `;

  redirect("/dashboard/attendees")
  }