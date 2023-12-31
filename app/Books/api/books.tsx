export default function handler({ req, res }: { req: any; res: any }) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Get all books" });
  } else if (req.method === "POST") {
    res.status(200).json({ message: "Add a new book" });
  } else if (req.method === "PUT") {
    res.status(200).json({ message: "Edit a book" });
  } else if (req.method === "DELETE") {
    res.status(200).json({ message: "Delete a book" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
