import { fetchAttendees } from '@/app/lib/data';

export default async function AttendeesView() {
    const attendees = await fetchAttendees();

    return (
        <div className="">
          {attendees.map((attendee, i) => {
            return (
              <div key={attendee.id} className="w-full hover:shadow-md transition-all rounded mb-2 py-4 px-6 outline outline-1 outline-slate-100 shadow-lg">
                <div className='flex flex-row items-center justify-between py-4'>
                    <div className="flex items-center">
                    <div className="min-w-0">
                        <p className="truncate text-base font-semibold md:text-base ">
                        {attendee.name}
                        </p>
                        <p className="text-sm text-gray-500 sm:block">
                        {attendee.email}
                        </p>
                    </div>
                    </div>
                    <p className='truncate text-sm font-medium md:text-base text-gray-500'>
                    {attendee.date_rsvp.toISOString().substring(0, 10)}
                    </p>
                </div>
              </div>
            );
          })}
        </div>
    );
}