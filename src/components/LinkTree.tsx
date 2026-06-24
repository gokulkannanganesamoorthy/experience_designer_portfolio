"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { title: "Art Portfolio", url: "https://gokulkannanganesamoorthy.dev" },
  { title: "SaaS Landing Page", url: "https://gokul-saasify.vercel.app" },
  { title: "Neon Commerce", url: "https://gokul-neon-commerce.vercel.app" },
  { title: "Photography", url: "https://gokul-photography-site.vercel.app" },
  { title: "Dino Portfolio", url: "https://gokulkannanganesamoorthy-dino-portfolio.vercel.app" },
  { title: "F1 Portfolio", url: "http://gokulkannanganesamoorthy.vercel.app" },
  { title: "Luno Tech", url: "https://lunotech.in" },
  { title: "Luno Shawarma", url: "http://luno-shawarma.netlify.app" },
  { title: "Lexo", url: "https://ggokulkannan2006.wixsite.com/lexo" },
  { title: "Satta Pai", url: "http://sattapai.netlify.app" },
  { title: "GitHub", url: "http://github.com/gokulkannanganesamoorthy" },
  { title: "LinkedIn", url: "http://linkedin.com/in/gokulkannanganesamoorthy/" },
  { title: "Instagram", url: "https://www.instagram.com/gokulkannanganesamoorthy" },
];

export default function LinkTree() {
  return (
    <section id="links" className="min-h-screen bg-pure-black py-32 px-6 flex flex-col items-center justify-center relative z-20 border-t border-white/5">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 h-24 mx-auto rounded-full bg-charcoal mb-8 border border-white/10 overflow-hidden"
          >
            {/* You can place an actual image here later */}
            <div className="w-full h-full bg-gradient-to-br from-warm-metallic to-charcoal opacity-50" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">Gokul Kannan</h2>
          <p className="text-soft-gray font-light text-lg">Digital Experience Curator</p>
        </div>

        <div className="flex flex-col gap-4">
          {links.map((link, i) => (
            <motion.a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative flex items-center justify-between p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              <span className="text-xl font-light text-white group-hover:text-warm-metallic transition-colors relative z-10">
                {link.title}
              </span>
              <ArrowUpRight className="text-soft-gray group-hover:text-warm-metallic transition-colors group-hover:rotate-45 relative z-10" />
            </motion.a>
          ))}
        </div>

        <div className="mt-32 text-center text-sm text-soft-gray/50 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Designed the Invisible.
        </div>
      </div>
    </section>
  );
}
