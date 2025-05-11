"use client";
import { useMemo } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize"
export default function ParallaxBackground() {

  const { width } = useWindowSize();

  const { scrollYProgress } = useScroll();

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 60,
    mass: 1,
  });

  const translateY = useTransform(smoothScroll, [0, 0.1, 0.3, 0.5, 1], ["0", '40%', '120%', '160%', '120%']);

  const planetClass = useMemo(() => width <= 640
    ? "transition duration-500 ease-out"
    : "", [width])

  return (
    <>
      <motion.div
        className="glow-blue z-5 absolute bg-[url('/bg_glow_blue.svg')] max-sm:w-[50%] max-sm:h-[50%] w-[50rem] h-[50rem] top-[-6%] left-[16%] bg-no-repeat [background-size:100%_100%]"
        style={{
          translateY
        }}
      >
      </motion.div>
      <motion.div
        className={`planet z-4 absolute bg-[url('/planet.png')] bg-cover bg-center max-lg:w-[100%] w-[48%] h-full top-[19%] right-0 ${planetClass} `}
        style={{
          translateY,
        }}
      />

      <motion.div
        className="glow-blue z-5 absolute bg-[url('/bg_glow_orange.svg')] max-sm:w-[50%] max-sm:h-[50%] w-[50rem] h-[50rem] top-[55%] bg-no-repeat [background-size:100%_100%]"
        style={{
          translateY
        }}
        transition={{
          top: { duration: 0.7, ease: "easeOut", delay: 0 },
          opacity: { duration: 0.9, ease: "easeIn", delay: 0.2 },
        }}
      >
      </motion.div>
    </>
  );
}