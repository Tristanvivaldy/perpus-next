import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
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
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
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
            Register
          </button>
        </form>
        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link href="/Login" className="text-blue-500">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
