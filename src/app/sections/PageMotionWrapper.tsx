
"use client"
import { motion } from "framer-motion";
export default function PageMotionWrapper({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-[linear-gradient(180deg,_rgb(0,0,0)_0%,_rgb(0,0,0)_60%,_rgb(25,30,42)_100%)] page-wrapper"
        >
            {children}
        </motion.div>
    )
}
