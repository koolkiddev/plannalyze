import Link from 'next/link';
import { HomeIcon, AttendeeIcon, SettingsIcon, PowerIcon } from './icons'

export default function SideNav() {
  return (
    <>
    <div className="flex h-full flex-col px-3 py-4 md:px-2 outline outline-1 outline-slate-100">
      {/* title */}
      <div className="rounded mb-4 mr-1 ml-1 outline outline-1 outline-slate-100">
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
      <div className="flex grow flex-column mb-4 text-center justify-between space-x-4 w-full p-1 md:flex-col md:space-x-0 md:space-y-4">
        <div className="w-full rounded p-2 outline outline-1 outline-slate-100">
          <Link className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" href="/dashboard/">
            <HomeIcon />
            <p className="hidden md:block">Home</p>
          </Link>
        </div>
        <div className="w-full text-center rounded p-2 outline outline-1 outline-slate-100">
          <Link className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" href="/dashboard/attendees">
            <AttendeeIcon />
            <p className="hidden md:block">Attendees</p>
          </Link>
        </div>
        <div className="w-full sm:text-center rounded p-2 mr-2 outline outline-1 outline-slate-100">
          <Link className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" href="/dashboard/settings">
            <SettingsIcon />
            <p className="hidden md:block">Settings</p>
          </Link>
        </div>
        <div className="hidden h-auto w-full grow rounded-md md:block"></div> 
      </div>

      {/* sign out */}
      <div className="w-full sm:text-center rounded p-2 mr-2 outline outline-1 outline-slate-100">
          <Link className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" href="/dashboard/settings">
            <PowerIcon />
            <p className="hidden md:block">Sign out</p>
          </Link>
      </div>
    </div>
    </>
  );
}