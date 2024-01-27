import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./nopage/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dezynUI",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
