'use client'

import { motion } from "framer-motion"
import { useUIStore } from "../stores/UIstore"
import { useWindowSize } from '../hooks/useWindowSize'
import { useEffect, useState } from "react";

export default function Switcher() {
    const [isHidden, setIsHidden] = useState(false)
    const isScrollModeFree = useUIStore((s) => s.isScrollModeFree);
    const setScrollMode = useUIStore((s) => s.setScrollMode);

    const toggleSwitch = () => setScrollMode(!isScrollModeFree);

    const { width } = useWindowSize();

    useEffect(() => {
        if (width <= 1024) {
            setScrollMode(true);
            setIsHidden(true)
        }
        return () => {
            setScrollMode(false);
            setIsHidden(false)
        }
    }, [width, setScrollMode, setIsHidden])

    return (
        <>
            {
                isHidden ? null : <button
                    onClick={toggleSwitch}
                    className={`relative right-[100px] flex items-center w-[50px] h-[26px] px-[5px] py-[3px] rounded-full bg-[#4a2204] cursor-pointer transition ${!isScrollModeFree ? "justify-start" : "justify-end"}`}
                >
                    <span className={`absolute right-[-75px] ${isScrollModeFree ? "text-[#f56a3c]" : 'text-white'} text-[12px]`}> Free scroll</span>
                    <span className={`absolute left-[-75px]  ${!isScrollModeFree ? "text-[#f56a3c]" : 'text-white'} text-[12px]`}>Pages scroll</span>
                    <motion.div
                        className="w-[20px] h-[20px] bg-white rounded-full"
                        layout
                        transition={{
                            type: "spring",
                            duration: 0.2,
                            bounce: 0.2,
                        }}
                    />
                </button>
            }
        </>

    )
}