import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white h-screen flex flex-col w-64 sm:w-36 lg:w-48">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 lg:text-xl">LibBaca</h1>

        <ul className="lg:flex lg:flex-col">
          <li className="mb-2 lg:mb-0 py-1">
            <Link href="/" className="text-gray-300 hover:text-white">
              Dashboard
            </Link>
          </li>
          <li className="mb-2 lg:mb-0 py-1">
            <Link href="/Books" className="text-gray-300 hover:text-white">
              Books
            </Link>
          </li>
          <li className="mb-2 lg:mb-0 py-1">
            <Link href="/Login" className="text-gray-300 hover:text-white">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
