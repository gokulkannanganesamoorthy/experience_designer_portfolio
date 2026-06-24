"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "The Gryd",
    description: "Immersive 3D web experiences.",
    bg: "bg-[#050505]"
  },
  {
    title: "Orrayson Studio",
    description: "Story-driven interactive portfolio.",
    bg: "bg-[#0a0a0a]"
  },
  {
    title: "Preethi Sakana",
    description: "Unified, minimalist platform.",
    bg: "bg-[#111111]"
  },
  {
    title: "Pocket Full of Wellness",
    description: "Frictionless, calm UI/UX.",
    bg: "bg-[#080808]"
  }
];

export default function WorkCanvas() {
  const container = useRef(null);
  // We make the section extremely tall so we have plenty of scroll distance to zoom through
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" ref={container} className="relative bg-pure-black" style={{ height: `${projects.length * 200}vh` }}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-1000">
        
        {projects.map((project, i) => {
          // Calculate the scroll range for each project
          // Total progress is 1. We divide by number of projects.
          const step = 1 / projects.length;
          const start = i * step;
          const peak = start + (step / 2);
          const end = start + step;

          // Scale: starts tiny far away (0.1), comes to readable size (1), then flies past the camera (5)
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const scale = useTransform(scrollYProgress, [start, peak, end], [0.1, 1, 8]);
          // Opacity: fades in as it approaches, fully visible at peak, fades out quickly as it passes camera
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const opacity = useTransform(scrollYProgress, [start, peak - 0.05, peak, peak + 0.1, end], [0, 1, 1, 0, 0]);
          // Blur: slightly blurred when far, sharp at peak, heavily blurred as it rushes past
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const blur = useTransform(scrollYProgress, [start, peak, end], ["blur(10px)", "blur(0px)", "blur(20px)"]);

          return (
            <motion.div
              key={i}
              style={{ scale, opacity, filter: blur }}
              className={`absolute w-[80vw] h-[60vh] md:w-[60vw] md:h-[70vh] rounded-[2rem] ${project.bg} border border-white/5 flex flex-col items-center justify-center p-8 text-center shadow-2xl`}
            >
              <div className="w-full h-full border border-white/10 rounded-2xl flex flex-col items-center justify-center p-12 bg-gradient-to-b from-transparent to-black/50">
                <p className="text-xs uppercase tracking-[0.4em] text-soft-gray mb-8">Curated Piece 0{i + 1}</p>
                <h2 className="text-5xl md:text-8xl font-medium text-white mb-6 tracking-tighter mix-blend-difference">{project.title}</h2>
                <p className="text-xl md:text-2xl text-soft-gray font-light max-w-lg">{project.description}</p>
                
                <div className="mt-12 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group hover:bg-white transition-colors cursor-pointer">
                  <span className="text-white group-hover:text-black text-xl font-light">Explore</span>
                </div>
              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
