import ProjectsShowcase from "../components/ProjectsShowcase";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-18 pt-10 px-4 bg-luxury-dark text-luxury-light"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-3 mb-12">
        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
          Selected <span className="text-luxury-gold">Work</span>
        </h2>

        <p className="text-xs md:text-sm text-luxury-light max-w-xl leading-relaxed">
          A curated collection of products, dashboards,
and digital experiences crafted with performance,
scalability, and premium user experience.
        </p>
      </div>

      {/* Showcase */}
      <div className="max-w-4xl mx-auto">
        <ProjectsShowcase />
      </div>
    </section>
  );
}