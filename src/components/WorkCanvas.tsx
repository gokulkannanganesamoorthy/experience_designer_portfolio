"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "The Gryd",
    description: "Immersive 3D web experiences.",
    color: "bg-[#1a1a1a]"
  },
  {
    title: "Orrayson Studio",
    description: "Story-driven interactive portfolio.",
    color: "bg-[#111111]"
  },
  {
    title: "Preethi Sakana",
    description: "Unified, minimalist platform.",
    color: "bg-[#0a0a0a]"
  },
];

export default function WorkCanvas() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" ref={container} className="relative bg-pure-black pb-[20vh]">
      {/* Sticky About Section */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 overflow-hidden">
        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]),
            scale: useTransform(scrollYProgress, [0, 0.3], [1, 0.9])
          }}
          className="max-w-4xl text-center z-0"
        >
          <p className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-soft-gray mix-blend-difference">
            I don&apos;t just build websites. <br />
            I curate <span className="text-white font-medium italic">digital experiences</span> <br />
            that blur the line between <br />
            art and engineering.
          </p>
        </motion.div>

        {/* Sticky Project Cards that overlap */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex flex-col items-center justify-center">
          {projects.map((project, i) => {
            const start = 0.3 + (i * 0.2);
            const end = start + 0.2;
            
            // Each card comes up from the bottom and stacks
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [start - 0.1, start, end], ["100vh", "0vh", "0vh"]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(scrollYProgress, [start, end, end + 0.1], [1, 1, 0.95]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start - 0.1, start], [0, 1]);

            return (
              <motion.div
                key={i}
                style={{ y, scale, opacity }}
                className={`absolute w-[90vw] md:w-[70vw] h-[70vh] rounded-3xl ${project.color} border border-white/5 flex flex-col items-center justify-center pointer-events-auto p-12 shadow-2xl`}
              >
                <p className="text-sm uppercase tracking-[0.2em] text-soft-gray/50 mb-6">Curated Piece 0{i + 1}</p>
                <h2 className="text-5xl md:text-7xl font-medium text-white mb-4 text-center">{project.title}</h2>
                <p className="text-xl text-soft-gray font-light text-center max-w-md">{project.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Spacer to allow scrolling */}
      <div className="h-[300vh]"></div>
    </section>
  );
}
