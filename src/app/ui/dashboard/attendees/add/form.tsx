import Link from "next/link";
import { addAttendee } from '@/app/lib/actions';

export default function Form() {
  return (
      <form action={addAttendee}>
        <div className="mb-4 md:px-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium m-2">Name</label>
          <input type="text" id="name" name="name" className="m-2 outline outline-1 outline-slate-200 text-sm rounded-lg block w-full p-2.5" placeholder="John Doe" required />
        </div>

        {/* email */}
        <div className="mb-4 md:px-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium m-2">Email</label>
          <input type="email" id="email" name="email" className="m-2 outline outline-1 outline-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@example.com" required />
        </div>

        {/* phone # */}
        <div className="mb-4 md:px-4">
          <label htmlFor="phone" className="m-2 block mb-2 text-sm font-medium">Phone Number</label>
          <input type="phoneNumber" name="phone" id="phone" className="m-2 outline outline-1 outline-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="555-5555" required />
        </div>

        <div className="mb-4 md:px-4">
          <label htmlFor="date_rsvp" className="m-2 block mb-2 text-sm font-medium">Date RSVP'd</label>
          <input type="date" id="date_rsvp" name="date_rsvp" className="m-2 outline outline-1 outline-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>

        {/* ticket status */}
        <div className="mb-4 md:px-4">
          <label htmlFor="ticket_status" className="m-2 block text-sm font-medium">Ticket Status</label>
          <select
            id="ticket_status"
            name="ticket_status"
            className="m-2 peer block w-full cursor-pointer rounded-md outline outline-gray-200 outline-1 p-3 text-sm placeholder:text-gray-500"
            defaultValue=""
          >
            <option value="" disabled>
              --
            </option>
            <option value={1}>
              Paid
            </option>
            <option value={2}>
              Unpaid
            </option>
          </select>

          {/* submit button */}
          <div className="inline-flex ml-2 mt-0">
            <button type="submit" className="transition-3 transition p-2 mr-2 bg-white font-medium rounded-lg outline outline-1 outline-slate-200 hover:bg-sky-100 hover:text-blue-600 mt-6">
              Add attendee
            </button>

            <Link href="/dashboard/attendees" className="transition-2 transition p-3 bg-white font-medium rounded-lg outline outline-1 outline-slate-200 hover:bg-sky-100 hover:text-blue-600 mt-6">
              Cancel
            </Link>
          </div>
        </div>
      </form>
  );
}