"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { RefObject, useRef, useEffect } from "react";
import { useUIStore } from "../stores/UIstore";
import { useBreakpointValue } from "../hooks/useBreakPointsValue";
import { useWindowSize } from '../hooks/useWindowSize'

export default function CommunitySection({ joinSectionRef }: { joinSectionRef: React.RefObject<HTMLDivElement> | RefObject<null>, }) {

  const moonRef = useRef(null);
  const { scrollYProgress: moonScrollProgress } = useScroll({
    target: moonRef,
    offset: ['start end', 'end start'],
  });
  const cometIsVisible = useUIStore((s) => s.cometIsVisible);
  const setCometIsVisible = useUIStore((s) => s.setCometIsVisible);

  const smoothScroll = useSpring(moonScrollProgress, {
    stiffness: 60,
    damping: 20,
    mass: 1,
  });

  const resolvedTranslateXYMoon = useBreakpointValue({
    sm: [-100, 40, 800],
    md: [-2000, 0, 1600],
    lg: [-2000, 0, 1600],
    xl: [-2000, 0, 1600],
  }) as number[];

  const resolvedtranslateYMoon = useBreakpointValue({
    sm: [0, -15, 100],
    md: [0, 0, 300],
    lg: [0, 0, 300],
    xl: [0, 0, 300],
  }) as number[];


  useEffect(() => {
    if (moonScrollProgress.get() > 0 && !cometIsVisible) {
      setCometIsVisible(true);
    }

  }, [moonScrollProgress.get(), setCometIsVisible,cometIsVisible])



  const translateX = useTransform(smoothScroll, [0, 0.53, 1], resolvedTranslateXYMoon);
  const translateYMoon = useTransform(moonScrollProgress, [0, 0.53, 1], resolvedtranslateYMoon);
  const opacityMoon = useTransform(moonScrollProgress, [0, 0.53, 0.55, 1], [0.4, 1, 0.6, 0]);

  const { width } = useWindowSize()

  return (
    <section ref={joinSectionRef} className="w-[100%] h-[100vh] overflow-hidden">
      <div className="spice-container flex  justify-between items-center  h-[90vh] max-sm:flex-col max-sm:justify-center ">
        <div className="w-[53%] max-sm:w-[90%] max-sm:mt-[15%]  flex flex-col justify-center items-start ">
          <h2 className="font-[var(--third-family)]  text-[4rem] leading-[110%] text-white">Join our community</h2>
          <p className="font-[var(--second-family)]  text-[1.5rem] leading-[133%] text-white mt-[32px]">Join us on our mission to to the moon & revolutionize open source AI development so that we can build a permissionless, democratized, and decentralized AI.</p>
          <p className="font-[var(--second-family)]  text-[1.5rem] leading-[133%] text-white mt-[32px]">
            Let the fate of AI be in our hands and not that of big tech companies.</p>
          <div className="relative mt-[32px]">
            <Image
              src="/social.png"
              alt="social"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto  pointer-events-none"
            />
          </div>

        </div>
        <motion.div
          ref={moonRef}
          initial={{ opacity: 0.8 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 1.5,
          }}
          animate={{ opacity: 1 }}

          style={{
            translateX,
            translateY: translateYMoon,
            opacity: opacityMoon,
            transition: width > 640 ? "none" : "0.2s linear"
          }}
          className="max-w-[490px] max-h-[490px]  w-[100%] "
        >
          <Image
            src="/moon.png"
            alt="Alt text"
            width={800}
            height={600}
            className="w-full h-auto"
          >
          </Image>
        </motion.div>
      </div>
    </section>
  );
}