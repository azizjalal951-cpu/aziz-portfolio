import Link from "next/link";
import { portfolioData } from "../data/portfolioData";

export default function ContactCard() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[2rem]
        border border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
        md:p-10
      "
    >
      {/* Ambient Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]
          pointer-events-none
        "
      />

      <div className="relative z-10">
        {/* Label */}
        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-white/40
          "
        >
          Let’s Connect
        </p>

        {/* Heading */}
        <h3
          className="
            mt-4
            max-w-2xl
            text-3xl
            font-light
            leading-tight
            tracking-tight
            text-white
            md:text-4xl
          "
        >
          Ready to build modern digital experiences together.
        </h3>

        {/* Description */}
        <p
          className="
            mt-6
            max-w-xl
            text-base
            leading-relaxed
            text-white/65
          "
        >
          Available for freelance projects, premium web experiences,
          and modern frontend development collaborations.
        </p>

        {/* Email CTA */}
        <div className="mt-10">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=azizjalal951@gmail.com"
            className="
              inline-flex
              items-center
              rounded-full
              border border-white/10
              bg-white/5
              px-6
              py-3
              text-sm
              uppercase
              tracking-[0.2em]
              text-luxury-gold
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/10
              hover:text-white
            "
          >
            azizjalal951@email.com
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={portfolioData.socials.github}
            target="_blank"
            className="
              text-sm
              uppercase
              tracking-[0.2em]
              text-white/50
              transition-colors
              duration-300
              hover:text-luxury-gold
            "
          >
            Github
          </Link>

          <Link
            href={portfolioData.socials.instagram}
            target="_blank"
            className="
              text-sm
              uppercase
              tracking-[0.2em]
              text-white/50
              transition-colors
              duration-300
              hover:text-luxury-gold
            "
          >
            Instagram
          </Link>

          <Link
            href={portfolioData.socials.Whatsapp}
            target="_blank"
            className="
              text-sm
              uppercase
              tracking-[0.2em]
              text-white/50
              transition-colors
              duration-300
              hover:text-luxury-gold
            "
          >
            Whatsapp
          </Link>
        </div>
      </div>
    </div>
  );
}