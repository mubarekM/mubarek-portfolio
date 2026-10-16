import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mubarek Mustefa – AI-Powered Full-Stack Developer",
  description:
    "Portfolio of Mubarek Mustefa: full-stack web applications with React, Node.js, and integrated AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-slate-900 text-slate-400`}
      >
        {children}
      </body>
    </html>
  );
}
