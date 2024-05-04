import Link from "next/link";
import { addAttendee } from '@/app/lib/actions';

export default function Form() {
  return (
      <form action={addAttendee}>
        <div className="mb-4 pr-4 md:px-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium m-2">Name</label>
          <input type="text" id="name" name="name" className="transition m-2 outline outline-1 outline-slate-200 text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-inset focus:ring-gray-300" placeholder="John Doe" required />
        </div>

        {/* email */}
        <div className="mb-4 pr-4 md:px-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium m-2">Email</label>
          <input type="email" id="email" name="email" className="transition m-2 outline outline-1 outline-slate-200 text-sm rounded-lg focus:ring-1 focus:ring-inset focus:ring-gray-300 block w-full p-2.5" placeholder="john.doe@example.com" required />
        </div>

        {/* phone # */}
        <div className="mb-4 pr-4 md:px-4">
          <label htmlFor="phone" className="m-2 block mb-2 text-sm font-medium">Phone Number</label>
          <input type="phoneNumber" name="phone" id="phone" className="transition m-2 outline outline-1 outline-slate-200 text-sm rounded-lg focus:ring-1 focus:ring-inset focus:ring-gray-300 block w-full p-2.5" placeholder="555-5555" required />
        </div>

        <div className="mb-4 pr-4 md:px-4">
          <label htmlFor="date_rsvp" className="m-2 block mb-2 text-sm font-medium">Date RSVP&apos;d</label>
          <input type="date" id="date_rsvp" name="date_rsvp" className="transition m-2 outline outline-1 outline-slate-200 text-sm rounded-lg focus:ring-1 focus:ring-inset focus:ring-gray-300 block w-full p-2.5" required />
        </div>

        {/* submit button */}
        <div className="inline-flex ml-2 mt-0 md:px-4 mb-4">
          <button type="submit" className="shadow-sm transition transition-1 p-2 mr-2 bg-white font-medium rounded-lg outline outline-1 outline-slate-200 hover:bg-sky-100 hover:text-blue-600 mt-6">
            Add attendee
          </button>

          <Link href="/dashboard/attendees" className="shadow-sm transition transition-1 p-3 bg-white font-medium rounded-lg outline outline-1 outline-slate-200 hover:bg-sky-100 hover:text-blue-600 mt-6">
            Cancel
          </Link>
        </div>
      </form>
  );
}