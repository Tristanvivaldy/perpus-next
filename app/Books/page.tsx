import Link from "next/link";
import React from "react";

export default function Books() {
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
    {
      id: 2,
      user_id: 3,
      isbn: "3461273672648",
      title: "Librarian",
      subtitle: "librarian",
      author: "Dimas",
      publisher: "C-Media",
      pages: 28,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, fuga!",
      website: "www.librarian.com",
    },
    {
      id: 3,
      user_id: 4,
      isbn: "4283927439589",
      title: "CookingBooks",
      subtitle: "cookingbooks",
      author: "Bara",
      publisher: "A-Media",
      pages: 131,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque minima animi veritatis?",
      website: "www.cookbook.com",
    },
    {
      id: 4,
      user_id: 2,
      isbn: "9473947238454",
      title: "Fictions",
      subtitle: "fictions",
      author: "Mawar",
      publisher: "B-Media",
      pages: 53,
      description: "Lorem ipsum dolor sit amet.",
      website: "www.fiction.com",
    },
    {
      id: 5,
      user_id: 3,
      isbn: "2643849239273",
      title: "Happy Family",
      subtitle: "happy-family",
      author: "Dimas",
      publisher: "A-Media",
      pages: 61,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      website: "www.hapfam.com",
    },
    {
      id: 6,
      user_id: 1,
      isbn: "1238928374923",
      title: "Football Tactics",
      subtitle: "football-tactics",
      author: "Bima",
      publisher: "C-Media",
      pages: 23,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      website: "www.footact.com",
    },
    {
      id: 7,
      user_id: 2,
      isbn: "2374923054304",
      title: "Music of my life",
      subtitle: "music-of-my-life",
      author: "Mawar",
      publisher: "E-Media",
      pages: 143,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, iure totam.",
      website: "www.musiclife.com",
    },
    {
      id: 8,
      user_id: 2,
      isbn: "1238284743018",
      title: "Happy meal",
      subtitle: "happy-meal",
      author: "Mawar",
      publisher: "T-Media",
      pages: 34,
      description: "Lorem ipsum dolor sit amet.",
      website: "www.happytum.com",
    },
  ];
  return (
    <div className="table container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Books Table</h1>
      <div className="p-5 flex justify-end ">
        <Link
          className="rounded bg-blue-700 p-3 w-40 text-white"
          href={"/Books/create"}
        >
          Create New Books
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto">
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Pages</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="py-2 px-4 border-b">{item.isbn}</td>
                <td className="py-2 px-4 border-b">{item.title}</td>
                <td className="py-2 px-4 border-b">{item.author}</td>
                <td className="py-2 px-4 border-b">{item.publisher}</td>
                <td className="py-2 px-4 border-b">{item.pages}</td>
                <td className="py-2 px-4 border-b">
                  <Link
                    className="rounded-full bg-indigo-500 px-4 py-1 text-white mx-1"
                    href={"/Books/info"}
                  >
                    Info
                  </Link>
                  <Link
                    className="rounded-full bg-yellow-500 px-4 py-1 text-white mx-1"
                    href={"/Books/edit"}
                  >
                    Update
                  </Link>
                  <Link
                    className="rounded-full bg-red-500 px-4 py-1 text-white mx-1"
                    href={"/"}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
