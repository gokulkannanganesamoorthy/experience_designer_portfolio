"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "The Gryd",
    industry: "Architecture & Real Estate",
    problem: "Outdated property visualization.",
    strategy: "Immersive 3D web experiences.",
    outcome: "Increased user engagement by 40%.",
    color: "bg-[#1a1a1a]"
  },
  {
    title: "Orrayson Studio",
    industry: "Creative Agency",
    problem: "Generic digital presence.",
    strategy: "Story-driven interactive portfolio.",
    outcome: "Award-winning digital experience.",
    color: "bg-[#111111]"
  },
  {
    title: "Preethi Sakana",
    industry: "Personal Brand",
    problem: "Fragmented digital identity.",
    strategy: "Unified, minimalist platform.",
    outcome: "Cohesive brand perception.",
    color: "bg-[#0a0a0a]"
  },
  {
    title: "Pocket Full of Wellness",
    industry: "Health & Wellness",
    problem: "Complex user onboarding.",
    strategy: "Frictionless, calm UI/UX.",
    outcome: "Streamlined user acquisition.",
    color: "bg-[#141414]"
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col md:flex-row items-center gap-12 w-full mb-32 last:mb-0"
    >
      <div className={`w-full md:w-3/5 h-[50vh] md:h-[70vh] rounded-lg overflow-hidden relative ${project.color}`}>
        {/* Placeholder for actual image. using parallax motion on a child element */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 w-full h-[120%] -top-[10%] bg-charcoal/50 flex items-center justify-center border border-white/5"
        >
           <span className="text-white/20 font-light tracking-widest uppercase">{project.title} Visual</span>
        </motion.div>
      </div>
      
      <div className="w-full md:w-2/5 flex flex-col justify-center">
        <h3 className="text-3xl md:text-5xl font-medium mb-6 text-white group-hover:text-warm-metallic transition-colors flex items-center gap-4">
          {project.title}
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0" size={32} />
        </h3>
        
        <div className="space-y-6 text-soft-gray font-light">
          <div>
            <p className="text-xs uppercase tracking-widest text-soft-gray/50 mb-1">Industry</p>
            <p className="text-lg">{project.industry}</p>
          </div>
          <div className="h-px w-full bg-white/10" />
          <div>
            <p className="text-xs uppercase tracking-widest text-soft-gray/50 mb-1">Problem</p>
            <p className="text-lg">{project.problem}</p>
          </div>
          <div className="h-px w-full bg-white/10" />
          <div>
            <p className="text-xs uppercase tracking-widest text-soft-gray/50 mb-1">Strategy</p>
            <p className="text-lg">{project.strategy}</p>
          </div>
          <div className="h-px w-full bg-white/10" />
          <div>
            <p className="text-xs uppercase tracking-widest text-soft-gray/50 mb-1">Outcome</p>
            <p className="text-white">{project.outcome}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="mb-24">
        <h2 className="text-sm font-medium tracking-widest uppercase text-soft-gray mb-4">Selected Work</h2>
        <p className="text-3xl md:text-4xl font-light text-white max-w-2xl">
          A collection of digital experiences crafted with intention and precision.
        </p>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
