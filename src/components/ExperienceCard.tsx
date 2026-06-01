import { Experience } from "../data/portfolioData";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiSupabase,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

import { HiOutlineChartBar } from "react-icons/hi2";

interface ExperienceCardProps {
  experience: Experience;
}

const techIcons: Record<string, React.ReactNode> = {
  React: <FaReact />,
  Supabase: <SiSupabase />,
  PostgreSQL: <SiPostgresql />,
  Recharts: <HiOutlineChartBar />,
  "Tailwind CSS": <SiTailwindcss />,
  TypeScript: <SiTypescript />,
  "Next.js": <SiNextdotjs />,
  Node: <FaNodeJs />,
  Database: <FaDatabase />,
  GitHub: <FaGithub />,
};

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-6.5 md:pl-14 ">
      {/* Timeline Dot */}
      <div className="absolute left-0 top-3 h-3 w-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]" />

      {/* Card */}
      <div
        className="
          group
          rounded-3xl
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-none
          p-5 md:p-8
          transition-all duration-500
          hover:border-white/20
          hover:bg-white/[0.05]
        "
      >
        {/* Period */}
        <p
          className="
            mb-4
            text-xs
            uppercase
            tracking-[0.3em]
            text-white/40
          "
        >
          {experience.period}
        </p>

        {/* Role */}
        <h3
          className="
            text-2xl
            font-light
            tracking-tight
            text-white
          "
        >
          {experience.role}
        </h3>

        {/* Company */}
        <p
          className="
            mt-2
            text-sm
            uppercase
            tracking-[0.2em]
            text-white/50
          "
        >
          {experience.company}
        </p>

        {/* Description */}
        <p
          className="
            mt-6
            max-w-2xl
            text-base
            leading-relaxed
            text-white/70
          "
        >
          {experience.description}
        </p>

        {/* Tech Stack */}
        {experience.tech && (
          <div className="mt-6 flex flex-wrap gap-3">
            {experience.tech.map((tech) => (
              <div
                key={tech}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  px-4
                  py-2
                  text-xs
                  tracking-wide
                  text-white/70
                  transition-all duration-300
                  hover:border-white/20
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <span className="text-luxury-gold">
                  {techIcons[tech]}
                </span>

                {tech}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}