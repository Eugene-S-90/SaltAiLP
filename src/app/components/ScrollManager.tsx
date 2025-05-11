"use client"
import React from 'react'

import ScrollController from "./ScrollController";
import AutoScrollSections from "./AutoScrollSections";
import { useUIStore } from "../stores/UIstore"

export default function ScrollManager() {
    const isScrollModeFree = useUIStore((s) => s.isScrollModeFree);
    return (
        <>
            <ScrollController />
            {!isScrollModeFree && <AutoScrollSections />}
        </>
    )
}
