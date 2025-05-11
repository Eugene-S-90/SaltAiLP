"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useUIStore } from "../stores/UIstore";
import { useWindowSize } from "../hooks/useWindowSize";

import Button from "../components/Button";

export default function CrowdsourcingSection() {
   
    const cometIsVisible = useUIStore((s) => s.cometIsVisible);
    const setCometIsVisible = useUIStore((s) => s.setCometIsVisible);
    const { width } = useWindowSize();

    return (
        <section id="crowdsourcing" className="w-[100%]  h-screen flex flex-col justify-center items-start relative overflow-hidden">
            <AnimatePresence>
                {cometIsVisible && <motion.div
                    initial={{ opacity: 0, x: -50, y: -50 }}
                    whileInView={{
                        opacity: 1,
                        x: width * 1.2,
                        y: 800,
                    }}
                    exit={{ opacity: 0, scale: 0.3 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3,
                        ease: "linear",
                    }}
                    onAnimationComplete={() => {
                        setTimeout(() => setCometIsVisible(false), 10);
                    }}
                    className="max-w-[160px] max-h-[90px] w-[100%] absolute top-0 left-[-50px]"
                >
                    <Image
                        src="/comet.png"
                        alt="Alt text"
                        width={800}
                        height={600}
                        className="w-full h-auto"
                    >
                    </Image>
                </motion.div>}
            </AnimatePresence>
            <div className="w-[60%] max-sm:w-[100%] flex flex-col justify-center items-start">
                <h2 className="font-[var(--third-family)] text-[4rem] leading-[110%] text-white">Crowdsourcing our collective intelligence to build the best AI</h2>
                <p className="font-[var(--second-family)]  text-[1.5rem] leading-[133%] text-white mt-[32px] mb-[32px]">Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.
                    Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. We run competitions between AI models to find and reward the best AI models. As a result, our users will be able to access the latest cutting edge AI models.</p>
                <Button>Use The Cutting Edge AI</Button>
            </div>
        </section>
    );
}