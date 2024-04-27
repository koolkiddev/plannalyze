import AttendeesView from '@/app/ui/dashboard/attendees/attendees';
import Link from 'next/link';

export default async function Page() {
    return (
        <>
          <AttendeesView />
          <button className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 mt-2 rounded-lg bg-blue-600 text-white shadow-lg hover:bg-blue-700 active:bg-blue-500 shadow-lg">
            <Link href="/dashboard/attendees/add">Add new attendee</Link>
          </button>
        </>
    );
}