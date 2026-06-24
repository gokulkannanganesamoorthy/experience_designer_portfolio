"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={container}
      className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden"
    >
      <motion.div 
        style={{ y, opacity }}
        className="max-w-5xl z-10"
      >
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1] mb-6"
        >
          Designing the <span className="text-soft-gray italic">Invisible.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-lg md:text-2xl text-soft-gray max-w-2xl mb-12 font-light leading-relaxed"
        >
          I explore, design, and build digital experiences that people remember.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="flex flex-wrap items-center gap-6"
        >
          <Link 
            href="#work" 
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95"
          >
            <span>View Work</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link 
            href="#thinking" 
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white transition-colors hover:text-warm-metallic"
          >
            Explore Thinking
          </Link>
        </motion.div>
      </motion.div>

      {/* Abstract Background Element */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 150, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-charcoal/40 to-transparent blur-3xl opacity-50"
        />
      </div>
    </section>
  );
}
