"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 flex items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-medium leading-tight md:leading-tight text-soft-gray"
        >
          As a <span className="text-white">Digital Experience Builder</span>, my work bridges the gap between design and engineering. I don&apos;t just write code—I craft stories through <span className="text-white italic">design, development, storytelling,</span> and <span className="text-white">user experience</span>.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-12 text-lg md:text-xl text-soft-gray/60 max-w-2xl font-light"
        >
          Every detail matters. True digital craftsmanship is found in the micro-interactions, the performance optimization, and the intentional use of whitespace. The best experiences aren&apos;t noticed—they are felt.
        </motion.p>
      </div>
    </section>
  );
}
