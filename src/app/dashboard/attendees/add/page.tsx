import { AttendeeIcon } from "@/app/ui/dashboard/icons";
import { UserCircleIcon, UserIcon } from "@heroicons/react/16/solid";
import Form from "@/app/ui/dashboard/attendees/add/form";
import Link from "next/link";

export default function Page() {
    return (
        <>
          <div className="flex flex-col py-4 pr-4 outline outline-1 sm-px-0 outline-slate-100 transition-all rounded-lg justify-between space-x-4 w-full md:flex-col md:space-x-0">
            <p className="text-3xl font-black mb-4 px-4 m-2">Add new attendee</p>

            <Form />
          </div>
        </>
    );
}