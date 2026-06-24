"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 min-h-screen flex flex-col justify-between">
      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl text-soft-gray font-light mb-12"
        >
          &quot;The best experiences aren&apos;t noticed.<br />
          <span className="text-white font-medium">They&apos;re felt.</span>&quot;
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-16"
        >
          Let&apos;s build something <br className="hidden md:block" />
          <span className="text-warm-metallic italic">people remember.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="mailto:hello@gokulkannan.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 active:scale-95 transition-transform"
          >
            Start a conversation
          </a>
        </motion.div>
      </div>

      <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-soft-gray text-sm">
          © {new Date().getFullYear()} Gokul Kannan. All rights reserved.
        </p>
        
        <div className="flex gap-8 text-sm font-medium">
          <a href="https://linkedin.com/in/iamgokulkannan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-soft-gray hover:text-white transition-colors">
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a href="https://instagram.com/iamgokulkannan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-soft-gray hover:text-white transition-colors">
            Instagram <ArrowUpRight size={14} />
          </a>
          <a href="https://github.com/iamgokulkannan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-soft-gray hover:text-white transition-colors">
            GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
