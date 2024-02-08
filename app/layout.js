import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./nopage/components/navbar";
import ThemeState from "./nopage/context/themeState";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dezynUI",

};

export default function RootLayout({ children }) {
  return (
    <ThemeState>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeState>
  );
}
