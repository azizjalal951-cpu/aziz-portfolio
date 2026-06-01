import ContactCard from "../components/ContactCard";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-black
        px-6
        py-20
        pt-13
        scroll-mt-28
        md:px-12
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_40%)]
          pointer-events-none
        "
      />

      <div className="mx-auto max-w-6xl">
        {/* Section Intro */}
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
            Contact
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
            Let’s create impactful digital experiences with modern design and cinematic engineering.
          </h2>
        </div>

        {/* Contact Card */}
        <ContactCard />
      </div>
    </section>
  );
}