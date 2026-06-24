"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Why some websites feel premium",
    date: "04.2024",
    category: "Design Theory"
  },
  {
    title: "Designing the invisible",
    date: "03.2024",
    category: "User Experience"
  },
  {
    title: "Details people don't notice",
    date: "02.2024",
    category: "Craftsmanship"
  },
  {
    title: "Experience breakdowns",
    date: "01.2024",
    category: "Case Study"
  }
];

export default function Thinking() {
  return (
    <section id="thinking" className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-sm font-medium tracking-widest uppercase text-soft-gray mb-4">Thinking</h2>
          <p className="text-3xl md:text-4xl font-light text-white max-w-xl">
            Thoughts on design, engineering, and the spaces in between.
          </p>
        </div>
        <button className="group flex items-center gap-2 text-sm font-medium text-white hover:text-warm-metallic transition-colors">
          View all articles 
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="border-t border-white/10">
        {articles.map((article, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 cursor-pointer hover:bg-white/5 transition-colors -mx-6 px-6 md:-mx-12 md:px-12"
          >
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-warm-metallic transition-colors mb-2 md:mb-0">
                {article.title}
              </h3>
            </div>
            <div className="flex items-center gap-8 text-soft-gray font-light text-sm">
              <span className="uppercase tracking-widest">{article.category}</span>
              <span>{article.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
