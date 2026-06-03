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

export const metadata = {
metadataBase: new URL(
    "https://aziz-portfolio-liart.vercel.app"
  ),

  title: "Muhammad Aziz Jalaluddin | Full Stack Web Developer",
  description:
    "Portfolio of Muhammad Aziz Jalaluddin. Full Stack Web Developer specializing in Next.js, React, TypeScript, Supabase, and modern web experiences.",
  openGraph: {
    title: "Muhammad Aziz Jalaluddin",
    description: "Full Stack Web Developer specializing in modern web applications.",
    images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Muhammad Aziz Jalaluddin Portfolio",
        },
      ],
    type: "website",
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
