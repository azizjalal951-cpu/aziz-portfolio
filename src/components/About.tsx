import { portfolioData } from "../data/portfolioData";


export default function About() {
    
  return (
    <section id="about" className="px-6 py-16 md:py-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <p className="text-luxury-gold tracking-[0.3em] text-sm mb-4">
            {portfolioData.about.title}
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {portfolioData.about.heading}
          </h2>

          <p className="text-white/70 leading-relaxed text-lg">
            {portfolioData.about.description}
          </p>
          
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 gap-6">

          <div className="glass-premium rounded-3xl p-6 border border-white/5">
            <h3 className="text-4xl font-bold text-luxury-gold mb-2">
              2+
            </h3>
            <p className="text-white/60">
              Years Learning
            </p>
          </div>

          <div className="glass-premium rounded-3xl p-6 border border-white/5">
            <h3 className="text-4xl font-bold text-luxury-gold mb-2">
              10+
            </h3>
            <p className="text-white/60">
              Projects Built
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}