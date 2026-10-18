import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Mubarek Mustefa – AI-Powered Full-Stack Developer";
const description =
  "Portfolio of Mubarek Mustefa: full-stack web applications with React, Node.js, and integrated AI.";

export const metadata = {
  metadataBase: new URL("https://mubarek-codes.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Mubarek Mustefa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
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
