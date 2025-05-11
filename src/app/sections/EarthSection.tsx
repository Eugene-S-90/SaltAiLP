"use client";
import { motion, MotionValue } from "framer-motion";
import { RefObject } from "react";


export default function EarthSection({ earthSectionRef,translateY }: { earthSectionRef: React.RefObject<HTMLDivElement> | RefObject<null>,translateY: MotionValue<number> }) {

  return (
    <section id="earth" ref={earthSectionRef} className="w-[100%] h-[100vh] relative">

      <div className="w-[100%] h-[100%] flex justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            y: { duration: 0.8, ease: "easeOut", delay: 0.1 },
            opacity: { duration: 3, ease: "easeOut", delay: 0.2 },
          }}
          className="font-[var(--second-family)]  text-[2rem] max-md:text-[4rem] max-sm:text-[2rem] leading-[100%] text-center text-white mt-[-20%] max-sm:mt-[-40vh]">
          Join our community and harvest $SALT
          <motion.p
            initial={{ opacity: 0.3, y: 160 }}
            whileInView={{ opacity: 0, y: 100 }}
            transition={{
              y: { duration: 0.6, ease: "easeOut", delay: 0.3 },
              opacity: { duration: 0.6, ease: "easeOut", delay: 0.4 },
            }}
            className="font-[var(--second-family)]  tracking-[33px] text-[4.2rem] leading-[100%] text-center text-white mt-[-25%] ">
            ARRAKIS
          </motion.p>
        </motion.h2>



        <motion.img src="/earth.png" alt="Arrow" className={`pointer-events-none w-[100%]  h-auto max-md:h-[40vh] max-sm:h-[50vh] max-md:bottom-[-65%]  max-sm:bottom-[-70%] max-xs:bottom-[-75%] bottom-[-55%] fixed`}
          style={{
            zIndex: 20,
            y: translateY,
            transition: "0.2s all cubic-bezier(0.22, 0.61, 0.36, 1)",
          }}
        />

      </div>
    </section>
  );
}