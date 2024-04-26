export type Attendee = {
    id: string;
    name: string;
    phone: string;
    email: string;
    date_rsvp: string;
    ticket_status: 'pending' | 'paid';
};