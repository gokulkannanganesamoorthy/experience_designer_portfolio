"use client";

import { motion } from "framer-motion";

const links = [
  { title: "Art Portfolio", url: "https://gokulkannanganesamoorthy.dev", x: "-30%", y: "-40%", scale: 1.2 },
  { title: "SaaS Landing Page", url: "https://gokul-saasify.vercel.app", x: "20%", y: "-30%", scale: 0.9 },
  { title: "Neon Commerce", url: "https://gokul-neon-commerce.vercel.app", x: "-10%", y: "-10%", scale: 1.5 },
  { title: "Photography", url: "https://gokul-photography-site.vercel.app", x: "40%", y: "0%", scale: 0.8 },
  { title: "Dino Portfolio", url: "https://gokulkannanganesamoorthy-dino-portfolio.vercel.app", x: "-40%", y: "20%", scale: 1.1 },
  { title: "F1 Portfolio", url: "http://gokulkannanganesamoorthy.vercel.app", x: "10%", y: "30%", scale: 1.3 },
  { title: "Luno Tech", url: "https://lunotech.in", x: "30%", y: "40%", scale: 1.0 },
  { title: "Luno Shawarma", url: "http://luno-shawarma.netlify.app", x: "-20%", y: "50%", scale: 0.85 },
  { title: "Lexo", url: "https://ggokulkannan2006.wixsite.com/lexo", x: "0%", y: "60%", scale: 0.95 },
  { title: "GitHub", url: "http://github.com/gokulkannanganesamoorthy", x: "-35%", y: "-15%", scale: 0.9 },
  { title: "LinkedIn", url: "http://linkedin.com/in/gokulkannanganesamoorthy/", x: "35%", y: "15%", scale: 1.1 },
  { title: "Instagram", url: "https://www.instagram.com/gokulkannanganesamoorthy", x: "-25%", y: "35%", scale: 1.2 },
];

export default function LinkTree() {
  return (
    <section id="links" className="relative h-screen bg-pure-black overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background radial gradient to give depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-charcoal)_0%,_var(--color-pure-black)_60%)] opacity-30" />

      <h2 className="absolute top-24 text-soft-gray uppercase tracking-[0.5em] text-xs font-medium z-10">
        The Constellation
      </h2>

      <div className="relative w-full max-w-7xl h-[70vh] mx-auto">
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0, x: link.x, y: link.y }}
            whileInView={{ opacity: 1, scale: link.scale }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1.5, 
              delay: i * 0.1, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            whileHover={{ 
              scale: link.scale * 1.1, 
              color: "#ffffff",
              textShadow: "0px 0px 20px rgba(255,255,255,0.8)" 
            }}
            className="absolute left-1/2 top-1/2 text-soft-gray/60 font-light whitespace-nowrap transition-colors duration-300 mix-blend-screen"
            style={{ 
              fontSize: `clamp(1rem, ${link.scale * 1.5}vw, 3rem)`,
              transform: `translate(-50%, -50%)`,
              zIndex: Math.floor(link.scale * 10)
            }}
          >
            {link.title}
          </motion.a>
        ))}
      </div>

      <div className="absolute bottom-12 text-center text-[10px] text-white/30 uppercase tracking-[0.3em]">
        © {new Date().getFullYear()} Gokul Kannan
      </div>

    </section>
  );
}
