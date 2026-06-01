import { portfolioData } from "../data/portfolioData";
import { 
  Code2, 
  Layers, 
  Wind, 
  FileJson, 
  Boxes, 
  Server, 
  Database, 
  Zap, 
  Globe, 
  GitBranch 
} from "lucide-react";

export default function Skills() {
  // Helper untuk menentukan icon berdasarkan nama software
  const getIcon = (skillName: string) => {
    const name = skillName.toLowerCase();
    
    // Frontend
    if (name.includes("react")) return <Code2 className="w-4 h-4 text-[#61DAFB]" />;
    if (name.includes("next")) return <Layers className="w-4 h-4 text-white" />;
    if (name.includes("tailwind")) return <Wind className="w-4 h-4 text-[#38BDF8]" />;
    if (name.includes("typescript")) return <FileJson className="w-4 h-4 text-[#3178C6]" />;
    if (name.includes("framer")) return <Boxes className="w-4 h-4 text-[#F107A3]" />;
    
    // Backend & Infra
    if (name.includes("node")) return <Server className="w-4 h-4 text-[#339933]" />;
    if (name.includes("mysql")) return <Database className="w-4 h-4 text-[#4479A1]" />;
    if (name.includes("supabase")) return <Zap className="w-4 h-4 text-[#3ECF8E]" />;
    if (name.includes("postgresql") || name.includes("postgres")) return <Database className="w-4 h-4 text-[#4169E1]" />;
    if (name.includes("api")) return <Globe className="w-4 h-4 text-luxury-gold" />;
    if (name.includes("git")) return <GitBranch className="w-4 h-4 text-[#F05032]" />;
    
    // Default icon jika tidak ada yang cocok
    return <Code2 className="w-4 h-4 text-white/60" />;
  };

  return (
    <section
        id="skills"
        className="
            scroll-mt-32
            relative
            z-10
            overflow-hidden
            py-16
            md:py-28
            px-6
            bg-[url('/images/bgfokus.webp')]                                  
            bg-cover
            bg-center
            bg-no-repeat
        "
        >
    {/* Di bawah ini adalah overlay opsional (kaca film transparan) 
        agar teks putih Anda tetap kontras dan mudah dibaca */}
    <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-luxury-gold tracking-[0.3em] text-sm mb-4 uppercase">
            Technical Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology I Use
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            Focus on modern web development with high performance, premium design, and scalable architecture.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.skills.map((skillGroup, index) => (
            <div
              key={index}
              className="
              glass-premium
              rounded-3xl
              p-8
              border border-white/5
              hover:border-luxury-gold/20
              transition-all duration-500
              hover:-translate-y-1
              "
            >
              {/* CATEGORY */}
              <h3 className="text-2xl font-bold text-luxury-gold mb-6">
                {skillGroup.category}
              </h3>

              {/* ITEMS */}
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-xl
                    bg-white/[0.04]
                    border border-white/[0.06]
                    text-sm
                    text-white/80
                    hover:text-luxury-gold
                    hover:border-luxury-gold/20
                    hover:bg-white/[0.06]
                    transition-all duration-300
                    "
                  >
                    {/* Memanggil fungsi icon di sini */}
                    {getIcon(item)}
                    <span>{item}</span>
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}