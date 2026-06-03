"use client";

import { motion } from "framer-motion";
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

const getIcon = (skillName: string) => {
  const name = skillName.toLowerCase();

  if (name.includes("react"))
    return <Code2 className="w-4 h-4 text-[#61DAFB]" />;

  if (name.includes("next"))
    return <Layers className="w-4 h-4 text-white" />;

  if (name.includes("tailwind"))
    return <Wind className="w-4 h-4 text-[#38BDF8]" />;

  if (name.includes("typescript"))
    return <FileJson className="w-4 h-4 text-[#3178C6]" />;

  if (name.includes("framer"))
    return <Boxes className="w-4 h-4 text-[#F107A3]" />;

  if (name.includes("node"))
    return <Server className="w-4 h-4 text-[#339933]" />;

  if (name.includes("mysql"))
    return <Database className="w-4 h-4 text-[#4479A1]" />;

  if (name.includes("supabase"))
    return <Zap className="w-4 h-4 text-[#3ECF8E]" />;

  if (name.includes("postgres"))
    return <Database className="w-4 h-4 text-[#4169E1]" />;

  if (name.includes("api"))
    return <Globe className="w-4 h-4 text-luxury-gold" />;

  if (name.includes("git"))
    return <GitBranch className="w-4 h-4 text-[#F05032]" />;

  return <Code2 className="w-4 h-4 text-white/60" />;
};

interface SkillMarqueeProps {
  items: string[];
  direction: "left" | "right";
}

export default function SkillMarquee({
  items,
  direction,
}: SkillMarqueeProps) {
  const repeated = [...items, ...items, ...items];

  return (
    <div
        className="
            overflow-hidden
            [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
            [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
        "
        >
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x:
            direction === "left"
              ? ["0%", "-50%"]
              : ["-50%", "0%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeated.map((item, index) => (
            <div
                key={index}
                className="
                flex
                items-center
                gap-2

                flex-shrink-0

                rounded-full
                border border-white/10
                bg-white/[0.04]

                px-5
                py-3

                text-sm
                text-white/80

                transition-all
                duration-300

                hover:text-luxury-gold
                hover:border-luxury-gold/30
                "
            >
                {getIcon(item)}
                <span>{item}</span>
            </div>
            ))}
      </motion.div>
    </div>
  );
}