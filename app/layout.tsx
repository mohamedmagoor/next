import "./globals.css";
import Navbar from "@/app/Components/Navbar/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
