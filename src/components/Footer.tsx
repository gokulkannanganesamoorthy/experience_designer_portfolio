"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projectLinks = [
  { title: "Art Portfolio", url: "https://gokulkannanganesamoorthy.dev" },
  { title: "SaaS Landing", url: "https://gokul-saasify.vercel.app" },
  { title: "Neon Commerce", url: "https://gokul-neon-commerce.vercel.app" },
  { title: "Photography", url: "https://gokul-photography-site.vercel.app" },
  { title: "Dino Portfolio", url: "https://gokulkannanganesamoorthy-dino-portfolio.vercel.app" },
  { title: "F1 Portfolio", url: "http://gokulkannanganesamoorthy.vercel.app" },
  { title: "Luno Tech", url: "https://lunotech.in" },
];

const socialLinks = [
  { title: "GitHub", url: "http://github.com/gokulkannanganesamoorthy" },
  { title: "LinkedIn", url: "http://linkedin.com/in/gokulkannanganesamoorthy/" },
  { title: "Instagram", url: "https://www.instagram.com/gokulkannanganesamoorthy" },
  { title: "Satta Pai", url: "http://sattapai.netlify.app" },
  { title: "Luno Shawarma", url: "http://luno-shawarma.netlify.app" },
  { title: "Lexo", url: "https://ggokulkannan2006.wixsite.com/lexo" },
];

export default function Footer() {
  return (
    <section id="links" className="relative bg-pure-black px-8 md:px-12">

      {/* Philosophy Quote — from Concept A */}
      <div className="py-32 md:py-48 flex items-center justify-center border-t border-white/10">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-light text-white text-center leading-snug tracking-tight max-w-4xl"
        >
          The best experiences<br />
          aren&apos;t noticed.<br />
          <span className="text-white/40 italic">They&apos;re felt.</span>
        </motion.blockquote>
      </div>

      {/* Editorial Split — from Concept C (final) */}
      <div id="contact" className="border-t border-white/10 py-20 md:py-32">
        <div className="flex flex-col md:flex-row gap-20 md:gap-0">

          {/* Left Column — Monogram + Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:w-1/3 flex flex-col justify-between"
          >
            <span className="text-8xl md:text-[10rem] font-light text-white/10 leading-none tracking-tighter">
              G
            </span>
            <div className="mt-12 md:mt-auto">
              <p className="text-xs text-white/30 tracking-widest uppercase">
                © {new Date().getFullYear()} Gokul Kannan
              </p>
              <p className="text-xs text-white/20 mt-1 tracking-wide">
                Digital Experience Curator
              </p>
            </div>
          </motion.div>

          {/* Right Column — Link Directory */}
          <div className="md:w-2/3 md:pl-20 md:border-l md:border-white/10">
            
            {/* Projects */}
            <div className="mb-16">
              <p className="text-xs text-white/30 uppercase tracking-[0.3em] mb-8">Projects</p>
              <div className="flex flex-col">
                {projectLinks.map((link, i) => (
                  <motion.a
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-white/20 transition-colors duration-500"
                  >
                    <span className="text-sm md:text-base font-light text-white/60 group-hover:text-white transition-colors duration-500">
                      {link.title}
                    </span>
                    <ArrowUpRight size={14} className="text-white/20 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social / Other */}
            <div>
              <p className="text-xs text-white/30 uppercase tracking-[0.3em] mb-8">Connect</p>
              <div className="flex flex-col">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-white/20 transition-colors duration-500"
                  >
                    <span className="text-sm md:text-base font-light text-white/60 group-hover:text-white transition-colors duration-500">
                      {link.title}
                    </span>
                    <ArrowUpRight size={14} className="text-white/20 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
