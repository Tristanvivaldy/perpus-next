import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen sm:w-86 lg:w-auto">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-sm mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/Register" className="text-blue-500">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
