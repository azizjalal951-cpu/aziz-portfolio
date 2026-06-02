import Link from "next/link";
import { portfolioData } from "../data/portfolioData";
import {
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
} from "react-icons/fa";

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

      <div
        className="
          relative
          z-10
          grid
          gap-12
          lg:grid-cols-[1.5fr_0.8fr]
        "
      >
        {/* LEFT SIDE */}
        <div>
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
              azizjalal951@gmail.com
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={portfolioData.socials.github}
              target="_blank"
              className="text-sm uppercase tracking-[0.2em] text-white/50 hover:text-luxury-gold transition-colors"
            >
              Github
            </Link>

            <Link
              href={portfolioData.socials.instagram}
              target="_blank"
              className="text-sm uppercase tracking-[0.2em] text-white/50 hover:text-luxury-gold transition-colors"
            >
              Instagram
            </Link>

            <Link
              href={portfolioData.socials.Whatsapp}
              target="_blank"
              className="text-sm uppercase tracking-[0.2em] text-white/50 hover:text-luxury-gold transition-colors"
            >
              Whatsapp
            </Link>

            <Link
              href={portfolioData.socials.linkedin}
              target="_blank"
              className="text-sm uppercase tracking-[0.2em] text-white/50 hover:text-luxury-gold transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            flex
            flex-col
            gap-8
            border-t
            border-white/10
            pt-8
            lg:border-t-0
            lg:border-l
            lg:pl-10
            lg:pt-0
          "
        >
          {/* Availability */}
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              Availability
            </p>

            <div
              className="
                mt-3
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-luxury-gold/20
                bg-luxury-gold/10
                px-4
                py-2
                text-sm
                text-luxury-gold
              "
            >
              <FaBriefcase className="text-xs" />
              Open For Work
            </div>
          </div>

          {/* Location */}
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              Location
            </p>

            <div
                className="
                  mt-3
                  flex
                  items-start
                  gap-3
                "
              >
                <FaMapMarkerAlt className="text-luxury-gold" />
              
              <p className="mt-3 text-white/70">
                Tabalong, South Kalimantan
                <br />
                Indonesia
              </p>
            </div>
          </div>

          {/* Response */}
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              Response
            </p>
            <div className="
                  mt-3
                  flex
                  items-center
                  gap-3
                "
              >
                <FaClock className="text-luxury-gold" />
              <p className="mt-3 text-white/70">
                Usually within 5 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}