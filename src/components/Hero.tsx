"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // Zooming IN towards the camera. Starts at 1, goes up to 5 (massive), passing the camera.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], ["blur(0px)", "blur(0px)", "blur(20px)"]);

  return (
    <section 
      ref={container}
      className="relative h-[200vh] w-full bg-pure-black"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale, opacity, filter: blur }}
          className="flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] md:text-[12vw] font-bold tracking-tighter leading-none text-center text-white mix-blend-difference"
          >
            DESIGNING
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] md:text-[12vw] font-bold tracking-tighter leading-none text-center text-transparent bg-clip-text bg-gradient-to-br from-soft-gray to-charcoal italic"
          >
            EXPERIENCES
          </motion.h1>
        </motion.div>

        {/* Depth grid lines to enhance the feeling of moving forward through space */}
        <div className="absolute inset-0 pointer-events-none opacity-20"
             style={{
               backgroundImage: `radial-gradient(circle at center, transparent 0%, var(--color-pure-black) 100%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
               backgroundSize: `100% 100%, 50px 50px, 50px 50px`,
               backgroundPosition: `center center`,
               transform: `perspective(500px) rotateX(60deg) scale(2) translateY(-100px)`,
             }}
        />
      </div>
    </section>
  );
}
