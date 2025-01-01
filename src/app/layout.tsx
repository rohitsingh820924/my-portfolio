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
  description: "Welcome to the portfolio of Rohit Singh. Explore my work in web design, UI development, frontend development, ReactJS, NextJS, and Figma.",
  publisher: "Rohit Singh",
  keywords: "web design, UI development, UX design, frontend development, ReactJS, NextJS, Figma design, user interface design, user experience design, responsive web design, mobile-first design, interaction design, design systems, wireframing, prototyping, accessibility design, visual design, website redesign, landing page design, e-commerce design, SaaS design, product design, component libraries, creative web solutions, single-page applications, website optimization, website performance, SEO-friendly design, interactive design, design tokens, branding design, typography, color theory, logo design, UI/UX audits, cross-platform design, web app design, mobile app design, design strategy, creative direction, frontend architecture, dashboard design, dark mode design, animations, micro-interactions, Lottie animations, Tailwind CSS, Material-UI, Bootstrap design, headless CMS integration, Acernity UI, Strapi, HTML5/CSS3, JavaScript, TypeScript, Next.js API routes, JAMstack, Git version control, Agile design processes, collaborative design, project management, Photoshop, Illustrator, Canva, Adobe XD, After Effects, Framer Motion, motion graphics, video editing, React hooks, form design, data visualization, real-time web apps, API integration, CMS development, website prototyping, UI audits, web animations, custom UI components, design research, UX writing, usability testing, design workshops, no-code/low-code design, developer handoff, cross-browser compatibility, branding packages, e-commerce interfaces, and landing page optimization.",
  openGraph: {
    images: [
      {
        url: '/images/skills/d2d-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Rohit Singh Portfolio Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/skills/d2d-logo.svg']
  }
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
