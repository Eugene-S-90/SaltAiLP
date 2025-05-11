"use client";
import { motion } from "framer-motion";
import Button from "../components/Button"
import { useLenis } from "lenis/react";
import { useUIStore } from "../stores/UIstore";

import Switcher from '../components/Switcher'


const containerVariants = {
    hidden: {},
    show: { translateY: -100, transition: { staggerChildren: 0.2 } },
};
const bulletVariants = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } };

export default function HeroSection() {
    const showBullets = useUIStore((s) => s.showBullets);
    const lenis = useLenis();
    function startScene() {
        lenis?.start();
        lenis?.scrollTo(1)
    }

    return (
        <section id="hero" className="hero overflow-hidden">
            <header className="flex items-center justify-center gap-[50px] pt-[31px] "
            >
                <p className="bg-clip-text text-white  hover:bg-[linear-gradient(129deg,_#b53ea4_0%,_#fc6f32_49.5%,_#ff4a59_100%)] hover:text-transparent transition-all duration-300 cursor-pointer" onClick={startScene}>How it works</p>
                <Button fontSize="18px">Buy Salt AI</Button>
                <div className="absolute right-0 z-20"> <Switcher /></div>

            </header>
            <motion.div
                initial={{ opacity: 0 }}
                animate={
                    showBullets
                        ? { y: -100, opacity: 1, scale: 0.95 }
                        : { opacity: 1 }
                }
                transition={{
                    y: { duration: 0.3, ease: "easeOut", delay: 0 },
                    opacity: { duration: 0.3, ease: "easeIn", delay: 0 },
                    scale: { duration: 0.3, ease: "easeIn", delay: 0.1 },
                }}
                style={{ transition: "0.5s all" }}
            >
                <h2 className={`font-['ClashGrotesk'] text-[8rem] max-sm:text-[6rem] font-bold pt-[13%] max-sm:pt-[25%] leading-[8rem] max-sm:leading-[6rem]  tracking-[2.8px] bg-[linear-gradient(129deg,_#b53ea4_0%,_#fc6f32_49.5%,_#ff4a59_100%)] duration-600 transition-all
          ${showBullets ? 'text-white' : ''}  
          bg-clip-text text-transparent`}>
                    A new economic primitive <br />for funding decentralized AI
                </h2>
                <p className="font-[var(--second-family)] text-[1.5rem] mt-[36px] mb-[36px] text-white">
                    We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
                </p>
                <div className="flex items-center gap-10">
                    <Button fontSize="24px" size="h-[4.8rem] min-w-[15rem]">Buy Salt AI</Button>
                    <p className="bg-clip-text text-white  hover:bg-[linear-gradient(129deg,_#b53ea4_0%,_#fc6f32_49.5%,_#ff4a59_100%)] hover:text-transparent transition-all duration-300 cursor-pointer" onClick={startScene}>Try now</p>
                </div>
            </motion.div>


            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={showBullets ? "show" : "hidden"}
                className="flex flex-col md:flex-row items-center justify-center gap-6 pt-[1rem] mt-[1.25rem] px-4"
            >
                {[
                    { value: '1,873', label: 'LLM models' },
                    { value: '$326,734', label: 'Paid to data scientists' },
                    { value: '6,557', label: 'Developers' },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        variants={bulletVariants}
                        transition={{ duration: 0.3, ease: "linear", delay: 0.6 }}

                        className="flex flex-col items-center justify-center max-sm:w-[90%] w-[25%] h-[190px] max-lg:h-[140px] max-sm:h-[80px]  rounded-full bg-[linear-gradient(101deg,_rgba(150,_52,_136,_0.2)_0%,_rgba(252,_111,_50,_0.2)_49.5%,_rgba(255,_74,_89,_0.2)_100%)] text-white"
                    >
                        <span className="text-[4rem] font-bold">{item.value}</span>
                        <span className="text-[1.5rem] font-medium">{item.label}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}