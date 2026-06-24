"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-pure-black px-8 md:px-12">
      {/* Placeholder — we'll design this later */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white leading-none">
          Designing the Invisible.
        </h1>
        <p className="mt-8 text-sm md:text-base text-white/40 font-light tracking-wide max-w-md mx-auto">
          I explore, design, and build digital experiences that people remember.
        </p>
      </motion.div>
    </section>
  );
}
