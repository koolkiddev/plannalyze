import { AttendeeIcon } from "@/app/ui/dashboard/icons";
import { UserCircleIcon, UserIcon } from "@heroicons/react/16/solid";

export default function Page() {
    return (
        <>
          <div className="outline outline-1 outline-slate-200 p-8 rounded-lg flex grow flex-column mb-4 justify-between space-x-4 w-full md:flex-col md:space-x-0 md:space-y-4">
            <p className="text-3xl font-black mb-2">Add new attendee</p>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
              <input type="text" id="name" className="outline outline-1 outline-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Doe" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <input type="email" id="email" className="outline outline-1 outline-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@example.com" required />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
              <input type="phoneNumber" id="phone" className="outline outline-1 outline-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="555-5555" required />
            </div>
            <div>
              <label htmlFor="ticket-status" className="block mb-2 text-sm font-medium">Ticket Status</label>
              <input type="check" id="ticket-status" className="outline outline-1 outline-slate-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultChecked required />
              <div className="relative inline-block text-left">
            </div>
          </div>
          {/*
          <div className="group hs-dropdown relative inline-flex">
  <button id="hs-dropdown-default" type="button" className="h-12 hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg outline outline-slate-200 outline-1 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
    Actions
    <svg className="group-hover:rotate-180 size-4 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>

  <div className="group-hover:opacity-100 opacity-0 hs-dropdown-menu duration min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-default">
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 text-neutral-400" href="#">
      Newsletter
    </a>
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
      Purchases
    </a>
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
      Downloads
    </a>
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" href="#">
      Team Account
    </a>
  </div>
    </div>*/}
          </div>
        </>
    );
}