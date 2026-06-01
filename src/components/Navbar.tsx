"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const offsets: Record<string, number> = {
    home: 0,
    about: 30,
    skills: 0,
    projects: 0,
    experience: 0,
    contact: 0,
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.href)
      );

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    const closeMenuOnScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", closeMenuOnScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", closeMenuOnScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    const y = section.offsetTop - offsets[id];

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <>
      {/* Logo */}
      <div
        className="
          fixed
          left-5
          top-4
          z-50

          md:left-14
          md:top-6
        "
      >
        <Link
          href="#home"
          className="
            text-base
            md:text-xl

            font-black
            tracking-[0.25em]

            text-white
            transition-colors
            duration-300

            hover:text-luxury-gold
          "
        >
          ZYZ
          <span className="text-luxury-gold"> PRJCT</span>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          fixed
          right-4
          top-4
          z-50

          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-xl
          border
          border-white/15

          bg-black/40
          text-white

          backdrop-blur-xl

          md:hidden
        "
      >
        {isOpen ? (
          <HiOutlineX size={22} />
        ) : (
          <HiOutlineMenu size={22} />
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            fixed
            left-4
            right-4
            top-20

            z-40

            rounded-2xl
            border
            border-white/10

            bg-black/60

            p-3

            backdrop-blur-2xl
            shadow-[0_20px_80px_rgba(0,0,0,0.5)]

            md:hidden
          "
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    w-full
                    rounded-xl

                    px-4
                    py-3

                    text-left
                    text-sm
                    font-medium

                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-white/10 text-luxury-gold"
                        : "text-white/80 hover:bg-white/5 hover:text-luxury-gold"
                    }
                  `}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <nav
        className="
          hidden
          md:flex

          fixed
          right-3
          top-3
          z-50

          items-center
          gap-0.5

          rounded-xl
          border
          border-white/15

          bg-black/30

          px-4
          py-2

          backdrop-blur-xl
          shadow-[0_8px_40px_rgba(0,0,0,0.45)]
        "
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.href;

          return (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`
                rounded-xl

                px-3
                py-1.5

                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]

                transition-all
                duration-300

                ${
                  isActive
                    ? `
                      border border-white/10
                      bg-white/10
                      text-luxury-gold
                    `
                    : `
                      text-white/70
                      hover:bg-white/5
                      hover:text-luxury-gold
                    `
                }
              `}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </>
  );
}