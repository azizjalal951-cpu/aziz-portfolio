import { portfolioData } from "../data/portfolioData";
import SkillMarquee from "./SkillMarquee";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        scroll-mt-32
        relative
        z-10
        overflow-hidden
        py-31
        md:py-20
        px-6
        bg-[url('/images/cbgfokus.webp')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-luxury-gold tracking-[0.3em] text-sm mb-4 uppercase">
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology I Use
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed ">
            Focus on modern web development with high performance,
            premium design, and scalable architecture.
          </p>
        </div>

        {/* SKILL MARQUEE */}
        <div className="space-y-16 md:space-y-13 ">
          {portfolioData.skills.map((skillGroup, index) => (
            <div key={skillGroup.category}>
              <h3
                className="
                  mb-8
                  text-center
                  text-lg
                  md:text-xl
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-luxury-gold
                "
              >
                {skillGroup.category}
              </h3>

              <SkillMarquee
                items={skillGroup.items}
                direction={index % 2 === 0 ? "left" : "right"}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}