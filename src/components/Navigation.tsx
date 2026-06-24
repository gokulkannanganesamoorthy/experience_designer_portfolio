"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Architectural Navigation */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 pt-8"
      >
        {/* The Line */}
        <div className="w-full h-px bg-white/20" />

        {/* Below the line */}
        <div className="flex items-center justify-between pt-5">
          <span className="text-sm font-light tracking-wide text-white">
            Gokul Kannan
          </span>

          {/* Circular Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors duration-500 group"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[3px] items-center">
              <span className={`block w-4 h-px bg-white/70 group-hover:bg-white transition-all duration-500 ${menuOpen ? 'rotate-45 translate-y-[2px]' : ''}`} />
              <span className={`block w-4 h-px bg-white/70 group-hover:bg-white transition-all duration-500 ${menuOpen ? '-rotate-45 -translate-y-[2px]' : ''}`} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Full-Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-pure-black/95 backdrop-blur-sm flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-12">
              {[
                { label: "Home", href: "#" },
                { label: "About", href: "#about" },
                { label: "Links", href: "#links" },
                { label: "Contact", href: "#contact" },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-4xl md:text-6xl font-light text-white/80 hover:text-white transition-colors duration-300 tracking-tight"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
