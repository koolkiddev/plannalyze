'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { HomeIcon, AttendeeIcon, SettingsIcon, PowerIcon, AddIcon } from './icons'

export default function SideNav() {
   const pathname = usePathname();

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
        {/* home link */}
        <div className="w-full sm:text-center rounded p-2 mr-2 outline outline-1 outline-slate-100">
          <Link className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === "/dashboard",
              }, 
            )} href="/dashboard">
            <HomeIcon />
            <p className="hidden md:block">Home</p>
          </Link>
        </div>

        {/* attendees link */}
        <div className="w-full sm:text-center rounded p-2 mr-2 outline outline-1 outline-slate-100">
          <Link className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === "/dashboard/attendees",
              }, 
            )} href="/dashboard/attendees">
            <AttendeeIcon />
            <p className="hidden md:block">Attendees</p>
          </Link>
        </div>

        {/* add attendee link */}
        <div className="w-full sm:text-center rounded p-2 mr-2 outline outline-1 outline-slate-100">
          <Link className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === "/dashboard/attendees/add",
              }, 
            )} href="/dashboard/attendees/add">
            <AddIcon />
            <p className="hidden md:block">Add Attendee</p>
          </Link>
        </div>

        {/* settings link */}
        <div className="w-full sm:text-center rounded p-2 mr-2 outline outline-1 outline-slate-100">
          <Link className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === "/dashboard/settings",
              }, 
            )} href="/dashboard/settings">
            <SettingsIcon />
            <p className="hidden md:block">Settings</p>
          </Link>
        </div>

        <div className="hidden h-auto w-full grow rounded-md md:block"></div> 
      </div>

      {/* sign out */}
      <div className="hidden md:block w-full sm:text-center rounded p-2 mr-2 outline outline-1 outline-slate-100">
          <Link href="/logout" className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon />
            <p className="hidden md:block">Sign out</p>
          </Link>
      </div>
    </div>
   </>
  );
}