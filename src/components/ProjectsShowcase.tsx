"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { portfolioData } from "../data/portfolioData";
import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiSupabase,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiVite,
} from "react-icons/si";
import { HiOutlineChartBar } from "react-icons/hi2";

const techIcons: Record<string, React.ReactNode> = {
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <SiTailwindcss />,
  Supabase: <SiSupabase />,
  "Framer Motion": <SiFramer />,
  Vite: <SiVite />,
  Node: <FaNodeJs />,
  Recharts: <HiOutlineChartBar />,
};

export default function ProjectsShowcase() {
  const [current, setCurrent] = useState(0);

  const projects = portfolioData.projects;

  const project = projects[current];

  const nextProject = () => {
    setCurrent((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        border border-white/10
        bg-white/[0.02]
        backdrop-blur-none
      "
    >
      <div
         className="flex flex-col">
        {/* IMAGE */}
        <div
            className="
                relative
                h-[200px]
                md:h-[300px]
                lg:h-[420px]
                overflow-hidden
            "
            >
          <Image
            src={project.image || "/projects/fallback.jpg"}
            alt={project.title}
            fill
             className="
                    object-cover
                    object-top                      
                    transition-transform
                    duration-700
                    hover:scale-[1.02]
                "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-transparent
              to-black/40
            "
          />
        </div>

        {/* CONTENT */}
        <div
            className="
                px-6
                py-6                
                md:px-8
                md:py-5
                lg:px-12
            "
            >
          <span
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-luxury-gold
            "
          >
            Selected Project
          </span>

          <h3
            className="
              mt-2
              text-xl
              md:text-2xl
              font-bold
              text-white
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-2
              text-white/70
              text-sm md:text-base
              leading-7
              max-w-2xl
            "
          >
            {project.description}
          </p>

          {/* TECH STACK */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <div
                key={tech}
                className="
                  flex
                  items-center
                  gap-2

                  rounded-full
                  border border-white/10
                  bg-white/[0.03]

                  px-3
                  py-1.5

                  text-xs
                  text-white/80
                "
              >
                <span className="text-luxury-gold">
                  {techIcons[tech]}
                </span>

                {tech}
              </div>
            ))}
            
          </div>

          {/* CTA */}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              className="
                mt-5
                inline-flex
                w-fit
                items-center
                rounded-full
                border border-luxury-gold/30
                px-6
                py-3
                text-sm
                text-luxury-gold
                transition-all
                duration-300
                hover:bg-luxury-gold
                hover:text-black
              "
            >
              View Project →
            </Link>
          )}
        </div>
      </div>

      {/* NAVIGATION */}
          <button
            onClick={prevProject}
            className="
              absolute
              left-1
              md:left-6
              top-1/4
              md:top-1/2
              -translate-y-1/2
              z-20

              flex
              items-center
              justify-center

              h-10
              w-10
              md:h-12
              md:w-12
              py-5
              

              rounded-full
              border
              border-white/10

              bg-black/60
              backdrop-blur-md

              text-lg
              text-white/60

              transition-all
              duration-300

              hover:text-luxury-gold
              hover:border-luxury-gold/30
              hover:bg-black/80
            "
            aria-label="Previous project"
          >
            ←
          </button>

          <button
            onClick={nextProject}
            className="
              absolute
              right-1
              md:right-6
              top-1/4
              md:top-1/2
              -translate-y-1/2
              z-20

              flex
              items-center
              justify-center

              h-10
              w-10
              md:h-12
              md:w-12
              py-5

              rounded-full
              border
              border-white/10

              bg-black/60
              backdrop-blur-md

              text-lg
              text-white/60

              transition-all
              duration-300

              hover:text-luxury-gold
              hover:border-luxury-gold/30
              hover:bg-black/80
            "
            aria-label="Next project"
          >
            →
          </button>

          
        
      
    </div>
  );
}