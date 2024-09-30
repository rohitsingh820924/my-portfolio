// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="rounded-full md:h-10 h-[30px] p-1 border dark:border-white/[0.2]"
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      <svg
        id="sunmoon"
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <mask id="hole">
            <rect width="100%" height="100%" fill="white" />
            <circle
              id="overlay"
              className="transition-all dark:translate-x-[-90px] dark:translate-y-[90px]"
              r="80"
              cx="230"
              cy="-30"
              fill="black"
            />
          </mask>
          <filter id="blur">
            <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="gold" />
          </filter>
        </defs>
        <g filter="url(#blur)">
          <circle
            fill="gold"
            id="donut"
            r="80"
            cx="100"
            cy="100"
            mask="url(#hole)"
            className="transition-all dark:fill-white fill-yellow-400"
          />
        </g>
      </svg>
    </div>
  );
}
