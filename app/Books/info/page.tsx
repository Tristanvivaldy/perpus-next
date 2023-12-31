import Link from "next/link";
import React from "react";

export default function Info() {
  const data = [
    {
      id: 1,
      user_id: 1,
      isbn: "9781491943533",
      title: "Bookshelf",
      subtitle: "bookshelf",
      author: "Bima",
      publisher: "C-Media",
      pages: 100,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      website: "www.bookshelf.com",
    },
  ];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Book Details</h1>
      <div className="p-5 bg-white shadow-md rounded-md">
        {data.map((item) => (
          <>
            <p className="text-lg">
              <strong>ISBN:</strong> {item.isbn}
            </p>
            <p className="text-lg">
              <strong>Title:</strong> {item.title}
            </p>
            <p className="text-lg">
              <strong>Author:</strong> {item.author}
            </p>
            <p className="text-lg">
              <strong>Publisher:</strong> {item.publisher}
            </p>
            <p className="text-lg">
              <strong>Pages:</strong> {item.pages}
            </p>
            <p className="text-lg">
              <strong>Description:</strong> {item.description}
            </p>
            <p className="text-lg">
              <strong>Website:</strong>{" "}
              <a
                href={`http://${item.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {item.website}
              </a>
            </p>
          </>
        ))}
        <div className="text-center mt-2">
          <Link href="/Books" className="text-indigo-500 hover:underline">
            Back to Books
          </Link>
        </div>
      </div>
    </div>
  );
}
