import AttendeesView from '@/app/ui/dashboard/attendees/attendees';

export default async function Page() {
    return (
        <div>
            <AttendeesView />
            <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700'>Add new attendee</button>
        </div>
    );
}