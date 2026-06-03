"use client";

import { useState, useEffect } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Loader from "../components/Loader";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-luxury-dark overflow-x-hidden">
      <main className="bg-luxury-dark text-luxury-light">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

        <footer
          className="
            py-8
            text-center
            border-t border-white/[0.03]
          "
        >
          <p
            className="
              text-white/30
              text-xs
              tracking-[0.25em]
              uppercase
            "
          >
            Designed & Developed by
          </p>

          <p
            className="
              mt-2
              text-soft-glow
              text-sm
              tracking-[0.18em]
              font-medium
            "
          >
            Muhammad Aziz Jalaluddin
          </p>

          <p
            className="
              mt-3
              text-white/20
              text-[11px]
            "
          >
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </footer>
      </main>
    </div>
  );
}