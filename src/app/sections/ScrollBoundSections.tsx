"use client"
import { useRef } from 'react'

import CommunitySection from "./CommunitySection";
import EarthSection from "./EarthSection";

import { useBreakpointValue } from "../hooks/useBreakPointsValue";
import { useScroll, useTransform } from "framer-motion";

export default function ScrollBoundSections() {

    const earthSectionRef = useRef(null)
    const joinSectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: joinSectionRef,
        offset: ['start end', 'end start'],
    });

    const translateYValues = useBreakpointValue({
        sm: [60, -250, -450],
        md: [160, -350, -550],
        lg: [60, -250, -400],
        xl: [60, -150, -400],
    }) as number[]

    const translateY = useTransform(scrollYProgress, [0, 0.5, 1], translateYValues);

    return (
        <>
            <CommunitySection joinSectionRef={joinSectionRef} />
            <EarthSection earthSectionRef={earthSectionRef} translateY={translateY} />
        </>
    )
}
