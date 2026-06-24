"use client";

import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <>
      {/* Top Left Logo / Name */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-8 left-8 z-50 mix-blend-difference pointer-events-none"
      >
        <span className="text-sm font-medium tracking-widest text-white uppercase">
          Gokul<br/>Kannan
        </span>
      </motion.div>

      {/* Vertical Navigation - Right Edge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 mix-blend-difference flex flex-col gap-16"
      >
        <a href="#work" className="text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors" style={{ writingMode: 'vertical-rl' }}>
          Experiences
        </a>
        <a href="#links" className="text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors" style={{ writingMode: 'vertical-rl' }}>
          Constellation
        </a>
      </motion.div>

      {/* Bottom Left - Role */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="fixed bottom-8 left-8 z-50 mix-blend-difference pointer-events-none"
      >
        <span className="text-xs font-light tracking-[0.2em] text-white/50 uppercase">
          Digital Experience Curator
        </span>
      </motion.div>
    </>
  );
}
