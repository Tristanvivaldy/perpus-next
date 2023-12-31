import Sidebar from "./components/sidebar";
import "../app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
