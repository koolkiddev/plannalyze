import { fetchAttendees } from '@/app/lib/data';

export default async function AttendeesView() {
  const attendees = await fetchAttendees();

  return (
    <div className="p-2">
      <h1 className="text-3xl font-black mb-8">Attendees</h1>

      <div className="relative overflow-x-auto">
        <table className="w-screen md:w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase font-black">
            <tr>
              <th scope="col" className="py-3 pr-3">
                  Name
              </th>
              <th scope="col" className="py-3">
                  Email
              </th>
              <th scope="col" className="py-3">
                  Phone
              </th>
              <th scope="col" className="py-3 pr-3">
                  Date RSVP&apos;d
              </th>
            </tr>
          </thead>
          <tbody>
          {attendees.map((attendee, i) => {
              return (
            <tr key={attendee.id} className="bg-white border-t border-b hover:bg-gray-50">
                <th scope="row" className="py-4 font-medium text-gray-900 whitespace-nowrap pr-3">
                  {attendee.name}
                </th>
                <td className="py-4 pr-3">
                  {attendee.email}
                </td>
                <td className="py-4 pr-3">
                  {attendee.phone}
                </td>
                <td className="py-4 pr-3">
                  {attendee.date_rsvp.toISOString().substring(0, 10)}
                </td>
              </tr>
              )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}