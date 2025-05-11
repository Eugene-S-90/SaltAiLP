"use client";

import { useEffect, useState } from "react";

type BreakpointValue<T> = T | T[];
type BreakpointObject<T> = {
  sm: BreakpointValue<T>;
  md: BreakpointValue<T>;
  lg: BreakpointValue<T>;
  xl: BreakpointValue<T>;
};

export function useBreakpointValue<T>(values: BreakpointObject<T>): BreakpointValue<T> {
  const getValue = (width: number): BreakpointValue<T> => {
    if (width < 640) return values.sm;
    if (width < 1024) return values.md;
    if (width < 1280) return values.lg;
    return values.xl;
  };

  const [value, setValue] = useState<BreakpointValue<T>>(() => {
    if (typeof window !== "undefined") {
      return getValue(window.innerWidth);
    }
    return values.xl;
  });

  useEffect(() => {
    const checkSize = () => {
      const newValue = getValue(window.innerWidth);
      setValue((prev) => {
        if (JSON.stringify(prev) !== JSON.stringify(newValue)) {
          return newValue;
        }
        return prev;
      });
    };

    window.addEventListener("resize", checkSize);
    checkSize();

    return () => window.removeEventListener("resize", checkSize);
  }, [values]);

  return value;
}