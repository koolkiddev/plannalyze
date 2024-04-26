import Link from 'next/link';
import { karla } from '../fonts';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 outline outline-2 outline-slate-100">
      {/* title */}
      <div className="rounded bg-gray-100 mb-4 mr-1 ml-1">
        <Link
          className="mb-2 flex h-20 items-end justify-start p-4 md:h-40"
          href="/"
        >
        {/* <div className={karla.className}>*/}
          <div className="w-32 md:w-100 mt-2">
            <p className="text-2xl font-black flex flex-row items-center leading-none">Plannalyze</p>
          </div>
        {/* </div> */}
        </Link>
      </div> 

      {/* nav links */}
      <div className="flex grow flex-row p-2 mb-4 mr-1 ml-1 justify-between space-x-4 md:flex-col md:space-x-0 md:space-y-4 rounded bg-gray-100">
        <div className="hover:bg-gray-200">
          <Link className="w-full font-bold py-2 p-2 mb-auto rounded-xl" href="/dashboard/">Home</Link>
        </div>
        <div className="hover:bg-gray-200">
          <Link className="w-full font-bold py-2 p-2 mb-auto rounded" href="/dashboard/attendees">Attendees</Link>
        </div>
        <div className="hover:bg-gray-200">
          <Link className="w-full font-bold py-2 p-2 mb-auto rounded" href="/dashboard/">Settings</Link>
        </div>
        <div className="hidden h-auto w-full grow rounded-md md:block"></div> 
      </div>

      {/* sign out */}
      <div className="rounded bg-gray-100 mr-1 ml-1">
        <button className="bg-base-100 hover:bg-base-200 font-bold py-2 px-2">
          <Link href="/">Sign out</Link>
        </button>
      </div>
    </div>
  );
}