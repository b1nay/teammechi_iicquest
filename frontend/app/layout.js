
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Students' Mental Care",
  description: "Students' Mental Care is a platform that helps students to detect their mental health status and seek help from professionals instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f1efef] `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
