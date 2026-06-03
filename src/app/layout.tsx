import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import {Inter } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://aziz-portfolio-liart.vercel.app"
  ),

  title:
    "Muhammad Aziz Jalaluddin | Full Stack Web Developer",

  description:
    "Portfolio showcasing modern web applications, scalable architecture, premium UI design, and full-stack development expertise using Next.js, TypeScript, React, and Supabase.",

  openGraph: {
    title:
      "Muhammad Aziz Jalaluddin | Full Stack Web Developer",

    description:
      "Portfolio showcasing modern web applications, scalable architecture, premium UI design, and full-stack development expertise.",

    url: "https://aziz-portfolio-liart.vercel.app",

    siteName: "Muhammad Aziz Jalaluddin Portfolio",

    type: "website",

    images: [
      {
        url: "https://aziz-portfolio-liart.vercel.app/images/perfect1.webp",
        width: 1200,
        height: 630,
        alt: "Muhammad Aziz Jalaluddin Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Muhammad Aziz Jalaluddin | Full Stack Web Developer",

    description:
      "Portfolio showcasing modern web applications and premium user experiences.",

    images: [
      "https://aziz-portfolio-liart.vercel.app/images/perfect1.webp",
    ],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>
        {/* 👇 Kita pasang Navbar di atas children agar melayang di setiap halaman */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
