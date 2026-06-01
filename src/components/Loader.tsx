"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-black
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_55%)]
        "
      />

      {/* Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 1 },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative"
      >
        {/* Gold Glow Behind Image */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            blur-3xl
            bg-luxury-gold/10
            scale-125
          "
        />

        <div
          className="
            relative
            h-96
            w-72
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            shadow-[0_0_50px_rgba(212,175,55,0.12)]
          "
        >
          <Image
            src="/images/Loader.webp"
            alt="Portfolio Loader"
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="
          mt-10
          text-xl
          md:text-3xl
          font-light
          tracking-[0.22em]
          text-white
          text-center
        "
      >
        Building Ideas Into Reality
      </motion.h1>

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-center"
      >
        <h2
          className="
            text-lg
            md:text-xl
            font-semibold
            tracking-[0.08em]
            text-white
          "
        >
          Muhammad Aziz Jalaluddin
        </h2>

        <p
          className="
            mt-1
            text-xs
            uppercase
            tracking-[0.35em]
            text-luxury-gold
          "
        >
          Full Stack Developer
        </p>
      </motion.div>
      {/* Loading Text */}
      <motion.p
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="
          mt-4
          text-xs
          uppercase
          tracking-[0.45em]
          text-luxury-gold
        "
      >
        Wait...
      </motion.p>

      {/* Progress Line */}
      <div
        className="
          mt-4
          h-[3px]
          w-72
          overflow-hidden
          rounded-full
          bg-white/10
        "
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 5,
            ease: "easeInOut",
          }}
          className="
            h-full
            bg-luxury-gold
            shadow-[0_0_12px_rgba(212,175,55,0.7)]
          "
        />
      </div>
    </motion.div>
  );
}