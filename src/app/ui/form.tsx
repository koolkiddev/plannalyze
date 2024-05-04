'use client';
 
import Link from "next/link";
import { addAttendee } from '@/app/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';
import { ExclamationCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function LoginForm() {
    return (
        <div className="flex flex-col h-screen justify-center items-center py-12 outline outline-1 outline-blue">
            <div className="w-full max-w-lg">
            <h2 className="text-center text-2xl font-black leading-9 tracking-tight text-gray-900">Log in to your account</h2>
            </div>
        
            <div className="mt-10 w-2/3 md:w-1/3">
            <form className="space-y-6" action="#" method="POST">
                <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                <div className="mt-2">
                    <input id="username" name="username" type="username" autoComplete="username" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
                </div>
        
                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div className="text-sm">
                    <a href="#" className="transition font-semibold text-blue-600 hover:text-blue-400">Forgot password?</a>
                    </div>
                </div>
                <div className="mt-2">
                    <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
                </div>
        
                <div>
                    <LoginButton />
                </div>
            </form>
        
            <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <Link href="/signup" className="transition font-semibold leading-6 text-blue-600 hover:text-blue-500 ml-1">Start your free trial</Link>
            </p>
            </div>
        </div>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();
   
    return (
      <button className="transition shadow-lg flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" aria-disabled={pending}>
        Log in <ArrowRightIcon className="inline h-5 w-5 text-gray-50" />
      </button>
    );
  }