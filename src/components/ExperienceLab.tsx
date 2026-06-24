"use client";

import { motion } from "framer-motion";

const experiments = [
  "Micro interactions",
  "Creative coding",
  "Motion studies",
  "AI projects",
  "Cybersecurity tools"
];

export default function ExperienceLab() {
  return (
    <section className="py-32 px-6 md:px-12 bg-charcoal">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-sm font-medium tracking-widest uppercase text-soft-gray mb-4">Experience Lab</h2>
          <p className="text-xl font-light text-white mb-8">
            A playground for interactive experiments and creative engineering.
          </p>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {experiments.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square bg-pure-black border border-white/5 rounded-2xl p-8 flex items-end hover:border-white/20 transition-colors group cursor-pointer"
            >
              <h3 className="text-lg text-soft-gray group-hover:text-white transition-colors">{exp}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
