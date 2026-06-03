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
        {/*<Hero />*/}
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

        <footer className="text-center py-5 border-t border-white/[0.02] text-[10px] text-white/30 uppercase tracking-widest">
          © {new Date().getFullYear()} AzizProject. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
}