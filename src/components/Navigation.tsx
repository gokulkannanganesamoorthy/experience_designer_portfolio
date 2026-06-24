"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-500 ${
        scrolled ? "bg-pure-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <Link href="/" className="text-sm font-medium tracking-tight hover:text-soft-gray transition-colors">
        Gokul Kannan
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-soft-gray">
        <Link href="#work" className="hover:text-white transition-colors">Work</Link>
        <Link href="#links" className="hover:text-white transition-colors">Links</Link>
      </nav>

      <button className="md:hidden text-sm font-medium hover:text-soft-gray transition-colors">
        Menu
      </button>
    </motion.header>
  );
}
