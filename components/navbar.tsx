"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="w-full md:w-64 md:h-screen bg-white dark:bg-gray-800 border-b md:border-r border-gray-200 dark:border-gray-700 flex flex-col shrink-0">
      <div className="flex items-center justify-between p-4 md:hidden">
        <h2 className="text-lg font-bold text-slate-100">
          <Link href="/">Subscription Tracker</Link>
        </h2>
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <i className={`ti ${open ? "ti-x" : "ti-menu-2"} text-2xl text-slate-300`} />
        </button>
      </div>

      <div className={`${open ? "flex" : "hidden"} md:flex flex-col`}>
        <div className="p-4 md:p-6 border-b border-gray-100 dark:border-gray-700 flex flex-col gap-4">
          <div className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-5 py-4 shadow-sm flex items-center justify-between">
            <div className="font-semibold text-neutral-800 dark:text-neutral-200">
              Profile
            </div>
            <UserButton userProfileMode="modal" />
          </div>
        </div>

        <div className="p-4 md:p-6 border-b border-gray-100 dark:border-gray-700 hidden md:flex flex-col gap-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-100 tracking-tight">
            <Link href="/">Subscription Tracker</Link>
          </h2>
        </div>

        <nav className="flex flex-col p-2 gap-2">
          <Link
            href="/dashboard/subscriptions"
            onClick={() => setOpen(false)}
            className="px-3 py-2 text-sm text-slate-300 hover:bg-blue-50 hover:text-slate-900 rounded-lg transition-colors"
          >
            Subscriptions
          </Link>
          <Link
            href="/dashboard/analytics"
            onClick={() => setOpen(false)}
            className="px-3 py-2 text-sm text-slate-300 hover:bg-blue-50 hover:text-slate-900 rounded-lg transition-colors"
          >
            Analytics
          </Link>
        </nav>
      </div>
    </aside>
  );
}