import { portfolioData } from "../data/portfolioData";
import ExperienceCard from "../components/ExperienceCard";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-black
        px-6
        py-14
        scroll-mt-28
        md:px-12
      "
    >
      {/* Background Glow */}
      
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]
          pointer-events-none
        "
      />
         

      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12">
          <p
            className="
              mb-4
              text-xs
              uppercase
              tracking-[0.35em]
              text-white/40
            "
          >
            Experience
          </p>

          <h2
            className="
              max-w-2xl
              text-3xl
              font-light
              leading-tight
              tracking-tight
              text-white
              md:text-4xl
            "
          >
            Building modern digital experiences with cinematic aesthetics and scalable engineering.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div
            className="
              absolute
              left-[5px]
              top-0
              h-full
              w-px
              bg-white/10
            "
          />

          {portfolioData.experiences.map((experience) => (
            <ExperienceCard
              key={experience.role}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}