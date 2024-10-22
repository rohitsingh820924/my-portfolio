import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "@/components/Header";
import { ReduxProvider } from "./redux-provider";
import { ThemeProvider } from 'next-themes';

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
    <html lang="en">
      <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class">
          <ReduxProvider>
            <Header />
            {children}
          </ReduxProvider>
        </ThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
