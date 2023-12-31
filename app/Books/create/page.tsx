import Link from "next/link";
import React from "react";

export default function CreateBook() {
  return (
    <div className="flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Add New Book
          </h2>
        </div>
        <form className="mt-1 space-y-3">
          <div className="mb-2">
            <label
              htmlFor="isbn"
              className="block text-sm font-medium text-gray-700"
            >
              ISBN
            </label>
            <input
              id="isbn"
              name="isbn"
              type="text"
              required
              className=" p-2 w-full border rounded-md"
              placeholder="Enter ISBN"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              className=" p-2 w-full border rounded-md"
              placeholder="Enter Title"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              id="author"
              name="author"
              type="text"
              required
              className="p-2 w-full border rounded-md"
              placeholder="Enter author"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="publisher"
              className="block text-sm font-medium text-gray-700"
            >
              Publisher
            </label>
            <input
              id="publisher"
              name="publisher"
              type="text"
              required
              className="p-2 w-full border rounded-md"
              placeholder="Enter publisher"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="pages"
              className="block text-sm font-medium text-gray-700"
            >
              Pages
            </label>
            <input
              id="pages"
              name="pages"
              type="number"
              required
              className="p-2 w-full border rounded-md"
              placeholder="Enter pages"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              required
              className="p-2 w-full border rounded-md"
              placeholder="Enter description"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="website"
              className="block text-sm font-medium text-gray-700"
            >
              Website
            </label>
            <input
              id="website"
              name="website"
              type="text"
              required
              className="p-2 w-full border rounded-md"
              placeholder="Enter website"
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Book
            </button>
          </div>
        </form>
        <div className="text-center mt-2">
          <Link href="/Books" className="text-indigo-500 hover:underline">
            Back to Books
          </Link>
        </div>
      </div>
    </div>
  );
}
