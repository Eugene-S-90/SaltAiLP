"use client";
import { useLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import { useUIStore } from "../stores/UIstore";

export default function ScrollController() {
    const lenis = useLenis();
    const onceScrolled = useRef(false);

    const showBullets = useUIStore((s) => s.showBullets);
    const setShowBullets = useUIStore((s) => s.setShowBullets);
    const setCometIsVisible = useUIStore((s) => s.setCometIsVisible);

    const isScrollModeFree = useUIStore((s) => s.isScrollModeFree);

    useEffect(() => {
        if (isScrollModeFree) {
            lenis?.start();
            return;
        }

        if (!lenis || onceScrolled.current) return;

        lenis.scrollTo(0, { immediate: true });
        lenis.stop();

        const preventScroll = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
        };
        const handleFirstInteraction = () => {
            onceScrolled.current = true;
            lenis.start();
            window.addEventListener("wheel", preventScroll, { passive: false });
            window.addEventListener("touchstart", preventScroll, { passive: false });

            setTimeout(() => {
                lenis.scrollTo(1, {
                    duration: 0.2,
                    onComplete: () => {
                        window.removeEventListener("wheel", preventScroll);
                        window.removeEventListener("touchstart", preventScroll);

                    },
                });
            }, 50);

            window.removeEventListener("wheel", handleFirstInteraction);
            window.removeEventListener("touchstart", handleFirstInteraction);
            window.removeEventListener("keydown", handleFirstInteraction);
        };

        window.addEventListener("wheel", handleFirstInteraction, { once: true });
        window.addEventListener("touchstart", handleFirstInteraction, { once: true });
        window.addEventListener("keydown", handleFirstInteraction, { once: true });

        return () => {
            window.removeEventListener("wheel", handleFirstInteraction);
            window.removeEventListener("touchstart", handleFirstInteraction);
            window.removeEventListener("keydown", handleFirstInteraction);
        };
    }, [lenis, isScrollModeFree]);

    useEffect(() => {
        if (!lenis) return;
        const update = ({ scroll }: { scroll: number }) => {
            if (scroll === 0) setCometIsVisible(true);

            if (scroll === 0 && showBullets) {
                setShowBullets(false);
            } else if (scroll > 0 && !showBullets) {
                setShowBullets(true);
            }

            // document.documentElement.style.setProperty("--scroll", scroll.toString());
        };

        lenis.on("scroll", update);
        return () => lenis.off("scroll", update);
    }, [lenis, showBullets,setShowBullets,setCometIsVisible]);

    return null;
}