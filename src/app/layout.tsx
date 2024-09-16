import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohit Singh - Portfolio",
  description: "Welcome to the portfolio of Rohit Singh. Explore my work in web design, frontend development, ReactJS, NextJS, and Figma.",
  publisher: "Rohit Singh",
  keywords: "Rohit Singh, portfolio, web design, frontend development, ReactJS, NextJS, Figma",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
