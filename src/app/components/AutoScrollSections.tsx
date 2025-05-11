"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import { useUIStore } from "../stores/UIstore";

export default function AutoScrollSections() {
  const lenis = useLenis();
  const sectionsRef = useRef<HTMLElement[]>([]);
  // const [isLocked, setIsLocked] = useState(false);
  const touchStartY = useRef<number | null>(null);
  const showBullets = useUIStore((s) => s.showBullets);


  useEffect(() => {

    sectionsRef.current = Array.from(document.querySelectorAll("section"));

    const getCurrentSection = () => {
      return sectionsRef.current.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });
    };

    const scrollToNextSection = (direction: "up" | "down") => {
      console.log("scrollToNextSection", direction);
      if (!lenis) return;

      const current = getCurrentSection();
      if (!current) return;

      const currentIndex = sectionsRef.current.indexOf(current);
      const nextIndex = direction === "down" ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex >= 0 && nextIndex < sectionsRef.current.length) {
        const nextSection = sectionsRef.current[nextIndex];
        // setIsLocked(true);

        lenis.scrollTo(nextSection, { duration: 0.5, easing: (t) => t });


        // setTimeout(() => setIsLocked(false), 1100);
      }
    };

    const onWheel = (e: WheelEvent) => {
      console.log("onWheel", e.deltaY);
      if (e.deltaY > 0) {
        scrollToNextSection("down");
      } else if (e.deltaY < 0) {
        scrollToNextSection("up");
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      console.log("onTouchStart", e);
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      console.log("onTouchEnd", e);
      if (touchStartY.current === null) return;

      const deltaY = touchStartY.current - e.changedTouches[0].clientY;

      if (Math.abs(deltaY) > 0) {
        const direction = deltaY > 0 ? "down" : "up";
        scrollToNextSection(direction);
      }

      touchStartY.current = null;
    };
    if (showBullets) {
      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });
    }

    return () => {

      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);


    };
  }, [lenis, showBullets]);

  return null;
}