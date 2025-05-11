"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useUIStore } from "../stores/UIstore";
import { useBreakpointValue } from "../hooks/useBreakPointsValue";

export default function ProjectsSection() {
  const setCometIsVisible = useUIStore((s) => s.setCometIsVisible);
  const xValue = useBreakpointValue({
    sm: -150,
    md: -400,
    lg: -700,
    xl: -850,
  });
  return (
    <section id="projects" className="flex flex-col justify-center items-center relative  h-screen overflow-hidden">
      <h2 className="font-[var(--third-family)] text-[4rem] text-center text-white">Projects integrated into the Arrakis AI Ecosystem</h2>

      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: xValue }}
        transition={{ duration: 0.8 }}
        onAnimationComplete={() => {
          setCometIsVisible(true);
        }}
        className="w-[200%] max-md:w-[150%] flex h-auto"
      >
        <Image
          src="/slide.png"
          alt="Alt text"
          width={1200}
          height={300}
          className="w-full h-auto"
        >
        </Image>
        <Image
          src="/slide.png"
          alt="Alt text"
          width={1200}
          height={300}
          className="w-full h-auto"
        >
        </Image>

      </motion.div>
    </section>
  );
}